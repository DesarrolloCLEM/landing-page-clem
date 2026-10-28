import "server-only";

import { deliverSubmission, type FormKind } from "@/lib/form-delivery";

import {
  consent,
  consentField,
  formMessages,
  honeypotField,
  minimumFillTimeMs,
  startedAtField,
} from "../data/forms";
import type { FormConfig, FormState } from "../types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(config: FormConfig, values: Record<string, string>) {
  const errors: Record<string, string> = {};
  for (const field of config.fields) {
    const value = values[field.name] ?? "";
    if (!value) {
      if (field.required) errors[field.name] = field.requiredMessage ?? formMessages.required;
      continue;
    }
    if (field.maxLength && value.length > field.maxLength)
      errors[field.name] = formMessages.tooLong(field.maxLength);
    else if (field.type === "email" && !emailPattern.test(value))
      errors[field.name] = formMessages.email;
    else if (field.type === "tel" && !/^\+?[\d\s()-]{7,20}$/.test(value))
      errors[field.name] = formMessages.phone;
    else if (field.type === "tel" && value.replace(/\D/g, "").length < 7)
      errors[field.name] = formMessages.phone;
    else if (field.options && !field.options.includes(value))
      errors[field.name] = formMessages.option;
  }
  return errors;
}

/** Shared server-side handling: anti-spam, validation and delivery. */
export async function handleSubmission(
  kind: FormKind,
  config: FormConfig,
  formData: FormData,
  subjectOf: (values: Record<string, string>) => string,
): Promise<FormState> {
  const submittedAt = Date.now();
  const values = Object.fromEntries(
    config.fields.map((field) => [field.name, String(formData.get(field.name) ?? "").trim()]),
  );

  // Bots: hidden field filled or form completed too fast. They get a success answer
  // so they do not learn to bypass the check, and nothing is delivered. The start time is
  // set by JavaScript; without it (no-JS visitors) only the hidden field applies.
  const startedAt = Number(formData.get(startedAtField));
  const tooFast = startedAt > 0 && submittedAt - startedAt < minimumFillTimeMs;
  if (formData.get(honeypotField) || tooFast) {
    return { status: "success", submittedAt };
  }

  const errors = validate(config, values);
  const accepted = formData.get(consentField) === "on";
  if (!accepted) errors[consentField] = consent.error;
  // The consent box is returned too, so it stays checked when the form remounts.
  const returned = { ...values, [consentField]: accepted ? "on" : "" };
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      submittedAt,
      errors,
      values: returned,
      message: formMessages.summary,
    };
  }

  const subject = subjectOf(values);
  try {
    await deliverSubmission({ kind, subject, fields: values });
  } catch {
    return { status: "error", submittedAt, values: returned, message: formMessages.deliveryError };
  }
  return { status: "success", submittedAt, subject };
}

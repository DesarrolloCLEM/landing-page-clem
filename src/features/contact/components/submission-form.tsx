"use client";

import { CircleCheck, Mail, Phone, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";

import { Button, Checkbox, FormField, Input, Select, Textarea } from "@/components/ui";
import { contact } from "@/config/site";
import { cn } from "@/lib/cn";

import { consent, consentField, formMessages, honeypotField, startedAtField } from "../data/forms";
import type { FieldConfig, FormConfig, FormState } from "../types";

// Client island: pending state, per-field errors and moving focus to the first error
// need useActionState and the DOM. The Server Action also works without JavaScript.

export type SubmissionFormProps = {
  config: FormConfig;
  action: (previous: FormState, formData: FormData) => Promise<FormState>;
};

function Field({ field, formId, state }: { field: FieldConfig; formId: string; state: FormState }) {
  const id = `${formId}-${field.name}`;
  const defaultValue = state.values?.[field.name] ?? "";
  return (
    <FormField
      id={id}
      label={field.label}
      hint={field.hint}
      error={state.errors?.[field.name]}
      required={field.required}
      className={cn(field.wide && "sm:col-span-2")}
    >
      {(control) =>
        field.type === "textarea" ? (
          <Textarea
            name={field.name}
            rows={5}
            maxLength={field.maxLength}
            defaultValue={defaultValue}
            {...control}
          />
        ) : field.type === "select" ? (
          <Select name={field.name} defaultValue={defaultValue} {...control}>
            <option value="">Selecciona una opción</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        ) : (
          <Input
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            maxLength={field.maxLength}
            defaultValue={defaultValue}
            {...control}
          />
        )
      }
    </FormField>
  );
}

export function SubmissionForm({ config, action }: SubmissionFormProps) {
  const [state, formAction, pending] = useActionState(action, { status: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Start time for the anti-spam check, renewed every time the form remounts.
  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, [state.submittedAt]);

  // After a response, move focus to the first invalid field or to the result message.
  useEffect(() => {
    if (state.status === "idle") return;
    const firstInvalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
    (firstInvalid ?? resultRef.current)?.focus();
  }, [state.status, state.submittedAt]);

  if (state.status === "success") {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col gap-3 rounded-card border border-health/40 bg-health-50 p-6 text-ink"
      >
        <p className="flex items-center gap-2 font-heading text-xl font-bold text-health-strong">
          <CircleCheck aria-hidden="true" className="size-6" />
          {config.successTitle}
        </p>
        {state.subject && (
          <p>
            Tipo de solicitud recibido: <strong>{state.subject}</strong>
          </p>
        )}
        <p>{config.successMessage}</p>
      </div>
    );
  }

  const consentId = `${config.id}-${consentField}`;

  return (
    <form
      key={state.submittedAt ?? "initial"}
      ref={formRef}
      id={config.id}
      action={formAction}
      noValidate
      className="flex flex-col gap-6"
    >
      {state.status === "error" && state.message && (
        <div
          ref={resultRef}
          tabIndex={-1}
          role="alert"
          className="flex flex-col gap-3 rounded-card border border-emergency/40 bg-emergency-50 p-5 text-ink"
        >
          <p className="flex gap-2 font-semibold text-emergency-strong">
            <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            {state.message}
          </p>
          {!state.errors && (
            <div className="flex flex-col gap-1 text-sm">
              <a
                href={contact.phone.href}
                className="inline-flex items-center gap-2 font-semibold text-primary"
              >
                <Phone aria-hidden="true" className="size-4" />
                {contact.phone.label}
              </a>
              <a
                href={contact.email.href}
                className="inline-flex items-center gap-2 font-semibold text-primary"
              >
                <Mail aria-hidden="true" className="size-4" />
                {contact.email.label}
              </a>
            </div>
          )}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {config.fields.map((field) => (
          <Field key={field.name} field={field} formId={config.id} state={state} />
        ))}
      </div>

      {/* Anti-spam: invisible to people, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${config.id}-${honeypotField}`}>No llenar este campo</label>
        <input
          id={`${config.id}-${honeypotField}`}
          name={honeypotField}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input ref={startedAtRef} type="hidden" name={startedAtField} defaultValue="" />

      <Checkbox
        id={consentId}
        name={consentField}
        required
        defaultChecked={state.values?.[consentField] === "on"}
        error={state.errors?.[consentField]}
        label={
          <>
            {consent.label}{" "}
            <Link
              href={consent.href}
              className="font-semibold text-primary underline underline-offset-4"
            >
              {consent.linkLabel}
            </Link>
            .
          </>
        }
      />

      <Button type="submit" size="lg" disabled={pending} className="self-start">
        {pending ? formMessages.sending : config.submitLabel}
      </Button>
    </form>
  );
}

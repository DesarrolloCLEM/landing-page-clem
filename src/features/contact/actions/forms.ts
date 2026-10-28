"use server";

import { accountDeletionForm, contactForm, feedbackForm } from "../data/forms";
import type { FormState } from "../types";
import { handleSubmission } from "./submission";

export async function submitContact(_previous: FormState, formData: FormData) {
  return handleSubmission("contacto", contactForm, formData, (values) => values.subject);
}

export async function submitFeedback(_previous: FormState, formData: FormData) {
  return handleSubmission("pqrs", feedbackForm, formData, (values) => values.requestType);
}

export async function submitAccountDeletion(_previous: FormState, formData: FormData) {
  return handleSubmission(
    "eliminar-cuenta",
    accountDeletionForm,
    formData,
    () => "Solicitud de eliminación de cuenta AppCLEM",
  );
}

import "server-only";

export type FormKind = "contacto" | "pqrs" | "eliminar-cuenta";

export type Submission = {
  kind: FormKind;
  /** Short label of the request, e.g. the PQRS type. */
  subject: string;
  fields: Record<string, string>;
};

/**
 * Delivery channel of the site forms. No mailbox is connected yet (design, decision 6):
 * submissions are only logged on the server, without personal data. A later change
 * replaces this function with SMTP or another channel without touching the forms.
 *
 * Set FORM_DELIVERY_SIMULATE_FAILURE=true to test the error path in staging.
 */
export async function deliverSubmission(submission: Submission): Promise<void> {
  if (process.env.FORM_DELIVERY_SIMULATE_FAILURE === "true") {
    throw new Error("Simulated delivery failure");
  }

  console.info(
    `[formularios] ${new Date().toISOString()} ${submission.kind}: ${submission.subject} (${Object.keys(submission.fields).length} campos)`,
  );
}

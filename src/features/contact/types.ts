export type FieldType = "text" | "email" | "tel" | "textarea" | "select";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  /** Message when a required field is empty; defaults to the generic one. */
  requiredMessage?: string;
  autoComplete?: string;
  hint?: string;
  maxLength?: number;
  options?: string[];
  /** Spans both columns on wide screens. */
  wide?: boolean;
};

export type FormConfig = {
  id: string;
  fields: FieldConfig[];
  submitLabel: string;
  successTitle: string;
  successMessage: string;
};

export type FormState = {
  status: "idle" | "success" | "error";
  /** Changes on every response, so the form remounts with the returned values. */
  submittedAt?: number;
  errors?: Record<string, string>;
  values?: Record<string, string>;
  message?: string;
  /** Request type confirmed back to the user (PQRS). */
  subject?: string;
};

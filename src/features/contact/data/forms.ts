import type { FieldConfig, FormConfig } from "../types";

export const consentField = "consent";
export const honeypotField = "website";
export const startedAtField = "startedAt";
/** Submissions faster than this are treated as automated. */
export const minimumFillTimeMs = 3000;

export const consent = {
  label: "Acepto que mis datos se recopilen y almacenen, de acuerdo con la",
  linkLabel: "política de tratamiento de datos personales",
  href: "/politica-de-tratamiento-de-datos/",
  error: "Debes aceptar el tratamiento de tus datos para enviar el formulario.",
};

export const formMessages = {
  required: "Este campo es obligatorio.",
  email: "Ingresa un correo electrónico válido, por ejemplo nombre@correo.com.",
  phone: "Ingresa un número de teléfono válido (solo números, de 7 a 15 dígitos).",
  tooLong: (max: number) => `Escribe máximo ${max} caracteres.`,
  option: "Selecciona una opción de la lista.",
  summary: "Revisa los campos marcados para continuar.",
  deliveryError:
    "No pudimos enviar tu mensaje en este momento. Tus datos siguen en el formulario: inténtalo de nuevo o comunícate con nosotros por teléfono o correo.",
  sending: "Enviando…",
};

const name: FieldConfig = {
  name: "name",
  label: "Nombre completo",
  type: "text",
  required: true,
  autoComplete: "name",
  maxLength: 120,
};
const email: FieldConfig = {
  name: "email",
  label: "Correo electrónico",
  type: "email",
  required: true,
  autoComplete: "email",
  maxLength: 160,
};
const phone: FieldConfig = {
  name: "phone",
  label: "Teléfono",
  type: "tel",
  required: true,
  autoComplete: "tel",
  maxLength: 20,
};
const message: FieldConfig = {
  name: "message",
  label: "Mensaje",
  type: "textarea",
  required: true,
  maxLength: 2000,
  wide: true,
};

export const contactForm: FormConfig = {
  id: "contact-form",
  fields: [
    name,
    email,
    phone,
    { name: "subject", label: "Asunto", type: "text", required: true, maxLength: 150 },
    message,
  ],
  submitLabel: "Enviar mensaje",
  successTitle: "¡Gracias por escribirnos!",
  successMessage: "Recibimos tu mensaje y te responderemos lo más pronto posible.",
};

export const requestTypes = ["Felicitación", "Sugerencia", "Queja", "Reclamo"];

export const feedbackForm: FormConfig = {
  id: "feedback-form",
  fields: [
    name,
    email,
    {
      name: "requestType",
      label: "Tipo de solicitud",
      type: "select",
      required: true,
      requiredMessage: "Selecciona el tipo de solicitud",
      options: requestTypes,
      wide: true,
    },
    { ...message, label: "Cuéntanos tu experiencia" },
  ],
  submitLabel: "Enviar",
  successTitle: "¡Gracias por tu opinión!",
  successMessage: "Tu solicitud quedó registrada y será atendida por nuestra Coordinación SIAU.",
};

export const accountDeletionForm: FormConfig = {
  id: "account-deletion-form",
  fields: [
    name,
    email,
    phone,
    { ...message, label: "Motivo o comentarios", required: false, hint: "Opcional." },
  ],
  submitLabel: "Solicitar eliminación",
  successTitle: "Recibimos tu solicitud",
  successMessage:
    "Procesaremos la eliminación de tu cuenta de AppCLEM y te confirmaremos por correo electrónico.",
};

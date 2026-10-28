/** A paragraph, or a bullet list when it is an array. */
export type AnswerBlock = string | string[];

export type FaqQuestion = { id: string; question: string; answer: AnswerBlock[] };

export type FaqCategory = { id: string; title: string; questions: FaqQuestion[] };

export const faqPage = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre copagos, consulta externa, consulta preanestésica, historia clínica e imagenología.",
  indexTitle: "Temas",
};

const copayQuestions = (prefix: string): FaqQuestion[] => [
  {
    id: `${prefix}-copagos-regimen-contributivo`,
    question: "¿Quiénes cancelan copagos en el régimen contributivo?",
    answer: [
      "Los afiliados beneficiarios:",
      [
        "Categoría A: afiliados con ingresos menores a 2 salarios mínimos vigentes. Cancelan el 11,5% del total de la atención prestada.",
        "Categoría B: afiliados con ingresos entre 2 y 5 salarios mínimos vigentes. Cancelan el 17,3% del total de la atención prestada.",
        "Categoría C: afiliados con ingresos superiores a 5 salarios mínimos vigentes. Cancelan el 23% del total de la atención prestada.",
      ],
    ],
  },
  {
    id: `${prefix}-copagos-regimen-subsidiado`,
    question: "¿Quiénes cancelan copagos en el régimen subsidiado?",
    answer: [
      "Las personas que estén en nivel 2 y 3 del Sisbén: 10% del valor total de la atención prestada.",
    ],
  },
  {
    id: `${prefix}-donde-pagar-copago`,
    question: "¿Dónde puedo realizar la cancelación de mi copago?",
    answer: [
      "En cada piso de nuestras instalaciones se encuentra un encargado del área de Facturación de cada servicio al que puede cancelar el valor pagado y le entregará una copia de la factura.",
    ],
  },
  {
    id: `${prefix}-horario-copago`,
    question: "¿Existe un horario para realizar la cancelación de mi copago?",
    answer: [
      [
        "Días de semana: Facturación de cada servicio, de 8:00 a. m. a 12:00 p. m. y de 2:00 p. m. a 6:00 p. m.",
        "Fin de semana: Admisiones de Urgencias, 24 horas.",
      ],
    ],
  },
];

// TODO(clinica): the legacy "Consulta externa" category repeats the copay questions.
export const faqCategories: FaqCategory[] = [
  { id: "copagos", title: "Copagos", questions: copayQuestions("copagos") },
  {
    id: "consulta-externa",
    title: "Consulta externa",
    questions: copayQuestions("consulta-externa"),
  },
  {
    id: "consulta-preanestesica",
    title: "Consulta preanestésica",
    questions: [
      {
        id: "documentos-consulta-preanestesica",
        question: "¿Qué debo presentar para solicitar una cita preanestésica?",
        answer: [
          "Usted debe haber realizado previamente la legalización de su autorización en el primer piso de nuestras instalaciones, antes de dirigirse a Programación Quirúrgica, donde deberá presentar los siguientes documentos:",
          [
            "Autorización EPS",
            "Documento de identidad del usuario",
            "Historia clínica",
            "Exámenes de laboratorio",
          ],
        ],
      },
      {
        id: "horario-citas-preanestesica",
        question: "¿Cuál es el horario de atención para solicitar citas?",
        answer: ["Lunes a viernes, de 8:00 a. m. a 12:00 p. m. y de 2:00 p. m. a 6:00 p. m."],
      },
      {
        id: "horario-consulta-preanestesica",
        question: "¿Cuál es el horario de atención para la consulta preanestésica?",
        answer: [
          "La atención por el especialista es de lunes a viernes de 9:00 a. m. a 11:00 a. m.",
        ],
      },
      {
        id: "contacto-consulta-preanestesica",
        question: "Si tengo una inquietud sobre este trámite, ¿a dónde me puedo comunicar?",
        answer: ["El número celular habilitado es: 317 372 1211."],
      },
    ],
  },
  {
    id: "historia-clinica",
    title: "Historia clínica",
    questions: [
      {
        id: "solicitar-historia-clinica",
        question: "¿Cómo solicito mi historia clínica?",
        answer: [
          [
            "La historia clínica es del paciente; sin embargo, puede entregarse a un padre o a sus hijos con el registro civil que demuestre la consanguinidad.",
            "La esposa podrá reclamar este documento por medio del acta de casamiento, o un certificado en la notaría en el que conste la unión libre.",
            "Además deberá presentar la carta de autorización legalizada en la notaría, con número de cédula y firma de la persona.",
          ],
          "Documentos para presentar:",
          ["Formato de autorización de la institución", "Copia de la cédula"],
        ],
      },
    ],
  },
  {
    id: "imagenologia",
    title: "Imagenología",
    questions: [
      {
        id: "cita-rayos-x",
        question: "¿Cómo agendo una cita para Rayos X?",
        answer: [
          "Usted debe comunicarse al número celular 320 655 9439 en el siguiente horario:",
          [
            "Lunes a viernes: 8:00 a. m. a 12:00 p. m. y 2:00 p. m. a 6:00 p. m.",
            "Sábado: 8:00 a. m. a 11:00 a. m.",
          ],
        ],
      },
      {
        id: "resultados-rayos-x",
        question: "¿En qué horario puedo reclamar mi resultado?",
        answer: [
          [
            "Lunes, jueves y viernes: en la tarde, de 2:00 p. m. a 5:30 p. m.",
            "Sábados: en la mañana, de 8:00 a. m. a 10:30 a. m.",
          ],
        ],
      },
    ],
  },
];

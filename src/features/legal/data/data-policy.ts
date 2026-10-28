// TODO(clinica): generic text based on Ley 1581 de 2012 and Decreto 1377 de 2013, published
// until the clinic provides its official personal data policy.

export type PolicySection = { id: string; title: string; paragraphs?: string[]; items?: string[] };

export const dataPolicy = {
  title: "Política de tratamiento de datos personales",
  description:
    "Cómo Clínica La Esperanza recolecta, usa y protege los datos personales que nos entregas a través de este sitio, de acuerdo con la Ley 1581 de 2012.",
  notice:
    "Esta es una versión general de la política. La versión oficial aprobada por la clínica la reemplazará en esta misma página.",
  sections: [
    {
      id: "responsable",
      title: "Responsable del tratamiento",
      paragraphs: [
        "Clínica La Esperanza – Evaluamos IPS, con domicilio en la Calle 12 # 4-58, Barrio Buenavista, Montería, Córdoba, es la responsable del tratamiento de los datos personales recolectados por este sitio web. Puedes comunicarte al correo info@clinicalaesperanza.co o al PBX 60(4) 784 8903.",
      ],
    },
    {
      id: "datos",
      title: "Datos que recolectamos",
      paragraphs: [
        "A través de los formularios del sitio recolectamos únicamente los datos que nos entregas de forma voluntaria: nombre, correo electrónico, teléfono y el contenido de tu mensaje o solicitud. No solicitamos datos sensibles ni información de tu historia clínica por este medio.",
      ],
    },
    {
      id: "finalidades",
      title: "Finalidades",
      items: [
        "Responder tus mensajes, solicitudes, felicitaciones, sugerencias, quejas y reclamos.",
        "Gestionar las solicitudes de eliminación de cuenta de la aplicación AppCLEM.",
        "Mejorar la calidad de nuestros servicios a partir de tu opinión.",
        "Cumplir las obligaciones legales aplicables a las instituciones prestadoras de servicios de salud.",
      ],
    },
    {
      id: "derechos",
      title: "Tus derechos como titular",
      paragraphs: ["De acuerdo con el artículo 8 de la Ley 1581 de 2012, tienes derecho a:"],
      items: [
        "Conocer, actualizar y rectificar tus datos personales.",
        "Solicitar prueba de la autorización otorgada para el tratamiento.",
        "Ser informado sobre el uso que se ha dado a tus datos.",
        "Presentar quejas ante la Superintendencia de Industria y Comercio.",
        "Revocar la autorización y solicitar la supresión de tus datos cuando no se respeten los principios, derechos y garantías legales.",
        "Acceder en forma gratuita a tus datos personales.",
      ],
    },
    {
      id: "consultas-y-reclamos",
      title: "Consultas y reclamos",
      paragraphs: [
        "Puedes ejercer tus derechos escribiendo a info@clinicalaesperanza.co. Las consultas se atenderán en un término máximo de diez (10) días hábiles y los reclamos en un término máximo de quince (15) días hábiles, contados a partir del día siguiente a su recibo, según lo establecido en la ley.",
      ],
    },
    {
      id: "seguridad",
      title: "Seguridad y conservación",
      paragraphs: [
        "Aplicamos medidas técnicas, humanas y administrativas para proteger tus datos contra pérdida, consulta, uso o acceso no autorizado. Conservamos los datos solo durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales.",
      ],
    },
  ] satisfies PolicySection[],
};

# Spec Delta

## Purpose

Define la página de contacto y los tres formularios del sitio (contacto, felicitaciones/sugerencias/quejas/reclamos y eliminación de cuenta de AppCLEM): sus campos, validaciones, consentimiento de datos y respuestas al usuario.

## ADDED Requirements

### Requirement: Página de contacto
La ruta `/contacto/` SHALL mostrar el formulario "Escríbenos", el bloque "Clínica La Esperanza Montería Córdoba – Fe, Amor y Servicio", la dirección con enlace a Google Maps, el PBX, el correo, los horarios de visita, las extensiones telefónicas y el mapa de ubicación.

#### Scenario: Extensiones telefónicas
- **WHEN** un visitante revisa las extensiones
- **THEN** ve en texto (no en imagen) Recepción Gerencia 309, Admisiones 100, Urgencias 108, Hospitalización 316-400, Consulta externa 114, Rayos X 125 y Laboratorio 117

#### Scenario: Acceso a PQRS
- **WHEN** un visitante quiere presentar una queja desde `/contacto/`
- **THEN** encuentra un enlace al formulario de felicitaciones, sugerencias, quejas y reclamos

### Requirement: Formulario de contacto
El formulario de contacto SHALL pedir nombre, correo, teléfono, asunto, mensaje y aceptación del tratamiento de datos, y pasar el mensaje validado al canal de entrega configurado del sitio. Conectar ese canal a un buzón (SMTP) queda para un change posterior.

#### Scenario: Envío correcto
- **WHEN** un visitante completa todos los campos válidos y envía
- **THEN** ve un mensaje de confirmación en la misma página y el canal de entrega recibe el mensaje con todos los datos

#### Scenario: Datos inválidos
- **WHEN** un visitante envía con el correo mal escrito o un campo obligatorio vacío
- **THEN** el formulario no se envía, cada campo con error muestra un mensaje en español junto al campo y el foco pasa al primer error

#### Scenario: Validación en el servidor
- **WHEN** alguien envía datos inválidos saltándose la validación del navegador
- **THEN** el servidor rechaza el envío y devuelve los mismos mensajes de error

### Requirement: Formulario de felicitaciones, sugerencias, quejas y reclamos
La ruta `/felicitaciones-sugerencias-quejas-y-reclamos/` SHALL conservar el texto introductorio del sitio actual (cuatro buzones físicos) y ofrecer un formulario con nombre, correo, tipo de solicitud (Felicitación, Sugerencia, Queja, Reclamo), mensaje y aceptación del tratamiento de datos.

#### Scenario: Radicación de una queja
- **WHEN** un visitante envía una queja válida
- **THEN** ve una confirmación que indica el tipo de solicitud recibido y el canal de entrega la recibe identificada por ese tipo

#### Scenario: Tipo obligatorio
- **WHEN** un visitante envía sin elegir el tipo de solicitud
- **THEN** el formulario muestra el error "Selecciona el tipo de solicitud"

### Requirement: Formulario de eliminación de cuenta de AppCLEM
La ruta `/eliminar-cuenta/` SHALL conservar la explicación del sitio actual (qué pasa al eliminar la cuenta de AppCLEM y cómo solicitarlo) y un formulario de solicitud con nombre, correo, teléfono y mensaje. La página MUST seguir disponible en esa misma URL porque las tiendas de aplicaciones la enlazan.

#### Scenario: Solicitud de eliminación
- **WHEN** un usuario de AppCLEM envía la solicitud
- **THEN** ve una confirmación y el canal de entrega la recibe marcada como solicitud de eliminación de cuenta

#### Scenario: URL estable
- **WHEN** se abre `https://clinicalaesperanza.co/eliminar-cuenta/`
- **THEN** la página responde 200 sin redirección

### Requirement: Consentimiento de tratamiento de datos
Todo formulario SHALL exigir que el usuario marque la aceptación "Acepto que mis datos se recopilen y almacenen" con enlace a la política de tratamiento de datos, en cumplimiento de la Ley 1581 de 2012.

#### Scenario: Sin aceptación
- **WHEN** un visitante envía un formulario sin marcar la aceptación
- **THEN** el formulario no se envía y se indica que la aceptación es obligatoria

### Requirement: Protección contra envíos automáticos
Los formularios SHALL rechazar envíos automatizados (spam) sin pedir al usuario resolver un reto visual.

#### Scenario: Envío de un bot
- **WHEN** un bot completa el campo trampa oculto o envía el formulario en menos de 3 segundos
- **THEN** el envío se descarta sin pasar al canal de entrega

### Requirement: Fallo del envío
Si el mensaje no puede entregarse, el formulario SHALL conservar lo que escribió el usuario y ofrecer los canales alternativos.

#### Scenario: Canal de entrega caído
- **WHEN** el canal de entrega falla con un formulario válido
- **THEN** el usuario ve un error en español, sus datos siguen en el formulario y se le muestran el teléfono y el correo de la clínica

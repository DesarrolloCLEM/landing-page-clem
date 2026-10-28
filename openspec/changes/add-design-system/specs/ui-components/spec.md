# Spec Delta

## Purpose

Define el comportamiento visible y accesible de los componentes genéricos de interfaz (acciones, texto, tarjetas y controles de formulario) que todas las páginas de la clínica reutilizan, para que la UI sea consistente y accesible en todo el sitio.

## ADDED Requirements

### Requirement: Variantes de acción consistentes
Los botones y los enlaces con apariencia de botón SHALL ofrecer las variantes primaria, secundaria, fantasma, urgencias e inversa (para fondos de color) en tamaños pequeño, mediano y grande, con la misma apariencia sin importar si el elemento es un botón o un enlace.

#### Scenario: Enlace con apariencia de botón primario
- **WHEN** una página muestra "Solicitar una cita" como enlace con la variante primaria
- **THEN** se ve igual que un botón primario y sigue siendo un enlace navegable (`<a href>`)

#### Scenario: Variante de urgencias
- **WHEN** se usa la variante de urgencias
- **THEN** el texto blanco sobre el fondo rojo cumple un contraste de al menos 4.5:1

#### Scenario: Botón sobre una sección de fondo primario
- **WHEN** se usa la variante inversa dentro de una sección con fondo primario
- **THEN** el botón se distingue del fondo y su texto cumple un contraste de al menos 4.5:1

### Requirement: Área táctil mínima en controles
Todo botón, enlace con apariencia de botón y control de formulario SHALL tener una altura mínima de 44 px.

#### Scenario: Botón pequeño en móvil
- **WHEN** se renderiza un botón de tamaño pequeño
- **THEN** su altura renderizada es de al menos 44 px

### Requirement: Botón sin envío accidental
Un botón SHALL NOT enviar un formulario a menos que se declare explícitamente como botón de envío.

#### Scenario: Botón dentro de un formulario sin tipo declarado
- **WHEN** se hace clic en un botón dentro de un formulario sin declarar su tipo
- **THEN** el formulario no se envía

### Requirement: Nivel semántico de encabezado independiente del tamaño visual
Los encabezados SHALL permitir elegir el nivel semántico (h1 a h6) independientemente de su tamaño visual, para mantener el orden de la jerarquía sin sacrificar el diseño.

#### Scenario: Título de tarjeta pequeño con nivel h3
- **WHEN** se muestra un título de tarjeta con nivel h3 y tamaño visual pequeño
- **THEN** el documento contiene un `<h3>` con el tamaño visual pequeño

### Requirement: Encabezado de sección estándar
El sistema SHALL ofrecer un encabezado de sección compuesto por una antetítulo opcional, un título y una descripción opcional, alineable a la izquierda o al centro, en el que el título sea el encabezado accesible de la sección.

#### Scenario: Sección con antetítulo
- **WHEN** una sección usa el encabezado estándar con antetítulo "Nuestros servicios" y título "Atención integral"
- **THEN** el antetítulo se muestra encima del título y la sección queda etiquetada por el título para tecnologías de asistencia

### Requirement: Tarjetas de contenido
El sistema SHALL ofrecer tarjetas que agrupen medio opcional (imagen o ícono), título, descripción, contenido y pie de acciones, con una variante interactiva que resalte la tarjeta al pasar el puntero o al recibir foco un enlace interno.

#### Scenario: Tarjeta de servicio enlazada
- **WHEN** una tarjeta interactiva contiene un enlace "Más información" y el usuario navega con teclado hasta ese enlace
- **THEN** el enlace muestra el foco visible y la tarjeta muestra el estado resaltado

### Requirement: Íconos decorativos ocultos a tecnologías de asistencia
Los íconos que acompañan a un texto SHALL ocultarse a las tecnologías de asistencia. Un ícono sin texto visible MUST tener una etiqueta accesible.

#### Scenario: Ícono junto a un título
- **WHEN** una tarjeta muestra un ícono junto al título "Urgencias"
- **THEN** el lector de pantalla anuncia solo "Urgencias"

### Requirement: Campos de formulario etiquetados y con errores anunciados
Cada control de formulario SHALL estar asociado a una etiqueta visible. Cuando el campo tenga ayuda o error, ese texto MUST quedar asociado al control y el error MUST marcar el control como inválido.

#### Scenario: Campo con error
- **WHEN** un campo "Correo electrónico" se muestra con el error "Ingresa un correo válido"
- **THEN** el control queda marcado como inválido, el error se anuncia como su descripción y el borde se muestra en color de error

#### Scenario: Campo obligatorio
- **WHEN** un campo se marca como obligatorio
- **THEN** la etiqueta muestra un indicador visible de obligatorio y el control declara que es requerido

### Requirement: Insignias informativas
El sistema SHALL ofrecer insignias cortas con variantes de color de marca (primaria, salud, urgencias y neutra) cuyo texto cumpla contraste AA.

#### Scenario: Insignia de urgencias 24 horas
- **WHEN** se muestra una insignia "24 horas" con la variante de urgencias
- **THEN** el texto cumple un contraste de al menos 4.5:1 sobre su fondo

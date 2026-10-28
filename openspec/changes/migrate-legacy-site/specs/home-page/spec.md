# Spec Delta

## Purpose

Define el contenido y el comportamiento de la página de inicio, que presenta la clínica, sus servicios principales, testimonios de pacientes y las vías rápidas para pedir cita o consultar resultados.

## ADDED Requirements

### Requirement: Hero de bienvenida con accesos rápidos
La página de inicio SHALL abrir con el mensaje "Cuidamos de ti y de los que amas" y el subtítulo "Atención médica integral con calidad, calidez y confianza", sobre una fotografía real de la clínica, con tres accesos: "Solicitar una cita", "App Clem" y "Resultados".

#### Scenario: Accesos del hero
- **WHEN** un visitante pulsa "Solicitar una cita", "App Clem" o "Resultados"
- **THEN** navega respectivamente a `/agenda/`, a `/app-clem/` y a la consulta de resultados de AppCLEM (`https://appclem.appideas.com.co/acceso-resultados`, en pestaña nueva)

#### Scenario: Hero en móvil
- **WHEN** la página se abre en una pantalla de 375 px
- **THEN** el título, el subtítulo y el botón principal se ven sin desplazarse y el texto mantiene contraste AA sobre la imagen

### Requirement: Mensaje de bienvenida institucional
La página de inicio SHALL incluir el texto de bienvenida del sitio actual ("Bienvenidos a Clínica La Esperanza, un lugar donde cada cuidado nace del deseo de verte bien…").

#### Scenario: Texto de bienvenida
- **WHEN** un visitante lee la sección siguiente al hero
- **THEN** encuentra el texto de bienvenida completo del sitio actual

### Requirement: Servicios médicos principales
La página de inicio SHALL presentar las cuatro unidades principales (Hospitalización, Cirugía, Consulta externa y Urgencias) con imagen, resumen del sitio actual y enlace "Más información" a su ficha.

#### Scenario: Tarjeta de servicio
- **WHEN** un visitante pulsa una tarjeta o su enlace "Más información"
- **THEN** navega a la ficha de esa unidad en `/servicios/<slug>/`

### Requirement: Áreas de atención y especialidades destacadas
La página de inicio SHALL mostrar la sección "Los mejores servicios médicos y la mejor atención" con sus cuatro áreas (Cirugía general y especialidades quirúrgicas, Medicina especializada, Cuidados intensivos y hospitalización, Ortopedia y traumatología) y las especialidades destacadas del sitio actual (Neurocirugía, Neurocirugía infantil, Medicina del dolor, Oftalmología), cada una enlazada a una página existente.

#### Scenario: Enlaces de áreas y especialidades
- **WHEN** un visitante pulsa cualquiera de las áreas o especialidades destacadas
- **THEN** navega a una página existente del catálogo de servicios, nunca a `#` ni a una página demo

#### Scenario: Acceso al catálogo completo
- **WHEN** un visitante pulsa "Ver todos los servicios"
- **THEN** navega a `/servicios/`

### Requirement: Cifras de capacidad instalada
La página de inicio SHALL mostrar las cifras de capacidad instalada publicadas en el sitio actual (camas habilitadas, camas de pediatría, UCI/UCIM adultos, cubículos de urgencias, salas de cirugía) tomadas de una única fuente compartida con Sobre nosotros y Nueva infraestructura.

#### Scenario: Consistencia de cifras
- **WHEN** se comparan las cifras de capacidad del inicio con las de Sobre nosotros y Nueva infraestructura
- **THEN** los valores son idénticos

### Requirement: Testimonios de pacientes
La página de inicio SHALL mostrar los testimonios del sitio actual (Laura Sofía Restrepo – Parto humanizado; Johan Cruz Martínez – Corrección de quiste biliar; Dr. Pedro Vieira – Cirugía de columna) con foto, resumen y enlace "Leer historia completa" al reel de Instagram correspondiente.

#### Scenario: Historia completa
- **WHEN** un visitante pulsa "Leer historia completa" en un testimonio
- **THEN** se abre en pestaña nueva el reel de Instagram de ese paciente

#### Scenario: Varios testimonios en móvil
- **WHEN** la sección se ve en móvil
- **THEN** los testimonios se recorren con desplazamiento táctil o controles accesibles, sin avanzar solos

### Requirement: Invitación a opinar
La página de inicio SHALL incluir el bloque "Tu opinión nos ayuda a seguir mejorando la atención" con el botón "Comparte tu experiencia con nosotros".

#### Scenario: Compartir experiencia
- **WHEN** un visitante pulsa "Comparte tu experiencia con nosotros"
- **THEN** navega al formulario de felicitaciones, sugerencias, quejas y reclamos

### Requirement: Ubicación y horarios de visita
La página de inicio SHALL cerrar con el bloque "Clínica La Esperanza Montería Córdoba – Fe, Amor y Servicio" con dirección, PBX, horarios de visita (Hospitalización, UCI Adultos, UCI Neonatal y pediátrica), botón "Solicitar una cita" y el mapa de ubicación.

#### Scenario: Mapa diferido
- **WHEN** la página carga
- **THEN** el mapa de Google se carga solo cuando el bloque se acerca a la pantalla y existe un enlace "Ver en Google Maps" que funciona sin cargar el mapa

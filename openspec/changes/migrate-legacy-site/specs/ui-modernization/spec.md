# Spec Delta

## Purpose

Define los criterios de experiencia de usuario que hacen que el sitio nuevo sea moderno frente al WordPress actual, y que aplican a todas las páginas: diseño responsive, jerarquía visual, interacción, accesibilidad y rendimiento.

## ADDED Requirements

### Requirement: Mismo contenido con presentación modernizada
Cada página migrada SHALL conservar todo el texto del sitio actual (con errores ortográficos evidentes corregidos) y presentarlo con los componentes del sistema de diseño, sin reproducir la maqueta de Elementor.

#### Scenario: Paridad de contenido
- **WHEN** se compara una página nueva con su archivo en `assets/legacy-site/content/`
- **THEN** todos los títulos, párrafos, listas y datos están presentes, salvo duplicados y textos de plantilla retirados de forma explícita

#### Scenario: Corrección ortográfica
- **WHEN** el sitio actual tiene errores evidentes en títulos ("Fonaudiología", "Oftamología", "Pedriatría", "Córdiba", "infraesctructura")
- **THEN** el sitio nuevo muestra la forma correcta ("Fonoaudiología", "Oftalmología", "Pediatría", "Córdoba", "infraestructura")

### Requirement: Diseño responsive móvil primero
Todas las páginas SHALL verse completas y usables desde 320 px hasta 1920 px de ancho, sin scroll horizontal y con áreas táctiles de al menos 44 × 44 px.

#### Scenario: Pantalla pequeña
- **WHEN** cualquier página se ve a 320 px
- **THEN** no hay scroll horizontal, ningún texto se corta y todos los botones se pueden tocar

#### Scenario: Tablas en móvil
- **WHEN** una tabla de datos (proyecciones, capacidad) se ve en móvil
- **THEN** se presenta como tarjetas o con scroll horizontal propio de la tabla, nunca de la página

### Requirement: Jerarquía clara y un solo título principal
Cada página SHALL tener exactamente un encabezado de nivel 1 y una estructura de encabezados sin saltos de nivel, con una cabecera de página que incluya título y, en páginas internas, migas de pan.

#### Scenario: Auditoría de encabezados
- **WHEN** se auditan los encabezados de cualquier página
- **THEN** hay un único `h1` y ningún salto de `h2` a `h4` (el sitio actual usa varios `h1` por página)

### Requirement: Llamadas a la acción consistentes
Las acciones principales (Solicitar cita, Llamar, WhatsApp, Descargar) SHALL tener siempre la misma apariencia y texto en todo el sitio, y cada página interna MUST cerrar con una llamada a la acción hacia agenda o contacto.

#### Scenario: Botón de cita
- **WHEN** se compara el botón "Solicitar cita" en el header, el inicio y una ficha de servicio
- **THEN** tiene el mismo estilo, texto y destino

### Requirement: Interacciones sin sorpresas
Los carruseles SHALL NOT avanzar solos; los acordeones, pestañas y menús MUST funcionar con teclado, y las animaciones MUST desactivarse cuando el visitante prefiere movimiento reducido.

#### Scenario: Movimiento reducido
- **WHEN** el sistema del visitante tiene activado `prefers-reduced-motion`
- **THEN** no hay animaciones de entrada ni transiciones de desplazamiento

#### Scenario: Navegación solo con teclado
- **WHEN** un usuario recorre una página solo con Tab, Enter, Espacio y Escape
- **THEN** alcanza y activa todos los controles y el foco siempre es visible

### Requirement: Accesibilidad WCAG 2.1 AA
Todas las páginas SHALL cumplir WCAG 2.1 nivel AA: contraste de texto, nombres accesibles en controles, formularios con etiquetas y errores asociados, y contenido usable con zoom al 200 %.

#### Scenario: Auditoría automática
- **WHEN** se ejecuta una auditoría automática de accesibilidad sobre cada página
- **THEN** no reporta errores de nivel A ni AA

#### Scenario: Zoom
- **WHEN** un visitante aplica zoom al 200 % en escritorio
- **THEN** todo el contenido sigue legible y operable sin pérdida de información

### Requirement: Rendimiento en móvil
Cada página SHALL obtener al menos 95 en Rendimiento, Accesibilidad, Buenas prácticas y SEO de Lighthouse en móvil, con LCP menor a 2,5 s.

#### Scenario: Página con más imágenes
- **WHEN** se mide con Lighthouse en móvil la página de Hospitalización
- **THEN** las cuatro categorías obtienen 95 o más

### Requirement: Contenido de terceros bajo demanda
Los mapas de Google y otros contenidos embebidos de terceros SHALL cargarse solo cuando el visitante se acerca a ellos o los solicita, y MUST tener una alternativa en texto con enlace.

#### Scenario: Página de contacto
- **WHEN** se abre `/contacto/` sin desplazarse
- **THEN** no se descarga ningún recurso de Google Maps

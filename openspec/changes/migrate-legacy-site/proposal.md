# Proposal

## Why

El sitio actual (WordPress + Elementor + tema Medeus) mezcla contenido real con restos del tema demo, tiene enlaces rotos, datos de plantilla visibles ("info@website.com", "Go to Shop"), imágenes enlazadas desde Unsplash y una sección nueva (Portafolio) que no aparece en el menú. Para reemplazarlo hay que definir con precisión qué contenido debe existir en la nueva landing y cómo debe comportarse, antes de construir página por página. El inventario completo del sitio ya está en `assets/legacy-site/` (rastreo del 2026-10-28).

## What Changes

- Se migra **todo el contenido real** del sitio actual (88 páginas con contenido, 254 imágenes y 18 PDF) a la nueva landing, con UI y UX modernizadas sobre el sistema de diseño de `add-design-system`.
- Se define la **estructura de navegación** del sitio nuevo: barra superior de contacto, menú principal con submenús, menú móvil, footer y botón flotante de WhatsApp.
- Se integra la sección **Portafolio** (hoy fuera del menú) dentro de la oferta de servicios: unidades asistenciales, especialidades y subespecialidades, programas especiales, opciones de hospitalización y nueva infraestructura.
- Se unifican las fichas de especialidad que hoy están duplicadas entre `/services/<slug>/` y `/p-sub-<slug>/`.
- **BREAKING (URLs):** las rutas `/services/*`, `/p-*` y `/otorrinolaringologia/` pasan a slugs en español bajo `/servicios/`. Toda URL antigua con contenido real redirige con 301 a su equivalente.
- Se retiran del sitio los restos del tema demo (`/team/*`, `/layouts/*`, `/services_group/*`, `/testimonials_group/*`, `/tag/*`, `/hospital/`) y los fragmentos internos (`/p-tab-*`, `/p-demo/`).
- Se corrigen los defectos detectados en el sitio actual: enlaces rotos (`/contact/`, `/shop/`, `/about-us/`), enlaces `#` sin destino, datos de plantilla, correos y teléfonos mal formados, testimonios con nombres duplicados y errores ortográficos evidentes en títulos.
- Se versionan en el repositorio los assets originales descargados (`assets/legacy-site/`) como fuente de imágenes y documentos.

**Fuera de alcance:**
- Rediseño de la identidad visual (logo, paleta, lema). Se respetan los de `brand-theme`.
- Contenido nuevo que no exista hoy en el sitio, salvo los textos mínimos para páginas vacías y los estados de formulario.
- La plataforma externa AppCLEM (`appclem.appideas.com.co`): resultados, preregistro y paquetes siguen allí; el sitio solo enlaza.
- Sistema de citas en línea propio: la agenda sigue siendo por WhatsApp.
- CMS o panel de administración: el contenido vive en el código.
- Blog, equipo médico (`/team/*` es contenido demo) y tienda.
- Analítica y gestor de consentimiento de cookies (change posterior).

**Features y rutas afectadas:**
- Features nuevas en `src/features/`: `home`, `about`, `transparency`, `services`, `patients`, `contact`, `appointments`, `app-clem` y `legal`.
- Layout público nuevo en `src/app/(site)/` con header, footer y navegación (cubre el change `add-site-layout` anunciado en `add-design-system`).
- Rutas nuevas en `src/app/(site)/`: `/`, `/sobre-nosotros/` y sus 7 subpáginas, `/nueva-infraestructura/`, `/servicios/` y sus fichas, `/paquetes-integrales/`, `/usuarios/` y sus 3 subpáginas, `/agenda/`, `/contacto/`, `/app-clem/`, `/eliminar-cuenta/` y `/politica-de-tratamiento-de-datos/` (nueva, exigida por el consentimiento de los formularios).
- Redirecciones 301 desde todas las URLs antiguas con contenido.

## Capabilities

### New Capabilities
- `site-navigation`: barra superior, menú principal y móvil, footer, WhatsApp flotante y datos de contacto institucionales como fuente única.
- `home-page`: secciones y contenido de la página de inicio.
- `institutional-info`: Sobre nosotros, políticas, organigrama, comités, proyecciones e infraestructura.
- `transparency-reports`: informes financieros, reportes de área e indicadores con descarga de PDF.
- `medical-services`: catálogo de servicios, unidades asistenciales, especialidades, programas especiales y opciones de hospitalización.
- `patient-services`: página de usuarios (SIAU y Alianza de Usuarios), deberes y derechos, preguntas frecuentes y testimonios.
- `contact-forms`: página de contacto, formulario de contacto, formulario PQRS y formulario de eliminación de cuenta de AppCLEM.
- `appointments-and-app`: agenda por WhatsApp, página App Clem y paquetes integrales con enlaces a la plataforma externa.
- `legacy-url-migration`: mapa de URLs antiguas a nuevas, redirecciones 301, retiro de páginas demo, sitemap y metadata SEO.
- `media-assets`: origen, optimización y texto alternativo de imágenes; disponibilidad de documentos PDF.
- `ui-modernization`: criterios de experiencia de usuario modernizada que aplican a todas las páginas (responsive, accesibilidad, rendimiento, interacción).

### Modified Capabilities
<!-- Ninguna. brand-theme, code-architecture y contribution-workflow se cumplen sin cambiar sus requisitos. -->

## Impact

- **Contenido fuente:** `assets/legacy-site/` (inventario, contenido en markdown por página, imágenes y PDF originales). Es la referencia obligatoria para redactar cada página.
- **Código:** layout del sitio, nueve features y sus rutas; configuración central de contacto, navegación y redirecciones.
- **Repositorio:** el directorio `assets/legacy-site/` agrega ~330 MB al historial de git (ningún archivo supera 10 MB).
- **SEO:** cambio de URLs mitigado con 301; títulos y descripciones propios por página.
- **Dependencias externas:** WhatsApp (`wa.me`), Google Maps (embed), AppCLEM, Google Play, App Store, Facebook, Instagram y TikTok.
- **Formularios:** hoy los resuelve Contact Form 7. En este change la entrega queda detrás de una función intercambiable que solo registra el envío; la conexión SMTP se hará en un change posterior (`design.md`, decisión 6). No hay dependencias nuevas.
- **Depende de:** `add-design-system` (componentes `ui` y `layout`).

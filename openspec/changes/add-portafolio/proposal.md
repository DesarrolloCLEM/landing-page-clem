# Proposal

## Why

El CEO de Clínica La Esperanza utiliza la URL `https://clinicalaesperanza.co/portafolio/` como brochure digital en conferencias, reuniones con aliados y presentaciones institucionales. Es un enlace privado que no forma parte de la navegación pública del sitio. El change `migrate-legacy-site` integró el contenido del portafolio dentro de `/servicios/`, pero eso resuelve la navegación del usuario final, no la necesidad del CEO de tener una pieza de presentación autónoma con su propio flujo. Al migrar el sitio a la nueva landing, el portafolio debe existir como sección independiente con las 28+ páginas, su propia navegación interna y todas las imágenes, cifras y datos de equipamiento que lo hacen útil como herramienta de presentación.

## What Changes

- Se crea la ruta `/portafolio/` como grupo de rutas independiente del layout público (`(site)`), con un layout propio que incluye logo, navegación interna y footer mínimo, pero sin TopBar, menú principal ni footer completo del sitio.
- Se crea una nueva feature `portfolio` en `src/features/portfolio/` con su propia data, componentes y tipos. Reutiliza los tipos y la data existente de `src/features/services/` a través de `src/config/` y archivos compartidos, sin importar directamente la feature `services`.
- Se implementan las 38 páginas del portafolio en `src/app/portafolio/`:
  - Página principal con hero, quiénes somos, servicios, infraestructura, historias e información de contacto.
  - 7 fichas de unidades asistenciales (hospitalización, urgencias, cuidado crítico, cirugía, ginecología y obstetricia, consulta externa, diagnóstico y apoyo terapéutico).
  - 5 páginas de hospitalización (pediátrica, suite VIP con comparativo de habitaciones, y 3 detalles de habitación).
  - 3 fichas de programas especiales (Nace con Esperanza con precios, Centro de Intervencionismo con equipos, Chequeos médicos preventivos).
  - 1 página de infraestructura (3 edificios, tabla de capacidad, galería del proyecto).
  - 22 fichas de especialidad con ruta dinámica.
- Las imágenes existentes en `public/images/services/` y `public/images/about/` se reutilizan; no se necesitan imágenes nuevas.
- Las rutas del portafolio se excluyen del `sitemap.xml`, de `robots.txt` (sin `Disallow` pero sin listado) y de la navegación del sitio (`config/navigation.ts`).
- Se corrigen los defectos del portafolio actual: errores ortográficos, botones `#` sin destino, textos duplicados, enlaces incorrectos en pediatría, contenido copiado de otra sección y cifras inconsistentes.

**Fuera de alcance:**
- Rediseño de la identidad visual o del contenido. Se conserva el mismo contenido del portafolio actual corrigiendo únicamente errores evidentes.
- Modo offline o descarga como PDF. El portafolio es una web consultada con conexión.
- Autenticación o protección con contraseña. El enlace es privado por no estar publicado, no por restricción de acceso.
- Analítica específica del portafolio (change posterior).
- Animaciones o transiciones de página más allá del sistema de scroll-motion existente.

**Feature y rutas afectadas:**
- Feature nueva: `src/features/portfolio/`.
- Rutas nuevas en `src/app/portafolio/` (fuera del grupo `(site)`).
- No se modifican las rutas ni features existentes.

## Capabilities

### New Capabilities
- `portfolio-site`: Sección del portafolio institucional como micrositio independiente del sitio público: layout propio, navegación interna, página principal con hero y secciones, fichas de servicio, especialidades, programas, hospitalización, infraestructura e historias. Excluido de la navegación pública y del sitemap.
- `portfolio-data`: Datos del portafolio (textos, cifras, equipamiento, precios, capacidad instalada, galería) que complementan la data compartida de servicios con contenido específico de presentación que no aparece en el sitio público.

### Modified Capabilities
<!-- Ninguna. Las capabilities existentes (brand-theme, code-architecture, contribution-workflow) se cumplen sin cambiar sus requisitos. -->

## Impact

- **Código:** una feature nueva (`portfolio`) y sus rutas. No modifica features existentes.
- **Datos compartidos:** lee `src/config/site.ts` y `src/config/stats.ts` como fuente de datos de contacto y cifras. La data de servicios que necesite el portafolio se expone desde archivos compartidos en `src/config/` o se duplica en la feature `portfolio`, respetando la regla de aislamiento de features.
- **Imágenes:** reutiliza las 108+ imágenes ya optimizadas en `public/images/`. No agrega imágenes nuevas.
- **Build:** agrega ~38 páginas prerenderizadas al build. Incremento estimado de ~10-15 s en build time.
- **SEO:** las rutas del portafolio no se indexan; no se listan en el sitemap ni se enlazan desde la navegación del sitio.
- **Dependencias externas:** ninguna nueva. Usa los mismos enlaces a WhatsApp, Google Maps, AppCLEM y redes sociales del sitio.
- **Depende de:** `add-design-system` (componentes `ui` y `layout`), `migrate-legacy-site` (imágenes y datos compartidos de servicios).

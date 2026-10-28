# Tasks

> Requisito previo: `add-design-system` completo. Contenido fuente de cada página: `assets/legacy-site/content/<slug>.md`. Mapa de URLs y decisiones: `design.md`.

## 1. Inventario y configuración compartida

- [x] 1.1 Versionar `assets/legacy-site/` (inventario, contenido, 254 imágenes y 18 PDF). Verificar con `git ls-files assets/legacy-site | wc -l` que hay al menos 272 archivos binarios más los de inventario y contenido.
- [x] 1.2 Crear `src/config/site.ts` con dirección, PBX, correo, WhatsApp de citas y de Alianza de Usuarios, redes, horarios de visita, horario de citas, extensiones y URLs de AppCLEM y tiendas (spec `site-navigation`). Verificar con `pnpm build` y con una búsqueda en `src/` que el teléfono y el correo no aparecen escritos fuera de este archivo.
- [x] 1.3 Crear `src/config/stats.ts` (cifras de capacidad y proyección) y `src/config/testimonials.ts` (tres testimonios con reel de Instagram); copiar las fotos de los testimonios a `public/images/testimonials/` reducidas a ≤ 2400 px. Verificar que los tres testimonios tienen nombre y procedimiento distintos.
- [x] 1.4 Crear `src/config/navigation.ts` con el menú principal, submenús, enlaces del footer y paquetes integrales. Verificar que ningún `href` es `#` ni apunta a `/contact/`, `/shop/` o `/about-us/`.
- [x] 1.5 Commit: `feat(config): agrega datos de contacto, navegación, cifras y testimonios`.

## 2. Layout del sitio

- [x] 2.1 Crear en `components/ui` `Breadcrumbs`, `ExternalLink` (pestaña nueva, `rel`, aviso accesible) y `Checkbox` siguiendo la skill `create-ui-component`, y agregarlos al catálogo `/ui`. Verificar en el HTML que `ExternalLink` incluye `rel="noopener noreferrer"` y el texto oculto "abre en una pestaña nueva".
- [x] 2.2 Crear `TopBar`, `Header` (sticky, logo, botón "Solicitar cita") y la isla `NavMenu` con submenús accesibles. Verificar con teclado que los submenús abren con Enter, cierran con Escape y el ítem activo tiene `aria-current="page"`.
- [x] 2.3 Crear la isla `MobileNav` con submenús expandibles, teléfono, WhatsApp y redes. Verificar a 375 px que el foco entra al menú al abrir, Escape lo cierra y el foco vuelve al botón.
- [x] 2.4 Crear `Footer`, `FloatingWhatsApp` y el enlace "Saltar al contenido"; montar `SiteLayout` en `src/app/(site)/layout.tsx` y mover el inicio provisional dentro del grupo. Verificar que el footer no tiene enlaces rotos y que el botón flotante no tapa el footer a 375 px.
- [x] 2.5 Crear `PageHeader` (título, migas de pan, imagen opcional) y `CtaBand` (cierre con "Solicitar cita" y teléfono) en `components/layout`. Verificar en `/ui` que ambos se ven bien a 320 px y 1280 px.
- [x] 2.6 Crear la página 404 en español con enlaces a Inicio, Servicios, Agenda y Contacto. Verificar con `curl -I` sobre el build que una URL inexistente responde 404.
- [x] 2.7 Commit: `feat(layout): agrega header, menú móvil, footer y página 404`.

## 3. Inicio

- [x] 3.1 Copiar las imágenes del inicio a `public/images/home/` (≤ 2400 px, nombres descriptivos) y crear la feature `home` con el hero y el texto de bienvenida (spec `home-page`). Verificar a 375 px que el título, el subtítulo y el botón principal se ven sin desplazarse.
- [x] 3.2 Agregar las secciones de servicios principales, áreas de atención, especialidades destacadas y cifras (`StatCard` nuevo en `ui`). Verificar que cada tarjeta enlaza a una ruta de `/servicios/` del mapa de URLs.
- [x] 3.3 Agregar testimonios (scroll-snap, sin avance automático), la invitación a opinar y el bloque de ubicación con mapa diferido y enlace "Ver en Google Maps". Verificar en DevTools que al cargar no se pide ningún recurso de Google Maps.
- [x] 3.4 Agregar metadata y datos estructurados de la clínica. Verificar la paridad de contenido contra `content/home.md` y validar el JSON-LD con la prueba de resultados enriquecidos.
- [x] 3.5 Commit: `feat(home): migra la página de inicio`.

## 4. Información institucional

- [x] 4.1 Crear la feature `about` con `/sobre-nosotros/` (accesos rápidos, cifras, reseña, misión, visión, valores, principios y fotos, sin duplicados). Verificar la paridad contra `content/sobre-nosotros.md`.
- [x] 4.2 Crear `/politicas-institucionales/` (con índice), `/organigrama/` (imagen ampliable con descripción textual) y `/comite/`. Verificar que hay cinco políticas y trece comités.
- [x] 4.3 Crear `/nuestras-proyecciones/` y `/nueva-infraestructura/` (tabla de capacidad responsive e `ImageGallery` nueva en `ui`). Verificar a 375 px que las tablas no generan scroll horizontal en la página.
- [x] 4.4 Commit: `feat(about): migra sobre nosotros y páginas institucionales`.

## 5. Transparencia

- [x] 5.1 Copiar los 18 PDF a `public/documentos/<categoría>/` con nombres legibles, registrar título, periodo y tamaño en los datos de la feature `transparency`, y crear `DocumentLink` en `ui`. Verificar que los 18 archivos existen y que sus tamaños coinciden con los datos.
- [x] 5.2 Crear `/informes-financieros/`, `/reportes-de-area/` e `/indicadores/`. Verificar que hay 18 enlaces de descarga, ordenados del periodo más reciente al más antiguo, con nombre accesible completo.
- [x] 5.3 Commit: `feat(transparency): migra informes financieros, reportes e indicadores`.

## 6. Servicios: catálogo y unidades

- [ ] 6.1 Definir los tipos de la feature `services` (unidad, especialidad, subespecialidad, programa, habitación) y crear `/servicios/` con la isla `ServiceSearch`. Verificar que sin JavaScript se ve la lista completa y que "uro" filtra Urología ignorando tildes.
- [ ] 6.2 Crear `/servicios/urgencias/` y `/servicios/consulta-externa/` uniendo `/services/*` y `p-*`; reemplazar las imágenes de Unsplash por fotos del inventario. Verificar la paridad contra los dos archivos de `content/` y que no hay imágenes externas.
- [ ] 6.3 Crear `/servicios/cirugia/`, `/servicios/cuidado-critico/` y `/servicios/diagnostico-y-apoyo-terapeutico/`. Verificar la paridad contra `content/` y que cada ficha cierra con `CtaBand`.
- [ ] 6.4 Crear `/servicios/hospitalizacion/` con hospitalización pediátrica, Suite VIP y la comparación de habitaciones, y las tres páginas de detalle de habitación con galería. Verificar a 375 px y 1280 px el comparativo de habitaciones.
- [ ] 6.5 Commit: `feat(services): agrega catálogo y fichas de unidades asistenciales`.

## 7. Especialidades y programas

- [ ] 7.1 Crear la ruta dinámica `/servicios/especialidades/[slug]/` con la plantilla de ficha (migas de pan, imagen, contenido, CTA y relacionados), parámetros generados en build y 404 para slugs desconocidos. Verificar con `pnpm build` que se prerenderizan todas las fichas.
- [ ] 7.2 Cargar las fichas quirúrgicas: cirugía general, de tórax, cardiovascular, plástica y reconstructiva, maxilofacial y pediátrica. Verificar la paridad de cada una contra sus archivos de `content/` (ver mapa de URLs).
- [ ] 7.3 Cargar neurocirugía, neurocirugía pediátrica, ortopedia y traumatología, urología, otorrinolaringología y oftalmología. Verificar la paridad contra `content/`.
- [ ] 7.4 Cargar medicina interna, neurología, dermatología, alergología, medicina del dolor, salud mental, nutrición y dieta, anestesiología y radiología. Verificar la paridad contra `content/`.
- [ ] 7.5 Cargar ginecología y obstetricia, perinatología, pediatría (con sus subespecialidades sin ficha), cardiología pediátrica, hematología pediátrica, fisioterapia, medicina física y rehabilitación y fonoaudiología. Verificar que "Neumología pediátrica" aparece como texto sin enlace.
- [ ] 7.6 Crear `/servicios/programas/` y las fichas Nace con Esperanza, Chequeos médicos preventivos y Centro de Intervencionismo Cardiovascular. Verificar la paridad contra `content/` y que los chequeos con paquete enlazan a AppCLEM.
- [ ] 7.7 Commit: `feat(services): agrega fichas de especialidades y programas especiales`.

## 8. Usuarios

- [ ] 8.1 Crear la feature `patients` con `/usuarios/` (SIAU, Alianza de Usuarios, compromisos y testimonios de `src/config/testimonials.ts`). Verificar que el botón de la Alianza abre `wa.me/573044748399`.
- [ ] 8.2 Crear `Tabs` en `ui` y `/deberes-y-derechos/`. Verificar que las flechas del teclado cambian de pestaña y que sin JavaScript se ven ambos bloques.
- [ ] 8.3 Crear `Accordion` (sobre `<details>`) en `ui`, la isla `FaqHashOpener` y `/preguntas-frecuentes/` con datos estructurados de FAQ. Verificar que una URL con ancla abre esa pregunta y que todas las respuestas están en el HTML.
- [ ] 8.4 Commit: `feat(patients): migra usuarios, deberes y derechos y preguntas frecuentes`.

## 9. Agenda, App Clem y paquetes

- [ ] 9.1 Crear la feature `appointments` con `/agenda/` (pasos numerados en texto y horario de citas). Verificar que "Agendar por WhatsApp" abre `wa.me/573046843367`.
- [ ] 9.2 Crear la feature `app-clem` con `/app-clem/` (Resultados, Registro previo con su aviso, insignias de tiendas). Verificar los cuatro destinos externos y que el texto de Resultados no repite el de Registro previo.
- [ ] 9.3 Crear `/paquetes-integrales/` con Latidos de vida, Mujer Sana y Listo para entrenar enlazados a AppCLEM. Verificar que los tres botones abren su URL en una pestaña nueva.
- [ ] 9.4 Commit: `feat(app-clem): agrega agenda, App Clem y paquetes integrales`.

## 10. Contacto y formularios

- [ ] 10.1 Crear `src/lib/form-delivery.ts` con `deliverSubmission()` (solo servidor), que por ahora registra en el log el tipo de formulario y la fecha, sin SMTP (design, decisión 6). Verificar con `pnpm build` que el módulo no llega al bundle del cliente.
- [ ] 10.2 Crear en la feature `contact` la validación en servidor, el campo trampa y el tiempo mínimo de llenado. Verificar que un envío en menos de 3 s o con el campo trampa lleno se descarta.
- [ ] 10.3 Crear `/contacto/` con la isla `ContactForm` (Server Action, errores por campo, foco en el primer error, datos conservados si falla) y extensiones en texto. Verificar envío correcto, error de validación y fallo simulado de la entrega.
- [ ] 10.4 Crear `/felicitaciones-sugerencias-quejas-y-reclamos/` con `FeedbackForm` y tipo de solicitud obligatorio. Verificar que el envío registrado indica el tipo de solicitud.
- [ ] 10.5 Crear `/eliminar-cuenta/` con `AccountDeletionForm`. Verificar que la URL responde 200 sin redirección y que el envío se registra como solicitud de eliminación.
- [ ] 10.6 Crear la feature `legal` con `/politica-de-tratamiento-de-datos/` con un texto genérico basado en la Ley 1581 de 2012 (marcado `TODO(clinica)`), y enlazarla desde la casilla de consentimiento de los tres formularios. Verificar que ningún formulario se envía sin la aceptación.
- [ ] 10.7 Commit: `feat(contact): agrega contacto y formularios`.

## 11. Migración de URLs y SEO

- [ ] 11.1 Crear `src/config/redirects.ts` con el mapa de URLs de `design.md`, exponerlo en `next.config.ts` como redirecciones permanentes y activar `trailingSlash`. Verificar con `curl -I` que `/services/hepatitis-a-vaccine/` responde 301 hacia `/servicios/especialidades/ortopedia-y-traumatologia/`.
- [ ] 11.2 Agregar al mapa las 18 URLs de PDF en `/wp-content/uploads/` a partir de `inventory/assets-manifest.json`. Verificar que `/wp-content/uploads/2024/11/2019-I.pdf` redirige a un PDF que responde 200.
- [ ] 11.3 Crear `sitemap.xml` y `robots.txt` y revisar que cada página tiene título y descripción únicos. Verificar que el sitemap no contiene `/services/`, `/p-` ni `/team/`.
- [ ] 11.4 Crear `scripts/check-redirects.mjs`, que recorre todo el mapa contra un servidor local y falla si un destino no responde 200 en un salto o si una URL demo no responde 404; documentarlo en el README. Verificar que el script pasa sobre `pnpm build && pnpm start`.
- [ ] 11.5 Commit: `feat(seo): agrega redirecciones 301, sitemap y robots`.

## 12. Verificación final

- [ ] 12.1 Ejecutar `pnpm lint && pnpm format:check && pnpm build` sin errores y confirmar que todas las rutas se generan prerenderizadas.
- [ ] 12.2 Recorrer `inventory/site-map.md` y confirmar que cada página con contenido tiene su página nueva o una redirección, con paridad de contenido revisada.
- [ ] 12.3 Buscar en el HTML generado `href="#"`, `wp-content`, `unsplash`, `info@website.com` y `https://https://`, sin resultados.
- [ ] 12.4 Revisar responsive a 320, 375, 768, 1280 y 1920 px, navegación solo con teclado y zoom al 200 % en inicio, una ficha de especialidad, hospitalización, preguntas frecuentes y contacto.
- [ ] 12.5 Ejecutar una auditoría automática de accesibilidad (axe) en todas las rutas, sin errores A ni AA.
- [ ] 12.6 Ejecutar Lighthouse móvil en inicio, hospitalización, contacto e informes financieros, con ≥ 95 en las cuatro categorías.
- [ ] 12.7 Ejecutar `scripts/check-redirects.mjs` sobre el build final.

## Workflow follow-up

- Publicar en staging, cambiar el DNS y vigilar los 404 según el plan de migración de `design.md`.
- Archivar el change con `/opsx:archive migrate-legacy-site` después de la revisión del PR.

# Design

## Context

- Motivación y alcance: ver `proposal.md`. Requisitos: ver `specs/`.
- El contenido fuente ya está extraído en `assets/legacy-site/`:
  - `inventory/site-map.md`: las 129 URLs rastreadas, clasificadas (menú, especialidad, portafolio, enlazada, fragmento, demo, rota).
  - `inventory/pages.json`: por página, título, descripción, encabezados, imágenes (con su archivo local), documentos, iframes, formularios y enlaces externos.
  - `inventory/assets-manifest.json`: correspondencia URL original → archivo local.
  - `content/<slug>.md`: texto de cada página en orden de lectura.
  - `images/AAAA/MM/` (254 originales, 309 MB) y `documents/AAAA/MM/` (18 PDF).
- `add-design-system` (en curso, 18/28 tareas) aporta los componentes de `ui` y `layout`. Este change depende de que esté terminado.
- Restricciones de proyecto: Server Components por defecto, contenido prerenderizado, arquitectura por feature, tokens de `brand-theme`.

## Goals / Non-Goals

**Goals:**
- Que cada requisito de los specs pueda implementarse con contenido estático tipado, sin CMS.
- Un solo lugar para cada dato que se repite (contacto, cifras, testimonios, navegación, mapa de URLs).
- Que el JavaScript en el cliente se limite a las islas justificadas abajo.

**Non-Goals:**
- Automatizar la importación desde WordPress: el contenido se transcribe desde `assets/legacy-site/content/` y se revisa a mano.
- Optimizar los originales de `assets/legacy-site/`: se conservan intactos como archivo.

## Decisions

### 1. Contenido como datos tipados por feature
Cada feature guarda su contenido en `src/features/<feature>/data/*.ts` con tipos en `types.ts`. Los datos compartidos entre features (contacto, horarios, redes, navegación, cifras de capacidad, testimonios, mapa de URLs) viven en `src/config/`, porque una feature no puede importar otra.
- *Alternativa descartada:* MDX por página. Mezcla contenido y maquetación y no da tipos para las listas (especialidades, PDF, indicadores) que se reutilizan entre páginas.

### 2. Features y rutas

| Feature | Rutas |
| --- | --- |
| `home` | `/` |
| `about` | `/sobre-nosotros/`, `/politicas-institucionales/`, `/organigrama/`, `/comite/`, `/nuestras-proyecciones/`, `/nueva-infraestructura/` |
| `transparency` | `/informes-financieros/`, `/reportes-de-area/`, `/indicadores/` |
| `services` | `/servicios/`, `/servicios/<unidad>/`, `/servicios/hospitalizacion/<opción>/`, `/servicios/especialidades/[slug]/`, `/servicios/programas/`, `/servicios/programas/[slug]/` |
| `patients` | `/usuarios/`, `/deberes-y-derechos/`, `/preguntas-frecuentes/` |
| `contact` | `/contacto/`, `/felicitaciones-sugerencias-quejas-y-reclamos/`, `/eliminar-cuenta/` |
| `appointments` | `/agenda/` |
| `app-clem` | `/app-clem/`, `/paquetes-integrales/` |
| `legal` | `/politica-de-tratamiento-de-datos/` |

Las fichas de especialidad y de programa usan una ruta dinámica con todos los slugs generados en build; un slug desconocido responde 404.

### 3. Imágenes: copias reducidas en `public/`, originales en `assets/`
Cada imagen que use una página se copia de `assets/legacy-site/images/` a `public/images/<feature>/` con nombre descriptivo en español y lado mayor de 2400 px como máximo, y se entrega con `next/image`. Los originales quedan intactos como archivo.
- *Alternativa descartada:* importar directamente desde `assets/legacy-site/`. Rompe la convención de `create-feature` y obliga a procesar fotos de 5–10 MB en cada build.
- *Alternativa descartada:* copiar los originales sin reducir. Duplica cientos de MB en el repositorio.

### 4. PDF en `public/documentos/`
Los 18 PDF se copian a `public/documentos/<informes-financieros|reportes-de-area|indicadores>/` con nombres legibles (`estados-financieros-2024-2025.pdf`). El tamaño que muestra cada enlace se guarda en los datos.

### 5. Redirecciones declaradas en configuración
El mapa de URLs (sección siguiente) vive en `src/config/redirects.ts` y `next.config.ts` lo expone como redirecciones permanentes. `trailingSlash: true` conserva el formato de URL actual. Las URLs de PDF en `/wp-content/uploads/...` se incluyen en el mismo mapa.
- *Alternativa descartada:* middleware/proxy. Agrega ejecución por petición para un mapa estático.

### 6. Formularios con Server Actions y entrega intercambiable
Los tres formularios usan Server Actions con validación en el servidor (y atributos nativos en el cliente), campo trampa y tiempo mínimo de llenado. La entrega pasa por una función `deliverSubmission()` de `src/lib/form-delivery.ts`. **En esta versión no hay SMTP:** la implementación por defecto registra el envío en el log del servidor (sin datos personales completos) y responde éxito. Conectar SMTP u otro canal es un change posterior que solo reemplaza esa función.
- *Alternativa descartada:* esperar el SMTP para publicar los formularios. Bloquea el resto del sitio por una credencial.
- *Alternativa descartada:* un servicio externo de formularios. Saca datos personales de pacientes a un tercero sin necesidad.

### 7. Islas `"use client"` justificadas

| Componente | Por qué necesita cliente |
| --- | --- |
| `MobileNav` | Abrir/cerrar, atrapar el foco, Escape y `aria-expanded`. |
| `NavMenu` (submenús de escritorio) | `aria-expanded` y cierre con Escape o clic fuera; solo hover/focus-within no es accesible. |
| `ServiceSearch` | Filtra el catálogo mientras se escribe. Sin JS se ve la lista completa. |
| `Tabs` (deberes y derechos) | Patrón de pestañas con flechas del teclado. Sin JS se ven ambos paneles. |
| `FaqHashOpener` | Abre la pregunta de la URL con ancla. Las preguntas usan `<details>` nativo y funcionan sin JS. |
| Formularios (`ContactForm`, `FeedbackForm`, `AccountDeletionForm`) | Estado pendiente, errores por campo y foco en el primer error con `useActionState`. |

No requieren cliente: header fijo (`position: sticky`), carrusel de testimonios (scroll-snap nativo), mapa (`iframe` con `loading="lazy"` detrás de un enlace en texto), WhatsApp flotante y acordeón FAQ.

### 8. Componentes de `components/ui` y `components/layout`
- **Se reutilizan** (de `add-design-system`): `Button`, `TextLink`, `Heading`, `Text`, `Eyebrow`, `SectionHeading`, `Badge`, `Card*`, `IconBox`, `Label`, `Input`, `Textarea`, `Select`, `FormField`, `Container`, `Section`, `Grid`, `Stack`.
- **Se crean en `ui`:** `Breadcrumbs`, `Accordion` (sobre `<details>`), `Tabs`, `StatCard`, `DocumentLink`, `Checkbox`, `ExternalLink`, `ImageGallery`.
- **Se crean en `layout`:** `TopBar`, `Header`, `NavMenu`, `MobileNav`, `Footer`, `SiteLayout`, `PageHeader`, `FloatingWhatsApp`, `CtaBand`.

### 9. Assets versionados en git
Por decisión del equipo, `assets/legacy-site/` (~330 MB) se versiona en git sin LFS. Ningún archivo supera 10 MB, así que GitHub lo acepta.

## Mapa de URLs

Las URLs que no aparecen aquí conservan su ruta (ver `specs/legacy-url-migration`). Todas las redirecciones son 301.

**Unidades, hospitalización y programas**

| URL antigua | URL nueva |
| --- | --- |
| `/nuestros-servicios/`, `/portafolio/`, `/services/` | `/servicios/` |
| `/services/urgencias/`, `/p-urgencias/` | `/servicios/urgencias/` |
| `/services/hospitalizacion/`, `/p-hospitalizacion/` | `/servicios/hospitalizacion/` |
| `/services/cirugia/`, `/p-cirugia/`, `/cirugias/` | `/servicios/cirugia/` |
| `/services/consulta-externa/`, `/p-consulta-externa/` | `/servicios/consulta-externa/` |
| `/p-cuidado-critico/` | `/servicios/cuidado-critico/` |
| `/p-diagnostico-y-apoyo-terapeutico/` | `/servicios/diagnostico-y-apoyo-terapeutico/` |
| `/p-pediatria/` | `/servicios/hospitalizacion/pediatrica/` |
| `/p-suite-vip/` | `/servicios/hospitalizacion/suite-vip/` |
| `/p-detalle-habitacion-estandar/` | `/servicios/hospitalizacion/habitacion-estandar/` |
| `/p-detalle-habitacion-plus/` | `/servicios/hospitalizacion/habitacion-plus/` |
| `/p-detalle-suite-serena/` | `/servicios/hospitalizacion/suite-serena/` |
| `/p-programas-especiales/` | `/servicios/programas/` |
| `/p-nace-con-esperanza/` | `/servicios/programas/nace-con-esperanza/` |
| `/p-chequeo-medicos-preventivos/` | `/servicios/programas/chequeos-medicos-preventivos/` |
| `/p-centro-de-intervencionismo/` | `/servicios/programas/centro-de-intervencionismo/` |
| `/p-infraestructura/` | `/nueva-infraestructura/` |
| `/latidos-de-vida/`, `/mujer-sana/` | `/paquetes-integrales/` |

**Especialidades** (destino `/servicios/especialidades/<slug>/`)

| URL antigua | Slug nuevo |
| --- | --- |
| `/services/hepatitis-a-vaccine/`, `/p-sub-ortopedia-y-traumatologia/` | `ortopedia-y-traumatologia` |
| `/services/rotavirus-vaccine/`, `/p-sub-cirugia-plastica/` | `cirugia-plastica-y-reconstructiva` |
| `/services/modern-clinic/`, `/p-sub-neurocirugia/` | `neurocirugia` |
| `/services/primary-care/`, `/p-sub-cirugia-cardiovascular/` | `cirugia-cardiovascular` |
| `/services/preventative-care/` | `cirugia-de-torax` |
| `/services/birthing-care/`, `/p-sub-cirugia-general/` | `cirugia-general` |
| `/services/experienced-doctors/` | `medicina-del-dolor` |
| `/services/heart-care/` | `hematologia-pediatrica` |
| `/services/chiropractic-care/`, `/p-ginecologia-y-obstetricia/` | `ginecologia-y-obstetricia` |
| `/services/cirugia-pediatrica/` | `cirugia-pediatrica` |
| `/services/medical-massage/` | `perinatologia` |
| `/services/annual-screening/`, `/p-sub-urologia/` | `urologia` |
| `/services/family-medicine/`, `/p-sub-cirugia-maxilofacial/` | `cirugia-maxilofacial` |
| `/services/emergency-help/`, `/otorrinolaringologia/` | `otorrinolaringologia` |
| `/services/regular-check-ups/`, `/p-sub-oftamologia-y-oculoplastia/` | `oftalmologia` |
| `/services/diagnostics-centre/` | `neurocirugia-pediatrica` |
| `/p-sub-dermatologia/` | `dermatologia` |
| `/p-sub-alergologia/` | `alergologia` |
| `/p-sub-fonaudiologia/` | `fonoaudiologia` |
| `/p-sub-medicina-fisica-y-rehabilitacion/` | `medicina-fisica-y-rehabilitacion` |
| `/p-sub-nutricion-y-dieta/` | `nutricion-y-dieta` |
| `/p-sub-radiologia/` | `radiologia` |
| `/p-sub-fisioterapia/` | `fisioterapia` |
| `/p-sub-salud-mental/` | `salud-mental` |
| `/p-sub-neurologia/` | `neurologia` |
| `/p-medicina-interna/` | `medicina-interna` |
| `/p-anestesiologia/` | `anestesiologia` |
| `/p-sub-cardiologia-pediatrica/` | `cardiologia-pediatrica` |
| `/p-pediatria-2/`, `/p-neumologia-pediatrica/` | `pediatria` |

**PDF:** cada `/wp-content/uploads/AAAA/MM/<archivo>.pdf` de `inventory/assets-manifest.json` redirige a su archivo en `/documentos/...` (decisión 4).

## Risks / Trade-offs

- [Cifras de capacidad contradictorias en el sitio actual] → Se centralizan en `src/config/` y se publican solo las que confirme la clínica (ver preguntas abiertas).
- [Fusionar `/services/*` con `p-sub-*` puede perder o duplicar texto] → La revisión de cada ficha se hace contra los dos archivos de `content/` en la misma tarea.
- [Cambiar URLs puede bajar el posicionamiento temporalmente] → 301 en un solo salto, sitemap nuevo y canónicas; se envía el sitemap a Search Console al publicar.
- [Repositorio pesado por `assets/legacy-site/`] → Aceptado por el equipo. Clonar con `--filter=blob:none` si se vuelve lento.
- [Mientras no haya SMTP, los formularios no llegan a la clínica] → No se publica a producción sin conectar la entrega; el log del servidor permite verificar el flujo en staging.
- [Contenido de AppCLEM fuera de nuestro control] → Solo se enlaza; las URLs externas viven en `src/config/` para cambiarlas en un solo lugar.

## Migration Plan

1. Terminar `add-design-system`.
2. Implementar el layout del sitio y la configuración compartida, luego cada feature en el orden de `tasks.md`. Cada grupo se integra a `main` sin afectar al WordPress en producción.
3. Publicar el sitio nuevo en un dominio de staging y verificar: paridad de contenido, enlaces, redirecciones (script que recorre el mapa de URLs) y Lighthouse.
4. Cambiar el DNS de `clinicalaesperanza.co` al sitio nuevo. Mantener el WordPress accesible en un subdominio interno 30 días.
5. **Rollback:** devolver el DNS al WordPress. No hay migración de datos, así que revertir es inmediato.
6. Después del cambio: enviar el sitemap a Search Console y revisar los errores 404 durante 2 semanas para completar el mapa de URLs.

## Open Questions

Por decisión del equipo se avanza con valores genéricos, marcados con `// TODO(clinica):` en el código para reemplazarlos cuando la clínica los confirme:

- **Cifras oficiales de capacidad:** el sitio actual publica 123, 125 y 105 camas actuales y 218, 210 y 205 proyectadas. Se usan las del Portafolio, que es la versión más reciente (123 habilitadas, 218 proyectadas, 7.764 m²), hasta que la clínica confirme.
- **Entrega de formularios (SMTP y buzones):** pospuesto; ver decisión 6.
- **Texto de la política de tratamiento de datos:** se publica un texto genérico basado en la Ley 1581 de 2012 hasta que la clínica entregue el oficial.
- **Preguntas frecuentes de "Consulta externa":** en el sitio actual repiten las de Copagos. Se publican así.
- **Descripciones de los paquetes integrales:** se redactan descripciones breves y genéricas a partir del nombre de cada paquete.

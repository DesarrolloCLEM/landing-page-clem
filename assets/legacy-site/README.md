# Sitio anterior (WordPress): inventario y assets

Copia de referencia de https://clinicalaesperanza.co/, rastreado el **2026-10-28** desde `wp-sitemap.xml` y los enlaces internos. Es la fuente de contenido del change `openspec/changes/migrate-legacy-site/`. **No se sirve en el sitio:** cada feature copia a `public/` solo lo que usa.

## Contenido

| Ruta | Qué hay |
| --- | --- |
| `inventory/site-map.md` | Las 129 URLs rastreadas, clasificadas, con enlace a su contenido. |
| `inventory/pages.json` | Por página: estado HTTP, grupo, título, descripción, encabezados, imágenes (con archivo local), documentos, iframes, formularios y enlaces externos. |
| `inventory/assets-manifest.json` | URL original → archivo local de cada imagen y PDF. |
| `content/<slug>.md` | Texto de cada página con contenido, en orden de lectura; las imágenes apuntan a los archivos locales. |
| `images/AAAA/MM/` | 254 imágenes originales (sin los tamaños que genera WordPress), 309 MB. |
| `documents/AAAA/MM/` | 18 PDF: 12 informes financieros, 1 reporte de área y 5 indicadores. |

## Clasificación de las páginas

| Grupo | Páginas | Se migra |
| --- | --- | --- |
| Menú principal | 20 | Sí |
| Fichas de especialidad (`/services/<slug>/`, slugs en inglés del tema) | 16 | Sí, con slug nuevo |
| Portafolio (`/portafolio/`, `/p-*`; no está en el menú) | 41 | Sí, integrado en Servicios |
| Otras publicadas (App Clem, Eliminar cuenta, Nuestros servicios…) | 6 | Sí |
| Fragmentos (`/p-tab-*`, `/p-demo/`) | 5 | No |
| Restos del tema demo (`/team/*`, `/layouts/*`, `/tag/*`…) | 37 | No |
| Rotas (`/hospital/` 500; `/contact/`, `/shop/`, `/about-us/` 404) | 4 | No |

## Stack del sitio anterior

WordPress + Elementor + tema **Medeus** (ThemeREX Addons) + Revolution Slider + Contact Form 7 + Chaty (WhatsApp) + All in One SEO.

## Enlaces externos

- **WhatsApp citas:** `wa.me/573046843367` · **Alianza de Usuarios:** `wa.me/573044748399`
- **AppCLEM:** `appclem.appideas.com.co` (`/acceso-resultados`, `/preregistro-paciente`, `/paquetes-latidos-de-vida`, `/mujer-sana`, `/listo-para-entrenar`)
- **Tiendas:** Google Play `com.clem.app_clem` · App Store `id6752122596`
- **Redes:** facebook.com/clinicalaesperanzamonteria · instagram.com/clinicalaesperanza_ · tiktok.com/@clinicalaesperanzamtr
- **Teléfono:** `tel:6047848903` · **Correo:** `info@clinicalaesperanza.co`

## Defectos detectados en el sitio actual

- El header y el footer enlazan a `/contact/` y `/shop/` (404). El inicio enlaza a `/about-us/` (404).
- El menú móvil muestra textos de plantilla: "Have a Project?", `info@website.com`, "Go to Shop". Hay `tel:18001234566` y `mailto:6047848903`.
- El enlace del footer a la clínica es `https://https://www.clinicalaesperanza.co`.
- Consulta externa usa imágenes enlazadas desde Unsplash.
- `/paquetes-integrales/`, `/mujer-sana/` y `/cirugias/` están vacías; `/latidos-de-vida/` solo embebe AppCLEM.
- `/usuarios/` repite "Laura Sofia Restrepo" y "Parto humanizado" en testimonios que no son suyos, y sus botones "Leer historia completa" apuntan a `#`.
- App Clem: el bloque "Resultados" repite el texto de "Registro previo".
- Las cifras de capacidad no coinciden entre páginas: 123, 125 y 105 camas actuales; 218, 210 y 205 proyectadas.
- Preguntas frecuentes: la sección "Consulta externa" repite las preguntas de "Copagos".
- `/sobre-nosotros/` repite la reseña histórica y la misión. Varias páginas tienen más de un `h1`.
- Erratas en títulos: "Fonaudiología", "Oftamología", "Pedriatría", "Córdiba", "infraesctructura".

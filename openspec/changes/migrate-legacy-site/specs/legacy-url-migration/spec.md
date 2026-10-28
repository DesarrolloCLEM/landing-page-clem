# Spec Delta

## Purpose

Garantiza que el reemplazo del WordPress no rompa enlaces ni posicionamiento: define qué URLs se conservan, cuáles redirigen, cuáles se retiran, y la metadata que cada página expone a buscadores y redes sociales.

## ADDED Requirements

### Requirement: URLs en español conservadas
Las páginas del sitio actual cuyo slug ya está en español y no cambia de lugar (por ejemplo `/sobre-nosotros/`, `/organigrama/`, `/usuarios/`, `/agenda/`, `/contacto/`, `/eliminar-cuenta/`) SHALL responder en la misma URL, con barra final.

#### Scenario: URL conservada
- **WHEN** se solicita `/politicas-institucionales/`
- **THEN** responde 200 con la página de políticas

#### Scenario: Sin barra final
- **WHEN** se solicita `/contacto` sin barra final
- **THEN** responde con una redirección permanente a `/contacto/`

### Requirement: Redirecciones permanentes de URLs con contenido
Toda URL del sitio actual con contenido real que cambie de ruta (`/services/*`, `/nuestros-servicios/`, `/portafolio/`, `/p-*`, `/otorrinolaringologia/`, `/cirugias/`, `/latidos-de-vida/`, `/mujer-sana/`) SHALL redirigir con 301 a su equivalente según el mapa de URLs del change, en un solo salto.

#### Scenario: Slug heredado del tema
- **WHEN** se solicita `/services/hepatitis-a-vaccine/`
- **THEN** responde 301 hacia `/servicios/especialidades/ortopedia-y-traumatologia/`

#### Scenario: Página del Portafolio
- **WHEN** se solicita `/p-suite-vip/`
- **THEN** responde 301 hacia `/servicios/hospitalizacion/suite-vip/`

#### Scenario: Sin cadenas de redirección
- **WHEN** se sigue cualquier redirección del mapa
- **THEN** el destino responde 200 directamente, sin una segunda redirección

### Requirement: Documentos con URL antigua
Las URLs de los PDF publicados en `/wp-content/uploads/...` SHALL redirigir con 301 a la nueva ubicación del mismo documento.

#### Scenario: Enlace antiguo a un informe
- **WHEN** se solicita `/wp-content/uploads/2024/11/2019-I.pdf`
- **THEN** responde 301 hacia la URL nueva del mismo PDF, que responde 200

### Requirement: Retiro de páginas demo y fragmentos
Las páginas sin contenido de la clínica (`/team/*`, `/team_group/*`, `/layouts/*`, `/services_group/*`, `/testimonials_group/*`, `/tag/*`, `/services/page/*`, `/hospital/`, `/p-tab-*`, `/p-demo/`) SHALL NOT publicarse. Responden con la página 404 del sitio.

#### Scenario: Página del equipo demo
- **WHEN** se solicita `/team/anna-show/`
- **THEN** responde 404 con la página de error del sitio

### Requirement: Página 404 útil
La página de error 404 SHALL estar en español, conservar header y footer, y ofrecer enlaces a Inicio, Servicios, Agenda y Contacto.

#### Scenario: URL inexistente
- **WHEN** un visitante abre una URL que no existe
- **THEN** ve la página 404 con esos cuatro enlaces y el código HTTP es 404

### Requirement: Metadata por página
Cada página SHALL tener título único con el formato "<Página> - Clínica La Esperanza Montería", descripción propia de hasta 160 caracteres, URL canónica e imagen para compartir en redes.

#### Scenario: Títulos únicos
- **WHEN** se listan los títulos de todas las páginas publicadas
- **THEN** no hay dos páginas con el mismo título ni descripción

#### Scenario: Compartir en WhatsApp
- **WHEN** se comparte el enlace de una ficha de servicio en WhatsApp
- **THEN** la vista previa muestra el título, la descripción y una imagen de ese servicio

### Requirement: Sitemap y robots
El sitio SHALL publicar `/sitemap.xml` con todas las páginas indexables y `/robots.txt` que lo referencie. Las páginas retiradas y las redirecciones MUST NOT aparecer en el sitemap.

#### Scenario: Contenido del sitemap
- **WHEN** se lee `/sitemap.xml`
- **THEN** contiene cada página publicada del sitio y ninguna URL de `/services/`, `/p-*` ni `/team/`

### Requirement: Datos estructurados de la clínica
El inicio y la página de contacto SHALL exponer datos estructurados de tipo hospital o clínica médica con nombre, dirección, teléfono, coordenadas, horarios y redes sociales.

#### Scenario: Validación de datos estructurados
- **WHEN** se valida el inicio con una herramienta de resultados enriquecidos
- **THEN** se detecta la entidad de la clínica sin errores

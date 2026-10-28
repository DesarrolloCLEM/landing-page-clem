# Spec Delta

## Purpose

Define de dónde salen las imágenes y documentos del sitio, cómo se entregan al visitante y qué garantías de rendimiento, accesibilidad y disponibilidad cumplen.

## ADDED Requirements

### Requirement: Inventario del sitio anterior como fuente
El repositorio SHALL conservar en `assets/legacy-site/` el inventario del sitio anterior: mapa de páginas, contenido en markdown por página, manifiesto de assets, imágenes originales y PDF. Las páginas nuevas MUST tomar su contenido e imágenes de esa fuente.

#### Scenario: Trazabilidad de una imagen
- **WHEN** se revisa una imagen publicada en el sitio nuevo
- **THEN** su original se encuentra en `assets/legacy-site/images/` y en `assets/legacy-site/inventory/assets-manifest.json`

### Requirement: Solo imágenes propias de la clínica
El sitio SHALL usar solo imágenes servidas desde su propio dominio. Las imágenes que el sitio actual enlaza desde Unsplash (fichas de Consulta externa) MUST reemplazarse por fotografías de la clínica del inventario.

#### Scenario: Revisión de orígenes
- **WHEN** se inspeccionan las peticiones de imágenes de cualquier página
- **THEN** ninguna imagen se solicita a `images.unsplash.com` ni a `clinicalaesperanza.co/wp-content/`

### Requirement: Imágenes optimizadas y responsivas
Cada imagen SHALL servirse en formato moderno, en el tamaño adecuado al ancho de pantalla, con dimensiones declaradas, y con carga diferida cuando está fuera de la primera pantalla.

#### Scenario: Foto original pesada
- **WHEN** una página usa una foto cuyo original pesa más de 5 MB
- **THEN** el visitante en móvil descarga una versión de menos de 200 KB

#### Scenario: Sin saltos de diseño
- **WHEN** las imágenes terminan de cargar
- **THEN** el contenido no se desplaza (CLS menor a 0,1)

### Requirement: Texto alternativo en español
Toda imagen informativa SHALL tener texto alternativo en español que describa su contenido; las decorativas MUST tener texto alternativo vacío. Las imágenes que contienen texto (extensiones, pasos de agenda, organigrama) MUST tener ese texto disponible en la página.

#### Scenario: Imagen informativa
- **WHEN** un lector de pantalla llega a la foto de la fachada en Sobre nosotros
- **THEN** anuncia una descripción como "Fachada de Clínica La Esperanza en Montería", no un nombre de archivo

### Requirement: Identidad visual en los assets
El sitio SHALL usar el logo horizontal azul del inventario en header y footer en una versión nítida en pantallas de alta densidad, y un ícono del sitio (favicon) con el símbolo de la clínica.

#### Scenario: Pantalla retina
- **WHEN** el header se ve en una pantalla de densidad 2x
- **THEN** el logo se ve nítido, sin pixelado

### Requirement: Documentos PDF disponibles
Los 18 PDF del inventario (12 informes financieros, 1 reporte de área y 5 indicadores) SHALL publicarse desde el nuevo sitio con nombres de archivo estables y legibles.

#### Scenario: Conteo de documentos
- **WHEN** se cuentan los enlaces de descarga de las tres páginas de transparencia
- **THEN** hay 18 enlaces y todos responden 200 con un PDF

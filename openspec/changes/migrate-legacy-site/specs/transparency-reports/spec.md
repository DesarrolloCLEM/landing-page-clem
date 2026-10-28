# Spec Delta

## Purpose

Define cómo el sitio publica los documentos de transparencia de la clínica (estados financieros, reportes de área e indicadores de gestión) para que cualquier persona pueda consultarlos y descargarlos.

## ADDED Requirements

### Requirement: Informes financieros
La ruta `/informes-financieros/` SHALL listar los doce periodos de estados financieros del sitio actual, del más reciente (2024-2025) al más antiguo (2014-2013), cada uno con título, periodo y enlace de descarga a su PDF.

#### Scenario: Descarga de un informe
- **WHEN** un visitante pulsa "Descargar" en "Estados Financieros Comparativos Periodo (2024-2025)"
- **THEN** recibe el PDF `NOTAS-ESTADOS-FINANCIEROS-CELM-SAS-2025-2024-OK.pdf` servido desde el dominio del sitio

#### Scenario: Orden de los periodos
- **WHEN** un visitante abre la página
- **THEN** el primer informe es el del periodo más reciente

### Requirement: Reportes de área
La ruta `/reportes-de-area/` SHALL publicar el "Reporte del área seguridad y salud en el trabajo" con su PDF descargable.

#### Scenario: Descarga del reporte
- **WHEN** un visitante pulsa descargar
- **THEN** recibe el PDF `REPORTE-DE-SEGURIDAD-Y-SALUD-EN-EL-TRABAJO.pdf`

### Requirement: Indicadores de gestión
La ruta `/indicadores/` SHALL listar los reportes externos de indicadores de gestión del sitio actual (2019-I, 2018-II, 2018-I, 2017-II, 2017-I), con su periodo en meses y PDF descargable.

#### Scenario: Descarga de un indicador
- **WHEN** un visitante pulsa descargar en "Reporte Externo de Indicadores de Gestión 2017-I"
- **THEN** recibe el PDF del periodo enero-junio 2017

### Requirement: Enlaces de descarga informativos
Cada enlace de descarga SHALL indicar que es un PDF y su tamaño aproximado, y su nombre accesible MUST incluir el título del documento (no solo "Descargar").

#### Scenario: Lector de pantalla
- **WHEN** un lector de pantalla lista los enlaces de `/informes-financieros/`
- **THEN** cada enlace se anuncia con el periodo del informe, por ejemplo "Descargar estados financieros 2024-2025 (PDF, 1,2 MB)"

### Requirement: Documentos disponibles sin el sitio anterior
Todos los PDF de transparencia SHALL servirse desde el nuevo sitio y no depender de `wp-content/uploads` del WordPress actual.

#### Scenario: Apagado del WordPress
- **WHEN** el WordPress actual deja de estar en línea
- **THEN** todos los enlaces de descarga de las tres páginas siguen funcionando

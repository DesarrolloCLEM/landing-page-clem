# Spec Delta

## Purpose

Datos del portafolio institucional que complementan la configuración compartida del sitio con contenido específico de presentación: textos del hero y quiénes somos, historias de pacientes, cifras de infraestructura, equipamiento médico, precios de programas y la galería de imágenes por sección.

## ADDED Requirements

### Requirement: Datos de la página principal
La feature del portafolio SHALL exponer los datos de la página principal: hero con lema y subtítulo, sección "Quiénes somos" con descripción y accesos rápidos, lista de los 8 servicios con título, imagen y enlace, historias que inspiran con título, imagen y descripción, y datos de contacto. Los datos de contacto MUST leerse de `src/config/site.ts`.

#### Scenario: Datos de contacto desde fuente única
- **WHEN** se construye la sección de contacto del portafolio
- **THEN** el teléfono, correo, dirección y WhatsApp coinciden exactamente con `src/config/site.ts`

#### Scenario: Historias que inspiran
- **WHEN** se renderizan las historias en el landing del portafolio
- **THEN** aparecen 3 historias con título, imagen y descripción: la cirugía de Johan Cruz Martínez, la cirugía de columna y el parto humanizado

### Requirement: Datos de unidades reutilizados
La feature del portafolio SHALL leer los datos de unidades asistenciales, especialidades, programas y habitaciones desde archivos compartidos expuestos en `src/config/` o desde data duplicada dentro de la propia feature, sin importar `src/features/services/`. Los slugs, títulos e imágenes MUST coincidir con los del sitio público.

#### Scenario: Coincidencia de slugs
- **WHEN** se comparan los slugs de servicios del portafolio con los de `/servicios/`
- **THEN** cada slug del portafolio tiene su equivalente en el sitio público con el mismo título

#### Scenario: Aislamiento de features
- **WHEN** se busca en `src/features/portfolio/` una importación de `@/features/services`
- **THEN** no se encuentra ninguna

### Requirement: Datos de infraestructura con tabla de capacidad
La feature del portafolio SHALL exponer la tabla de capacidad (servicio, camas actuales, expansión, proyección), los 3 edificios con lote, área construida y detalles, y las cifras destacadas. Las cifras destacadas MUST leerse de `src/config/stats.ts` como fuente única para evitar inconsistencias.

#### Scenario: Cifras desde fuente única
- **WHEN** se renderizan las cifras destacadas de infraestructura
- **THEN** camas habilitadas, m² de nueva torre y camas proyectadas coinciden con `src/config/stats.ts`

#### Scenario: Tabla de capacidad completa
- **WHEN** se renderiza la tabla de capacidad
- **THEN** tiene 6 filas de servicio más un total, con las 3 columnas (actual, expansión, proyección)

### Requirement: Datos de equipamiento médico
La data del portafolio SHALL incluir el listado de equipos del Centro de Intervencionismo (4 confirmados con marca, modelo y función, 4 pendientes con descripción) y los equipos de Ginecología (Voluson y Logiq Totus con descripción). El estado (confirmado/pendiente) MUST ser visible.

#### Scenario: Equipos del intervencionismo
- **WHEN** se renderiza la ficha del Centro de Intervencionismo
- **THEN** se muestran 4 equipos confirmados con marca/modelo (Dräger Atlan A300, Dräger Vista 300, BIS Covidien, TOFscan) y 4 equipos marcados como "pendiente de confirmación"

#### Scenario: Equipos de ginecología
- **WHEN** se renderiza la ficha de Ginecología y Obstetricia
- **THEN** se muestran Voluson (ecógrafo de perinatología) y Logiq Totus (equipo con elastografía)

### Requirement: Datos de precios de programas
La data de Nace con Esperanza SHALL incluir los 2 planes con precio, inclusiones compartidas e inclusiones específicas por plan. Los precios MUST mostrarse en formato de moneda colombiana.

#### Scenario: Planes con precios
- **WHEN** se renderiza la sección de planes de Nace con Esperanza
- **THEN** aparecen Parto Humanizado ($6.000.000) y Cesárea Humanizada ($7.000.000) con sus inclusiones

### Requirement: Galería de imágenes por sección
Cada ficha del portafolio que tenga galería SHALL referenciar imágenes existentes en `public/images/`. No MUST haber imágenes nuevas; se reutilizan las del inventario procesado.

#### Scenario: Imágenes existentes
- **WHEN** se compilan todas las rutas de imagen referenciadas por la data del portafolio
- **THEN** cada archivo existe en `public/images/` y es un archivo webp válido

#### Scenario: Sin imágenes externas
- **WHEN** se busca en el HTML generado del portafolio URLs de imagen que no empiecen con `/images/` o `/_next/`
- **THEN** no se encuentra ninguna

# Spec Delta

## Purpose

Define el catálogo de servicios de salud de la clínica: unidades asistenciales, especialidades y subespecialidades, programas especiales y opciones de hospitalización. Une en una sola estructura el contenido que hoy está repartido entre `/services/*`, `/nuestros-servicios/` y la sección Portafolio.

## ADDED Requirements

### Requirement: Catálogo de servicios
La ruta `/servicios/` SHALL presentar toda la oferta agrupada en unidades asistenciales, especialidades y programas especiales, con el texto introductorio "Los mejores servicios médicos y la mejor atención" del sitio actual.

#### Scenario: Recorrido del catálogo
- **WHEN** un visitante abre `/servicios/`
- **THEN** ve las tres agrupaciones, y cada servicio tiene nombre, resumen y enlace a su ficha

#### Scenario: Búsqueda por nombre
- **WHEN** un visitante escribe "uro" en el buscador del catálogo
- **THEN** la lista se reduce a los servicios cuyo nombre contiene ese texto, sin distinguir tildes ni mayúsculas, y si no hay coincidencias se muestra un mensaje con enlace a contacto

#### Scenario: Sin JavaScript
- **WHEN** el catálogo se carga sin JavaScript
- **THEN** se ve la lista completa de servicios con sus enlaces

### Requirement: Fichas de unidades asistenciales
El sitio SHALL tener una ficha por unidad: Urgencias, Hospitalización, Cirugía, Consulta externa, Cuidado crítico y Diagnóstico y apoyo terapéutico, en `/servicios/<slug>/`. Cada ficha MUST unir el contenido de la página `/services/<slug>/` y de la página `p-<slug>` del Portafolio, sin repetir textos.

#### Scenario: Contenido unificado de Cirugía
- **WHEN** un visitante abre `/servicios/cirugia/`
- **THEN** encuentra las cirugías especializadas de `/services/cirugia/` y la capacidad instalada y "¿Por qué elegirnos?" de `/p-cirugia/`

#### Scenario: Urgencias
- **WHEN** un visitante abre `/servicios/urgencias/`
- **THEN** ve que la atención es 24 horas, la sección "¿Cuándo acudir?", la urgencia pediátrica y un botón para llamar a la línea de urgencias que funciona en móvil

### Requirement: Consulta externa enlaza sus especialidades
La ficha de Consulta externa SHALL listar todas las especialidades de consulta del sitio actual, y cada especialidad con ficha propia MUST enlazar a ella.

#### Scenario: Especialidad con ficha
- **WHEN** un visitante pulsa "Dermatología" en `/servicios/consulta-externa/`
- **THEN** navega a `/servicios/especialidades/dermatologia/`

### Requirement: Fichas de especialidad unificadas
Cada especialidad SHALL tener una sola ficha en `/servicios/especialidades/<slug>/` con slug en español. Si existe en `/services/*` y en `p-sub-*`, la ficha MUST combinar ambos contenidos: descripción, condiciones que atiende, procedimientos y servicios incluidos.

#### Scenario: Especialidad duplicada
- **WHEN** un visitante abre `/servicios/especialidades/urologia/`
- **THEN** ve el contenido de `/services/annual-screening/` y de `/p-sub-urologia/` en una sola página, sin párrafos repetidos

#### Scenario: Inventario de especialidades
- **WHEN** se compara el catálogo con el inventario de `assets/legacy-site/inventory/site-map.md`
- **THEN** cada especialidad con contenido del sitio actual tiene una ficha publicada

### Requirement: Especialidades sin contenido propio
Una especialidad o subespecialidad que en el sitio actual solo aparece como nombre (por ejemplo, Neumología pediátrica o las subespecialidades del menú del Portafolio) SHALL mostrarse como elemento de lista dentro de su área, sin enlace a una ficha vacía.

#### Scenario: Neumología pediátrica
- **WHEN** un visitante ve la lista de subespecialidades de Pediatría
- **THEN** "Neumología pediátrica" aparece como texto sin enlace

### Requirement: Estructura común de las fichas de servicio
Toda ficha de unidad, especialidad o programa SHALL tener: migas de pan, título, imagen real de la clínica, contenido, una llamada a la acción "Agendar cita" hacia `/agenda/` y enlaces a servicios relacionados.

#### Scenario: Migas de pan
- **WHEN** un visitante está en `/servicios/especialidades/neurologia/`
- **THEN** ve "Inicio › Servicios › Especialidades › Neurología" y cada nivel enlaza a su página

#### Scenario: Llamada a la acción
- **WHEN** un visitante termina de leer una ficha
- **THEN** encuentra el botón "Agendar cita" y el teléfono de la clínica

### Requirement: Programas especiales
La ruta `/servicios/programas/` SHALL presentar los programas especiales del sitio actual con fichas propias: Nace con Esperanza, Chequeos médicos preventivos y Centro de Intervencionismo Cardiovascular.

#### Scenario: Nace con Esperanza
- **WHEN** un visitante abre `/servicios/programas/nace-con-esperanza/`
- **THEN** encuentra todo el contenido de `/p-nace-con-esperanza/`, incluidas las secciones "El inicio de una nueva historia" y "¿Por qué vivir esta experiencia?"

#### Scenario: Chequeos preventivos
- **WHEN** un visitante abre `/servicios/programas/chequeos-medicos-preventivos/`
- **THEN** ve los chequeos del sitio actual (Listo para Entrenar, Mujer Sana y demás) y los que tienen paquete en AppCLEM enlazan a él

### Requirement: Opciones de hospitalización
La ficha de Hospitalización SHALL presentar hospitalización general adulto, hospitalización pediátrica y Suite VIP, y comparar las habitaciones Estándar, Plus y Suite Serena con sus comodidades (habitación privada, baño privado, aire acondicionado, televisión, nevera, estación de café, acompañante, etc.).

#### Scenario: Comparar habitaciones
- **WHEN** un visitante revisa las opciones de habitación
- **THEN** ve las tres opciones lado a lado en escritorio (apiladas en móvil) con sus comodidades marcadas

#### Scenario: Detalle de habitación
- **WHEN** un visitante pulsa "Conoce más" en Habitación Plus
- **THEN** navega a `/servicios/hospitalizacion/habitacion-plus/` con la galería de fotos de esa habitación

### Requirement: Sin enlaces vacíos en servicios
Ningún botón o enlace de las páginas de servicios SHALL apuntar a `#`, a una página demo o a una página vacía; los botones del sitio actual sin destino ("Conoce nuestro equipo médico", "Premium") MUST eliminarse o apuntar a un destino real.

#### Scenario: Revisión de enlaces
- **WHEN** se recorren todos los enlaces de `/servicios/` y sus fichas
- **THEN** todos responden con una página existente del sitio o con un destino externo válido

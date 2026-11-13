# Spec Delta

## Purpose

Micrositio de portafolio institucional que el CEO comparte en conferencias y reuniones. Funciona como brochure digital independiente del sitio público, con layout propio, navegación interna y todas las fichas de servicio, especialidades, programas, hospitalización e infraestructura de la clínica.

## ADDED Requirements

### Requirement: Layout independiente del sitio público
El portafolio SHALL tener su propio layout fuera del grupo de rutas `(site)`, con logo de la clínica, navegación interna entre secciones del portafolio y un footer mínimo con datos de contacto. No MUST incluir TopBar, menú principal, footer completo ni FloatingWhatsApp del sitio público.

#### Scenario: Acceso directo al portafolio
- **WHEN** un visitante abre `/portafolio/`
- **THEN** ve el layout del portafolio (logo, navegación interna, footer mínimo) sin la barra superior ni el menú principal del sitio público

#### Scenario: Navegación interna
- **WHEN** un visitante está en cualquier página del portafolio
- **THEN** puede volver a `/portafolio/` desde el logo o un enlace "Volver a servicios", y los breadcrumbs referencian `/portafolio/` como raíz

### Requirement: Exclusión de la navegación pública y SEO
Las rutas del portafolio SHALL NOT aparecer en el menú del sitio, el footer, ni el `sitemap.xml`. La metadata de las páginas MUST incluir `robots: "noindex, nofollow"` para evitar la indexación.

#### Scenario: Sitemap sin portafolio
- **WHEN** se genera el `sitemap.xml` del build
- **THEN** ninguna URL contiene el segmento `/portafolio/`

#### Scenario: Menú del sitio sin portafolio
- **WHEN** un visitante navega el sitio público
- **THEN** no encuentra ningún enlace a `/portafolio/` en el header, footer ni menú móvil

#### Scenario: Noindex en páginas del portafolio
- **WHEN** un buscador rastrea una página del portafolio
- **THEN** la etiqueta meta robots indica `noindex, nofollow`

### Requirement: Página principal del portafolio
La ruta `/portafolio/` SHALL presentar un hero con el lema institucional, una sección "Quiénes somos" con descripción y accesos rápidos, una cuadrícula con los 8 servicios principales, una sección de nueva infraestructura con cifras, una sección "Historias que inspiran" con 3 casos reales y un bloque de contacto.

#### Scenario: Contenido completo del landing
- **WHEN** un visitante abre `/portafolio/`
- **THEN** ve las seis secciones en orden: hero, quiénes somos, servicios, infraestructura, historias, contacto

#### Scenario: Servicios enlazan a fichas internas
- **WHEN** un visitante pulsa una tarjeta de servicio en el landing del portafolio
- **THEN** navega a `/portafolio/<slug-del-servicio>/`, no a `/servicios/`

### Requirement: Fichas de unidades asistenciales
El portafolio SHALL tener fichas para las 7 unidades: Hospitalización, Urgencias, Cuidado crítico, Cirugía, Ginecología y obstetricia, Consulta externa y Diagnóstico y apoyo terapéutico, en `/portafolio/<slug>/`. Cada ficha MUST incluir imagen de cabecera, texto introductorio, secciones de contenido, galería de imágenes y un cierre con datos de contacto.

#### Scenario: Ficha de urgencias
- **WHEN** un visitante abre `/portafolio/urgencias/`
- **THEN** ve la atención 24 horas, los servicios de urgencias adultos y pediátricas, la sección "¿Cuándo acudir?" y un botón para llamar a la línea de urgencias

#### Scenario: Ficha de cirugía con capacidad instalada
- **WHEN** un visitante abre `/portafolio/cirugia/`
- **THEN** ve la capacidad (2 quirófanos, 1 sala de partos, 8 camas de recuperación), las 11 áreas quirúrgicas y la sección "¿Por qué elegirnos?"

#### Scenario: Consulta externa con 22 especialidades
- **WHEN** un visitante abre `/portafolio/consulta-externa/`
- **THEN** ve las 22 especialidades médico-quirúrgicas, cada una con enlace a su ficha dentro del portafolio

### Requirement: Páginas de hospitalización
El portafolio SHALL incluir 5 páginas de hospitalización: pediátrica, suite VIP y 3 detalles de habitación (estándar, plus, suite serena). La suite VIP MUST presentar un comparativo de las 3 opciones con tabla de amenidades.

#### Scenario: Comparativo de habitaciones
- **WHEN** un visitante abre `/portafolio/hospitalizacion/suite-vip/`
- **THEN** ve las 3 opciones lado a lado en escritorio (apiladas en móvil) con la tabla de amenidades (habitación privada, baño, A/C, TV, nevera, estación de café, kit de aseo, espacio acompañante, menú especial, experiencia premium)

#### Scenario: Galería de habitación
- **WHEN** un visitante abre `/portafolio/hospitalizacion/suite-serena/`
- **THEN** ve la galería de fotos de la Suite Serena y su descripción

### Requirement: Fichas de programas especiales
El portafolio SHALL incluir fichas para Nace con Esperanza, Centro de Intervencionismo Cardiovascular y Chequeos médicos preventivos en `/portafolio/programas/<slug>/`.

#### Scenario: Nace con Esperanza con precios
- **WHEN** un visitante abre `/portafolio/programas/nace-con-esperanza/`
- **THEN** ve los dos planes (Parto Humanizado $6.000.000 y Cesárea Humanizada $7.000.000) con sus inclusiones, la información del banco de células madre y los datos de contacto

#### Scenario: Centro de Intervencionismo con equipos
- **WHEN** un visitante abre `/portafolio/programas/centro-de-intervencionismo/`
- **THEN** ve los 4 equipos confirmados (Dräger Atlan A300, Dräger Vista 300, BIS Covidien, TOFscan) con sus funciones, y los 4 equipos pendientes de confirmación

#### Scenario: Chequeos con 7 opciones
- **WHEN** un visitante abre `/portafolio/programas/chequeos-medicos-preventivos/`
- **THEN** ve los 7 chequeos (Listo para Entrenar, Mujer Sana, Embarazo Seguro, Bienestar Digestivo, Bienestar Urológico, Creciendo Bien, Latidos de Vida) con su descripción

### Requirement: Página de infraestructura
La ruta `/portafolio/infraestructura/` SHALL presentar los 3 edificios (Edificio 1, Edificio 2, Nueva construcción), la tabla de capacidad actual vs. proyectada por servicio, las cifras destacadas (camas actuales, m² de la nueva torre, camas proyectadas) y la galería del proyecto.

#### Scenario: Tabla de capacidad
- **WHEN** un visitante abre `/portafolio/infraestructura/`
- **THEN** ve la tabla con los servicios (Hospitalización general, Cuarto piso, UCI adultos, UCIM, UCI neonatal, UCI pediátrica), sus camas actuales, expansión y proyección total

#### Scenario: Datos de los edificios
- **WHEN** un visitante revisa la sección de edificios
- **THEN** ve el lote, área construida y detalles de cada edificio, incluyendo los 5 pisos de la nueva construcción

### Requirement: Fichas de especialidad
El portafolio SHALL incluir fichas para las 22 especialidades listadas en consulta externa, con ruta dinámica `/portafolio/especialidades/[slug]/`. Cada ficha MUST incluir imagen, introducción, subespecialidades o servicios, y un cierre con datos de contacto. Un slug no registrado MUST responder con la página 404.

#### Scenario: Ficha de especialidad existente
- **WHEN** un visitante abre `/portafolio/especialidades/dermatologia/`
- **THEN** ve la ficha de Dermatología con sus servicios (acné, dermatitis, infecciones, lunares, caída del cabello, cuidado preventivo) y las etapas de la vida

#### Scenario: Slug desconocido
- **WHEN** un visitante abre `/portafolio/especialidades/slug-inexistente/`
- **THEN** recibe la página 404

#### Scenario: Breadcrumbs de especialidad
- **WHEN** un visitante está en `/portafolio/especialidades/neurologia/`
- **THEN** ve "Portafolio › Consulta externa › Neurología" con cada nivel enlazado

### Requirement: Sin enlaces rotos ni contenido erróneo
Ningún enlace dentro del portafolio SHALL apuntar a `#`, a una página demo del tema anterior ni a una URL inexistente. Los textos MUST estar libres de los errores ortográficos del sitio actual (Córdiba, Ginercología, infraesctructura, etc.) y sin contenido duplicado o copiado de otra sección.

#### Scenario: Revisión de enlaces
- **WHEN** se recorren todos los enlaces internos del portafolio
- **THEN** todos responden con una página existente del portafolio o con un destino externo válido

#### Scenario: Texto corregido
- **WHEN** se busca "Córdiba", "Ginercología", "infraesctructura", "Ginecológa", "Fonaudiología", "Oftamología" o "Pedriatría" en el HTML generado del portafolio
- **THEN** no se encuentra ninguna coincidencia

### Requirement: Responsive y accesible
Todas las páginas del portafolio SHALL verse correctamente de 320 a 1920 px, ser navegables con teclado, cumplir WCAG 2.1 AA y obtener Lighthouse >= 90 en accesibilidad.

#### Scenario: Viewport mínimo
- **WHEN** se visualiza cualquier página del portafolio a 320 px de ancho
- **THEN** no hay scroll horizontal ni contenido cortado

#### Scenario: Navegación con teclado
- **WHEN** un usuario navega el portafolio solo con teclado
- **THEN** todos los enlaces, botones y elementos interactivos son alcanzables con Tab y activables con Enter o Espacio

# Spec Delta

## Purpose

Define las reglas de maquetación que comparten todas las páginas del sitio (ancho máximo, márgenes laterales, espaciado vertical, fondos de sección y rejillas responsivas), para que el contenido se vea alineado y legible en cualquier dispositivo.

## ADDED Requirements

### Requirement: Ancho máximo y márgenes laterales del contenido
El contenido de las páginas SHALL centrarse con un ancho máximo común y márgenes laterales de al menos 16 px en móvil, que crecen en pantallas más anchas.

#### Scenario: Pantalla de 375 px
- **WHEN** una página se ve en una pantalla de 375 px de ancho
- **THEN** el contenido deja al menos 16 px a cada lado y no aparece scroll horizontal

#### Scenario: Pantalla de 1920 px
- **WHEN** una página se ve en una pantalla de 1920 px de ancho
- **THEN** el contenido no supera el ancho máximo común y queda centrado

### Requirement: Espaciado vertical uniforme entre secciones
Las secciones de página SHALL tener un espaciado vertical uniforme que aumenta en pantallas grandes, con una opción de espaciado reducido.

#### Scenario: Dos secciones consecutivas
- **WHEN** una página apila dos secciones con espaciado normal
- **THEN** ambas tienen el mismo espaciado superior e inferior

### Requirement: Fondos de sección de marca con contraste garantizado
Las secciones SHALL ofrecer fondos blanco, superficie, primario y navy. En fondos primario y navy, el texto y los encabezados MUST cambiar automáticamente a un color que cumpla contraste AA.

#### Scenario: Sección con fondo navy
- **WHEN** una sección usa el fondo navy y contiene un encabezado y un párrafo
- **THEN** ambos se muestran en un color claro con contraste de al menos 4.5:1

### Requirement: Rejillas responsivas
El sistema SHALL ofrecer rejillas de 1 a 4 columnas que se apilan en una sola columna en móvil y aumentan columnas progresivamente en pantallas más anchas.

#### Scenario: Cuatro tarjetas de servicio
- **WHEN** una rejilla de 4 columnas contiene cuatro tarjetas
- **THEN** se muestra 1 columna a 375 px, 2 columnas en tableta y 4 columnas a 1440 px

### Requirement: Pilas con espaciado consistente
El sistema SHALL ofrecer agrupaciones verticales u horizontales de elementos con una escala fija de espacios, para evitar márgenes sueltos entre elementos.

#### Scenario: Botones de llamada a la acción en móvil
- **WHEN** una pila horizontal con dos botones no cabe en el ancho de la pantalla
- **THEN** los botones pasan a la línea siguiente conservando el mismo espacio entre ellos

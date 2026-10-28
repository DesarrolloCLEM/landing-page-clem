# Spec Delta

## Purpose

Define las señales visuales que acompañan el desplazamiento: la barra de progreso de lectura y el header que se compacta.

## ADDED Requirements

### Requirement: Barra de progreso de lectura
Las páginas largas SHALL mostrar una barra fina de 3 px bajo el header que se llena de izquierda a derecha según el avance del scroll, con el color primario de la marca.

#### Scenario: Avance por la página
- **WHEN** un visitante recorre una página larga, como una ficha de servicio
- **THEN** la barra refleja el porcentaje recorrido y llega al 100 % al final de la página

#### Scenario: Página corta
- **WHEN** una página cabe en una pantalla
- **THEN** no se muestra la barra

#### Scenario: Accesibilidad
- **WHEN** un lector de pantalla recorre la página
- **THEN** la barra se ignora, por ser decorativa

### Requirement: Header que se compacta
El header SHALL reducir su altura y mostrar una sombra suave después de que el visitante baje más de 24 px, y volver a su tamaño completo al regresar al inicio de la página.

#### Scenario: Bajar de la parte superior
- **WHEN** el visitante baja más de 24 px
- **THEN** el header se vuelve más bajo y con sombra, y el logo, el menú y el botón de cita siguen visibles

#### Scenario: Sin saltos de diseño
- **WHEN** el header cambia de tamaño
- **THEN** el contenido de la página no se desplaza ni genera cambios de diseño acumulados (CLS menor a 0,1)

#### Scenario: Elemento enfocado bajo el header
- **WHEN** un elemento recibe foco con el teclado
- **THEN** queda visible debajo del header compacto, sin taparse

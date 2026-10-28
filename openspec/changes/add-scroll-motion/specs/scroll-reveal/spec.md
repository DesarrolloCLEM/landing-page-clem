# Spec Delta

## Purpose

Define cómo los elementos de las páginas se revelan y reaccionan al desplazarse, en escritorio y en móvil, para guiar la lectura sin ocultar nunca el contenido.

## ADDED Requirements

### Requirement: Revelado de secciones y tarjetas
Los encabezados de sección, tarjetas, imágenes y bloques destacados SHALL aparecer con un desvanecimiento y un desplazamiento vertical corto (máximo 32 px) cuando entran en pantalla al desplazarse hacia abajo.

#### Scenario: Sección que entra en pantalla
- **WHEN** un visitante desplaza la página y una sección entra en el viewport
- **THEN** su contenido pasa de transparente y desplazado a opaco y en su posición final, sin saltos de diseño

#### Scenario: Contenido visible sin desplazarse
- **WHEN** una página se abre y un elemento animable ya está dentro del viewport
- **THEN** se muestra completo, sin esperar a ningún desplazamiento

### Requirement: Entrada escalonada en rejillas
Las tarjetas de una misma rejilla SHALL entrar con un retraso progresivo de hasta 80 ms entre una y otra y de máximo 400 ms en total.

#### Scenario: Cuatro tarjetas de servicio
- **WHEN** una rejilla de cuatro tarjetas entra en pantalla
- **THEN** las tarjetas aparecen en orden de izquierda a derecha, cada una poco después de la anterior

### Requirement: Parallax suave en el hero del inicio
La fotografía del hero SHALL desplazarse más despacio que el texto al hacer scroll, con un recorrido máximo de 80 px, y el contenido del hero SHALL atenuarse al salir de pantalla.

#### Scenario: Scroll sobre el hero
- **WHEN** un visitante baja desde la parte superior del inicio
- **THEN** la foto se mueve menos que el texto y el texto del hero se atenúa gradualmente, manteniendo el contraste AA mientras es legible

### Requirement: Cifras que cuentan
Las cifras de capacidad SHALL contar desde cero hasta su valor la primera vez que entran en pantalla, en máximo 1,5 s, y el valor final MUST estar presente en el HTML.

#### Scenario: Primera visualización de una cifra
- **WHEN** las cifras de capacidad entran en pantalla por primera vez
- **THEN** cuentan hasta su valor y se quedan fijas, sin repetirse al volver a subir

#### Scenario: Sin JavaScript
- **WHEN** la página se carga sin JavaScript
- **THEN** cada cifra muestra directamente su valor final

#### Scenario: Lector de pantalla
- **WHEN** un lector de pantalla lee una cifra mientras cuenta
- **THEN** anuncia solo el valor final, no los números intermedios

### Requirement: Carrusel de testimonios con escala
En móvil, el carrusel de testimonios SHALL ampliar levemente (hasta 5 %) la tarjeta más cercana al centro mientras el visitante desliza, sin avanzar nunca por sí solo.

#### Scenario: Deslizar testimonios
- **WHEN** un visitante desliza el carrusel con el dedo
- **THEN** la tarjeta centrada se ve ligeramente más grande y opaca que las vecinas, y el desplazamiento se ajusta a cada tarjeta

#### Scenario: Sin avance automático
- **WHEN** el visitante no toca el carrusel
- **THEN** permanece quieto indefinidamente

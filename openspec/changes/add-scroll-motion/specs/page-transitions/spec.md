# Spec Delta

## Purpose

Define las transiciones visuales al navegar entre páginas del sitio, para que el cambio de página se sienta continuo en lugar de un corte brusco.

## ADDED Requirements

### Requirement: Fundido entre páginas
Al navegar entre páginas del sitio, el contenido principal SHALL hacer un fundido de entrada y salida de hasta 250 ms, mientras el header y el footer permanecen estables.

#### Scenario: Navegar por el menú
- **WHEN** un visitante pulsa un enlace del menú
- **THEN** el contenido actual se desvanece y el nuevo aparece, sin que el header parpadee ni se mueva

#### Scenario: Navegador sin soporte
- **WHEN** el navegador no soporta transiciones de vista
- **THEN** la navegación funciona igual, sin animación

### Requirement: Imagen compartida entre catálogo y ficha
La imagen de una tarjeta del catálogo de servicios SHALL transformarse en la imagen principal de la ficha al navegar a ella.

#### Scenario: Abrir una ficha desde el catálogo
- **WHEN** un visitante abre "Urología" desde `/servicios/`
- **THEN** la imagen de la tarjeta se desplaza y se amplía hasta convertirse en la imagen de cabecera de la ficha

#### Scenario: Entrada directa a la ficha
- **WHEN** un visitante abre la URL de una ficha directamente
- **THEN** la página se muestra normalmente, sin transición compartida

### Requirement: Navegación atrás y adelante
Las transiciones SHALL aplicarse también con los botones atrás y adelante del navegador, y MUST NOT retrasar la navegación más de 250 ms.

#### Scenario: Botón atrás
- **WHEN** el visitante pulsa atrás desde una ficha
- **THEN** vuelve al catálogo con la misma transición, y la posición de scroll se restaura

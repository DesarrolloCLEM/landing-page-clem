# Spec Delta

## Purpose

Define las transiciones visuales al navegar entre páginas del sitio: la imagen de una tarjeta de servicio que viaja hasta la imagen principal de su ficha, sin interferir con la navegación ni con la restauración del scroll.

## ADDED Requirements

### Requirement: Imagen compartida entre tarjeta y ficha
La imagen de una tarjeta de servicio (inicio, hospitalización, programas) SHALL transformarse en la imagen principal de la ficha de ese servicio al navegar a ella.

#### Scenario: Abrir una ficha desde una tarjeta
- **WHEN** un visitante abre "Neurocirugía" desde una tarjeta del inicio
- **THEN** la imagen de la tarjeta se desplaza y se amplía hasta convertirse en la imagen de cabecera de la ficha

#### Scenario: Entrada directa a la ficha
- **WHEN** un visitante abre la URL de una ficha directamente
- **THEN** la página se muestra normalmente, sin transición compartida

#### Scenario: Navegador sin soporte
- **WHEN** el navegador no soporta transiciones de vista
- **THEN** la navegación funciona igual, sin animación

### Requirement: La transición no estorba la navegación
Las transiciones SHALL durar como máximo 150 ms, MUST NOT retrasar la navegación más de 250 ms y MUST NOT impedir que el botón atrás restaure la posición de scroll de la página anterior.

#### Scenario: Botón atrás
- **WHEN** el visitante pulsa atrás desde una ficha
- **THEN** vuelve a la página anterior en la misma posición de scroll

#### Scenario: Navegación por el menú
- **WHEN** un visitante pulsa un enlace del menú que no tiene imagen compartida
- **THEN** la navegación es inmediata, con header y footer estables

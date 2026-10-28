# Spec Delta

## Purpose

Fija las reglas transversales que toda animación del sitio debe cumplir: respeto a la preferencia del usuario, degradación segura, rendimiento y ausencia de movimiento automático.

## ADDED Requirements

### Requirement: Respeto a la preferencia de movimiento reducido
Cuando el sistema del visitante tiene activado `prefers-reduced-motion: reduce`, el sitio SHALL NOT ejecutar ninguna animación de scroll, parallax, conteo, escala ni transición de página, y MUST mostrar todo el contenido en su estado final.

#### Scenario: Visitante con movimiento reducido
- **WHEN** un visitante con movimiento reducido recorre el inicio
- **THEN** todos los elementos están visibles y quietos, las cifras muestran su valor final y la imagen compartida no se anima

### Requirement: Degradación sin pérdida de contenido
El contenido SHALL ser visible y utilizable aunque el navegador no soporte las animaciones o JavaScript esté desactivado; ningún elemento puede quedar oculto a la espera de una animación.

#### Scenario: Navegador sin animaciones ligadas al scroll
- **WHEN** el navegador no soporta animaciones ligadas al scroll
- **THEN** todas las secciones se ven completas desde el inicio

#### Scenario: Impresión y motores de búsqueda
- **WHEN** la página se imprime o un buscador lee su HTML
- **THEN** todo el contenido está presente y visible

### Requirement: Solo propiedades baratas de animar
Las animaciones SHALL modificar únicamente `opacity` y `transform`, sin provocar recálculos de diseño, y MUST NOT agregar más de 5 KB de JavaScript al cliente ni dependencias de animación.

#### Scenario: Auditoría de bundle
- **WHEN** se compara el JavaScript del cliente antes y después del change
- **THEN** el aumento es de 5 KB o menos y no hay librerías de animación nuevas

### Requirement: Sin movimiento automático ni secuestro del scroll
El sitio SHALL NOT avanzar carruseles por sí solo, reproducir animaciones en bucle infinito ni modificar la velocidad o la dirección natural del scroll.

#### Scenario: Página abierta sin interacción
- **WHEN** un visitante deja la página abierta sin tocarla
- **THEN** nada se mueve después de la animación inicial de entrada

### Requirement: Sin impacto en las métricas
Las animaciones SHALL NOT empeorar el rendimiento medido: Lighthouse móvil en inicio, hospitalización, contacto e informes financieros no baja frente a la línea base registrada antes del change, y CLS se mantiene menor a 0,1.

#### Scenario: Comparación con la línea base
- **WHEN** se repite la medición de Lighthouse después del change
- **THEN** cada categoría iguala o supera la línea base, dentro del margen de ruido documentado

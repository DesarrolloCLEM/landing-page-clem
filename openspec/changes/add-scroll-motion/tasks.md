# Tasks

> Requisito previo: `migrate-legacy-site` completo. Decisiones: `design.md`.

## 1. Línea base y fundamentos de movimiento

- [x] 1.1 Registrar la línea base: mediana de 3 corridas de Lighthouse móvil en inicio, hospitalización, contacto e informes, y el tamaño del JavaScript del cliente (`.next/static/chunks`). Verificar guardando los números en `design.md` (sección Context).
- [x] 1.2 Crear en `globals.css` el bloque `@layer motion` con las utilidades `motion-reveal`, `motion-stagger` y `motion-parallax` bajo `@supports (animation-timeline: view())` y `prefers-reduced-motion: no-preference`, más la regla `@media print` que las anula. Verificar con `pnpm build` y que, con `prefers-reduced-motion: reduce` emulado, ningún elemento tiene animación aplicada.
- [x] 1.3 Documentar las utilidades en la skill `create-ui-component` y en el catálogo `/ui` (sección "Movimiento"). Verificar viéndolas en `/ui` a 375 px y con movimiento reducido.
- [x] 1.4 Commit: `feat(motion): agrega utilidades de movimiento ligadas al scroll`.

## 2. Revelado en componentes compartidos

- [x] 2.1 Aplicar `motion-reveal` a `SectionHeading`, `Card`, `TestimonialCard`, `ImageGallery` y a los bloques destacados de `Section`, y `motion-stagger` con `--i` en `Grid`. Verificar a 375 px que las tarjetas entran escalonadas y que ningún elemento queda oculto al cargar la página sin desplazarse.
- [x] 2.2 Verificar en `/`, `/servicios/`, `/sobre-nosotros/` y una ficha que el contenido visible al cargar no parpadea (CLS < 0,1) y que sin soporte de `animation-timeline` (desactivado en la prueba) todo se ve completo.
- [x] 2.3 Commit: `feat(motion): agrega revelado y entrada escalonada a secciones y tarjetas`.

## 3. Hero, cifras y carrusel

- [x] 3.1 Agregar parallax a la imagen del hero del inicio y atenuación del texto al salir (decisión 4). Verificar el contraste AA del texto con el script de contraste mientras se desplaza y que la foto nunca deja huecos.
- [x] 3.2 Crear la isla `CountUp` en `components/ui` y usarla en `StatCard` (decisión 7). Verificar: sin JavaScript muestra el valor final, con lector de pantalla se anuncia solo el valor final y con movimiento reducido no cuenta.
- [x] 3.3 Agregar escala y opacidad a las tarjetas del carrusel de testimonios con `view-timeline` inline (decisión 8). Verificar en móvil que la tarjeta centrada se agranda, que el `scroll-snap` sigue funcionando y que el carrusel no avanza solo.
- [x] 3.4 Commit: `feat(motion): agrega parallax del hero, cifras animadas y carrusel con escala`.

## 4. Barra de progreso y header compacto

- [ ] 4.1 Crear `ScrollProgress` (Server Component, `aria-hidden`) y activarlo en las páginas largas vía `PageHeader` (decisión 5). Verificar que llega al 100 % al final, que no aparece en páginas cortas y que axe no reporta nada.
- [ ] 4.2 Compactar el header con CSS ligado al scroll (decisión 6). Verificar que logo, menú y botón de cita siguen visibles, que no hay CLS y que un elemento enfocado con teclado queda visible bajo el header.
- [ ] 4.3 Commit: `feat(layout): agrega barra de progreso y header compacto al hacer scroll`.

## 5. Transiciones de página

- [ ] 5.1 Envolver el contenido principal del layout del sitio con `<ViewTransition>` y definir los estilos `::view-transition-*` (decisión 9). Verificar en el build de producción que navegar por el menú hace fundido y que el header no parpadea.
- [ ] 5.2 Compartir el nombre de transición entre la imagen de la tarjeta de servicio y la del `PageHeader` de la ficha. Verificar abriendo "Urología" desde `/servicios/` y volviendo con el botón atrás (la posición de scroll se restaura).
- [ ] 5.3 Commit: `feat(layout): agrega transiciones de vista entre páginas`.

## 6. Verificación final

- [ ] 6.1 Ejecutar `pnpm lint && pnpm format:check && pnpm build` sin errores y confirmar que no aparece ninguna ruta dinámica.
- [ ] 6.2 Con movimiento reducido emulado, recorrer 10 páginas y confirmar que nada se anima y todo es visible; repetir con JavaScript desactivado.
- [ ] 6.3 Repetir axe sobre todas las páginas, sin violaciones, y `pnpm check:redirects`.
- [ ] 6.4 Medir Lighthouse (mediana de 3 corridas) y compararlo con la línea base: sin caída, CLS < 0,1; y comprobar que el JavaScript del cliente creció 5 KB o menos.
- [ ] 6.5 Probar en un celular real o emulado (iOS Safari y Chrome Android) el revelado, el carrusel y las transiciones.

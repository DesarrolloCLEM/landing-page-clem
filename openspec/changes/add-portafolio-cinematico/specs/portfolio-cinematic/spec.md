# Spec Delta

## Purpose

Portada cinematográfica del portafolio institucional, publicada en una ruta de vista previa para que la gerencia la apruebe. Presenta el mismo contenido de la portada actual con movimiento ligado al scroll, sin perder legibilidad, accesibilidad ni navegación.

## ADDED Requirements

### Requirement: Ruta de vista previa privada
La portada cinematográfica SHALL publicarse en `/portafolio/vista-previa/` con el layout del portafolio: barra superior, encabezado con logo y menú, y footer. La ruta MUST tener `robots: "noindex, nofollow"`, MUST NOT aparecer en menús, footers ni `sitemap.xml`, y `/portafolio/` MUST seguir sin cambios.

#### Scenario: Acceso a la vista previa
- **WHEN** alguien abre `/portafolio/vista-previa/`
- **THEN** ve la portada cinematográfica con el mismo encabezado, menú y footer del portafolio

#### Scenario: Portafolio actual intacto
- **WHEN** alguien abre `/portafolio/` después de este cambio
- **THEN** ve exactamente la misma portada que antes

#### Scenario: Sin indexación ni enlaces
- **WHEN** se genera el build y se recorren el sitio público y el portafolio
- **THEN** ninguna página enlaza a `/portafolio/vista-previa/`, el sitemap no la incluye y su meta robots es `noindex, nofollow`

### Requirement: Mismo contenido que la portada actual
La vista previa SHALL mostrar los textos, cifras, imágenes y enlaces de la portada actual, en el mismo orden de secciones: hero, quiénes somos, servicios, nueva infraestructura, historias y contacto. El contenido de las pestañas de "Quiénes somos" MUST verse en secuencia, y los textos duplicados de la portada actual MAY mostrarse una sola vez.

#### Scenario: Secciones en orden
- **WHEN** un visitante recorre la vista previa de arriba abajo
- **THEN** encuentra hero, quiénes somos, servicios, nueva infraestructura, historias y contacto, en ese orden

#### Scenario: Contenido de las pestañas visible sin interacción
- **WHEN** un visitante llega a "Quiénes somos"
- **THEN** ve la presentación, los motivos para elegir la clínica y las cifras de capacidad sin tener que pulsar pestañas

#### Scenario: Anclas compatibles con el menú
- **WHEN** se navega a `#NuestrosServicios`, `#Infraestructura`, `#Historia` o `#contacto` dentro de la vista previa
- **THEN** la página se ubica en esa sección y su título queda visible debajo del encabezado fijo

### Requirement: Única entrada de texto
El titular del hero SHALL ser el único texto con animación de entrada propia. Aparece una vez al cargar, palabra por palabra dentro de una máscara, y termina en menos de 1 segundo. Los títulos y párrafos de las demás secciones MUST NOT animarse; solo se revelan tarjetas y fotos. El titular MUST leerse completo para lectores de pantalla desde el inicio.

#### Scenario: Entrada del titular
- **WHEN** la vista previa carga con el movimiento permitido
- **THEN** las palabras del titular suben hasta su lugar una tras otra y todo el titular queda visible antes de 1 segundo

#### Scenario: Lector de pantalla
- **WHEN** un lector de pantalla lee el hero
- **THEN** anuncia el titular como una sola frase, sin fragmentos por palabra

### Requirement: Hero fijado tipo telón
En pantallas de cualquier ancho, con movimiento permitido, el hero SHALL ocupar la altura visible bajo el encabezado y quedar fijo mientras la sección siguiente lo cubre. Al bajar, el fondo MUST acercarse levemente y el contenido del hero atenuarse.

#### Scenario: Telón al bajar
- **WHEN** un visitante baja desde el hero
- **THEN** el hero queda quieto y "Quiénes somos" sube por encima hasta cubrirlo

### Requirement: Control del video de fondo
El video del hero SHALL tener un botón visible y accesible por teclado para pausarlo y reanudarlo. Con movimiento reducido, el video MUST NOT reproducirse solo y se muestra su imagen fija.

#### Scenario: Pausar el video
- **WHEN** un visitante activa el botón de pausa con el mouse, el dedo o el teclado
- **THEN** el video se detiene y el botón cambia su etiqueta a "Reproducir video"

#### Scenario: Movimiento reducido
- **WHEN** un visitante con movimiento reducido abre la vista previa
- **THEN** el hero muestra la imagen fija del video sin reproducirlo

### Requirement: Columnas fijadas en "Quiénes somos"
En pantallas de 1024 px o más, el bloque de texto de "Quiénes somos" SHALL quedar fijo mientras la columna contigua desplaza la presentación, las cifras de capacidad y los motivos para elegir la clínica. En pantallas menores, todo MUST apilarse en una sola columna.

#### Scenario: Escritorio
- **WHEN** un visitante en escritorio baja por "Quiénes somos"
- **THEN** el título y la descripción permanecen a la vista mientras pasan los bloques de la otra columna

#### Scenario: Celular
- **WHEN** un visitante en celular recorre "Quiénes somos"
- **THEN** ve el texto y luego los bloques, en una sola columna y sin elementos fijados

### Requirement: Cifras con conteo
Las cifras de capacidad y de crecimiento SHALL contar desde cero hasta su valor la primera vez que entran en pantalla. Su valor final MUST estar en el HTML y ser el que leen los lectores de pantalla.

#### Scenario: Primera aparición
- **WHEN** las cifras de capacidad entran en pantalla por primera vez
- **THEN** cada número sube hasta su valor final y se detiene

### Requirement: Unidades numeradas apiladas
En pantallas de 768 px o más, con movimiento permitido, las cinco unidades numeradas SHALL mostrarse como tarjetas que quedan fijas bajo el encabezado y se apilan: cada tarjeta nueva cubre a la anterior, que se reduce y atenúa levemente. Cada tarjeta MUST seguir siendo un enlace a su unidad.

#### Scenario: Apilado al bajar
- **WHEN** un visitante en escritorio baja por las unidades numeradas
- **THEN** la tarjeta 02 sube y cubre a la 01, y así hasta la 05, y luego la página continúa

#### Scenario: Celular
- **WHEN** un visitante en celular llega a las unidades numeradas
- **THEN** las ve como una lista de tarjetas sin apilado

### Requirement: Galería horizontal de servicios
En pantallas de 768 px o más, con movimiento permitido, las ocho tarjetas de servicio SHALL desplazarse en horizontal mientras la sección queda fija y el visitante baja. La galería MUST mostrar las ocho tarjetas completas antes de liberar el scroll.

#### Scenario: Recorrido horizontal
- **WHEN** un visitante en escritorio baja por la galería de servicios
- **THEN** las tarjetas avanzan de derecha a izquierda hasta mostrar la octava, y luego la página continúa hacia abajo

### Requirement: Carrusel táctil en celular
En pantallas menores de 768 px, la galería de servicios SHALL ser un carrusel horizontal que se desliza con el dedo, con ajuste a cada tarjeta, sin avance automático y sin bloquear el scroll vertical.

#### Scenario: Deslizar en celular
- **WHEN** un visitante desliza la galería con el dedo
- **THEN** las tarjetas se mueven y se detienen alineadas, y al deslizar en vertical la página baja con normalidad

### Requirement: Revelación de proyectos ligada al scroll
Las fotos de la nueva infraestructura SHALL formar un collage con capas que se desplazan a distinta velocidad. Las tarjetas de infraestructura institucional y de historias MUST aparecer, con desvanecimiento y desplazamiento corto, al entrar en pantalla.

#### Scenario: Collage con profundidad
- **WHEN** un visitante baja por la nueva infraestructura
- **THEN** las columnas de fotos se desplazan a velocidades distintas

#### Scenario: Revelación de tarjetas
- **WHEN** las tarjetas de historias entran en pantalla
- **THEN** aparecen escalonadas y quedan completas antes de llegar a la mitad de la pantalla

### Requirement: Composición estática con movimiento reducido
Con `prefers-reduced-motion: reduce`, la vista previa SHALL NOT ejecutar la entrada del titular, el telón, el apilado, la galería horizontal, el parallax, el conteo ni la revelación. Todo el contenido MUST verse completo, quieto y legible, y la galería de servicios se presenta como una cuadrícula.

#### Scenario: Recorrido con movimiento reducido
- **WHEN** un visitante con movimiento reducido recorre la vista previa
- **THEN** ninguna sección se fija ni se anima, las cifras muestran su valor final y las ocho tarjetas de servicio se ven en cuadrícula

### Requirement: Degradación sin animaciones ligadas al scroll
En navegadores sin soporte de animaciones ligadas al scroll, o sin JavaScript, todo el contenido SHALL verse completo y utilizable. Ningún elemento MUST quedar oculto ni desplazado fuera de la pantalla a la espera de una animación.

#### Scenario: Navegador sin soporte
- **WHEN** el navegador no soporta animaciones ligadas al scroll
- **THEN** la galería de servicios se ve como cuadrícula o carrusel completo y todas las tarjetas y fotos están visibles

### Requirement: Navegación con teclado
Todos los enlaces y botones SHALL alcanzarse con Tab en el orden visual, con foco visible. El elemento enfocado MUST quedar visible en pantalla, también dentro de la galería horizontal y de las tarjetas apiladas.

#### Scenario: Tab por la galería horizontal
- **WHEN** un visitante recorre con Tab las tarjetas de la galería de servicios
- **THEN** cada tarjeta enfocada se ve completa en pantalla con su indicador de foco

### Requirement: Uso táctil
En pantallas táctiles, todos los objetivos interactivos SHALL medir al menos 44 × 44 px. Ningún efecto MUST depender de pasar el cursor por encima, ni secuestrar o alterar la velocidad del scroll nativo.

#### Scenario: Recorrido táctil
- **WHEN** un visitante recorre la vista previa en un celular con el dedo
- **THEN** el scroll responde como en cualquier página, y todos los enlaces y el botón del video se pueden pulsar sin errores

### Requirement: Presupuesto de rendimiento
La vista previa SHALL animar solo `transform` y `opacity`, MUST NOT agregar dependencias de animación ni más de 2 KB de JavaScript propio al cliente, y su Lighthouse móvil de rendimiento MUST NOT quedar por debajo del de `/portafolio/` medido en las mismas condiciones.

#### Scenario: Auditoría
- **WHEN** se compara la vista previa con `/portafolio/` en Lighthouse móvil (mediana de 3 corridas)
- **THEN** los puntajes de rendimiento y accesibilidad de la vista previa son iguales o mayores que los de `/portafolio/`

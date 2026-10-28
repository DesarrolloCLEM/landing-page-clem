# Spec Delta

## Purpose

Define las páginas institucionales que presentan quién es la clínica: historia, misión, visión, valores, políticas, estructura organizacional, comités, proyecciones de crecimiento y el proyecto de nueva infraestructura.

## ADDED Requirements

### Requirement: Página Sobre nosotros
La ruta `/sobre-nosotros/` SHALL presentar, con el contenido del sitio actual: accesos rápidos (Contáctenos, Solicitar cita, App Clem), cifras de capacidad, reseña histórica desde 2006, misión, visión, valores (Trato humanizado, Trabajo en equipo, Ética e integridad, Perseverancia, Responsabilidad), principios organizacionales y fotografías de la clínica.

#### Scenario: Contenido completo
- **WHEN** se compara `/sobre-nosotros/` con `assets/legacy-site/content/sobre-nosotros.md`
- **THEN** están presentes la reseña histórica, la misión, la visión, los cinco valores y los seis principios sin omitir texto

#### Scenario: Sin contenido duplicado
- **WHEN** un visitante recorre la página
- **THEN** la reseña histórica y la misión aparecen una sola vez (en el sitio actual están duplicadas)

#### Scenario: Navegación a subpáginas
- **WHEN** un visitante llega al final de `/sobre-nosotros/`
- **THEN** encuentra enlaces a las siete subpáginas institucionales

### Requirement: Políticas institucionales
La ruta `/politicas-institucionales/` SHALL publicar las cinco políticas del sitio actual con su texto completo: calidad, seguridad del paciente, seguridad y salud en el trabajo, gestión ambiental y docencia-servicio.

#### Scenario: Lectura de una política
- **WHEN** un visitante abre la página
- **THEN** ve las cinco políticas con título propio y puede saltar a cada una desde un índice al inicio

### Requirement: Organigrama
La ruta `/organigrama/` SHALL mostrar el texto introductorio y el organigrama institucional del sitio actual de forma legible en móvil.

#### Scenario: Organigrama en móvil
- **WHEN** un visitante abre el organigrama en una pantalla de 375 px
- **THEN** puede ampliarlo o abrirlo a tamaño completo para leer sus textos, y la imagen tiene una descripción textual equivalente

### Requirement: Comités institucionales
La ruta `/comite/` SHALL listar los trece comités del sitio actual con el texto introductorio y de cierre.

#### Scenario: Listado de comités
- **WHEN** un visitante abre la página
- **THEN** ve los trece comités, desde "Comité de Ética Médica" hasta "Comité de Compras"

### Requirement: Nuestras proyecciones
La ruta `/nuestras-proyecciones/` SHALL presentar los quince indicadores de capacidad del sitio actual con su valor actual y proyectado, en un formato comparable.

#### Scenario: Comparación actual vs proyectado
- **WHEN** un visitante revisa un indicador, por ejemplo "Quirófanos"
- **THEN** ve el valor actual (2) y el proyectado (4) uno junto al otro, también en móvil

### Requirement: Nueva infraestructura
La ruta `/nueva-infraestructura/` SHALL publicar el contenido de la página "Construyendo el futuro de tu salud" del sitio actual: cifras de expansión, texto de ampliación y proyección, galería del proyecto, tabla "Así crecerá nuestra capacidad" y detalles por edificio.

#### Scenario: Tabla de capacidad
- **WHEN** un visitante ve la tabla "Así crecerá nuestra capacidad" en móvil
- **THEN** puede leer servicio, camas actuales, ampliación y proyección total de cada fila sin scroll horizontal de la página

#### Scenario: Acceso desde Sobre nosotros
- **WHEN** un visitante está en `/sobre-nosotros/` o en `/nuestras-proyecciones/`
- **THEN** encuentra un enlace a `/nueva-infraestructura/`

### Requirement: Cifras institucionales de una sola fuente
Las cifras de capacidad instalada, años de experiencia y proyección SHALL definirse una sola vez y reutilizarse en todas las páginas que las muestran.

#### Scenario: Cifras coherentes
- **WHEN** se comparan las cifras de camas habilitadas en el inicio, Sobre nosotros, Nuestras proyecciones y Nueva infraestructura
- **THEN** todas muestran el mismo valor

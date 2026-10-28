# brand-theme Specification

## Purpose
Define la identidad visual de Clínica La Esperanza (colores, tipografía e idioma del documento) como un sistema de diseño único que todas las páginas del sitio heredan, de modo que la nueva UI sea moderna sin perder la marca.

## Requirements

### Requirement: Paleta de marca disponible como utilidades de estilo
El sistema SHALL exponer los colores institucionales de la clínica como tokens con nombre semántico (primario, primario oscuro, acento claro, verde institucional, navy, urgencias, superficie), usables en cualquier componente sin escribir valores hexadecimales.

#### Scenario: Uso del color primario
- **WHEN** un componente aplica el token de color primario
- **THEN** el elemento se renderiza con el azul institucional `#1166b5`

#### Scenario: Valor hexadecimal suelto
- **WHEN** un desarrollador necesita un color de marca
- **THEN** existe un token con nombre semántico para ese color y no es necesario escribir el valor hexadecimal en el componente

### Requirement: Tema claro único
El sitio SHALL renderizarse siempre con el tema claro de la marca, sin importar la preferencia de color del sistema operativo del visitante.

#### Scenario: Visitante con modo oscuro en su sistema
- **WHEN** un visitante con `prefers-color-scheme: dark` abre cualquier página
- **THEN** la página se muestra con fondo claro y colores de marca, sin invertir colores

### Requirement: Tipografía de marca cargada sin bloquear el render
El sitio SHALL usar una fuente para títulos y otra para texto, servidas desde el mismo dominio del sitio y sin parpadeo de texto invisible durante la carga.

#### Scenario: Carga inicial de una página
- **WHEN** un visitante carga una página por primera vez
- **THEN** el texto es visible de inmediato y las fuentes no se solicitan a dominios de terceros

### Requirement: Documento en español de Colombia
Cada página SHALL declarar el idioma `es-CO` en el documento HTML y tener título y descripción base en español.

#### Scenario: Lector de pantalla o buscador inspecciona una página
- **WHEN** se lee el atributo `lang` del elemento `<html>`
- **THEN** su valor es `es-CO`

#### Scenario: Página sin metadata propia
- **WHEN** una página no define su propio título
- **THEN** el título del documento contiene "Clínica La Esperanza"

### Requirement: Contraste accesible de los tokens de texto
Las combinaciones de token de texto sobre token de fondo que el sistema de diseño define para uso en texto SHALL cumplir contraste WCAG 2.1 AA (4.5:1 para texto normal).

#### Scenario: Texto sobre fondo primario
- **WHEN** se usa el token de texto previsto para fondos primarios sobre el color primario
- **THEN** la relación de contraste es al menos 4.5:1

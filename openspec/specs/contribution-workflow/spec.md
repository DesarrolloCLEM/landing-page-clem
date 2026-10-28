# contribution-workflow Specification

## Purpose
Define cómo se registran y se proponen los cambios del repositorio (commits, ramas y pull requests): en español y con un formato verificable, para que el historial sea legible para todo el equipo de la clínica.

## Requirements

### Requirement: Mensajes de commit con formato convencional
Todo commit SHALL tener el formato `tipo(alcance opcional): descripción`, usando los tipos estándar de Conventional Commits (`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`).

#### Scenario: Commit con formato válido
- **WHEN** se hace un commit con el mensaje `feat(home): agrega sección de servicios`
- **THEN** el commit se acepta

#### Scenario: Commit sin tipo
- **WHEN** se hace un commit con el mensaje `agrega sección de servicios`
- **THEN** el commit se rechaza con un mensaje que explica el formato esperado

### Requirement: Descripción del commit en español
La descripción de cada commit SHALL estar en español. Un commit cuya descripción empiece con un verbo imperativo común en inglés MUST rechazarse.

#### Scenario: Descripción en inglés
- **WHEN** se hace un commit con el mensaje `feat(home): add services section`
- **THEN** el commit se rechaza indicando que la descripción debe estar en español

#### Scenario: Descripción en español
- **WHEN** se hace un commit con el mensaje `fix(header): corrige menú móvil en iOS`
- **THEN** el commit se acepta

### Requirement: Plantilla de pull request en español
Todo pull request SHALL presentarse con una plantilla en español. La plantilla cubre: resumen, change de OpenSpec relacionado, tipo de cambio, capturas en móvil y escritorio, y una lista de verificación (lint, build, accesibilidad, Server/Client Components, SEO).

#### Scenario: Abrir un pull request en GitHub
- **WHEN** un colaborador abre un pull request nuevo en el repositorio remoto
- **THEN** la descripción viene prellenada con la plantilla en español

### Requirement: Nombres de rama por tipo de cambio
Las ramas de trabajo SHALL nombrarse `<tipo>/<descripcion-corta-en-kebab-case>`, usando el mismo tipo que los commits.

#### Scenario: Rama para una nueva sección
- **WHEN** se inicia el trabajo de la sección hero de la home
- **THEN** la rama se llama, por ejemplo, `feat/home-hero`

### Requirement: Cambios guiados por OpenSpec
Todo cambio funcional del sitio SHALL tener un change de OpenSpec aprobado antes de implementarse, y el pull request MUST referenciarlo.

#### Scenario: Nueva página del sitio
- **WHEN** se quiere agregar una página nueva
- **THEN** primero existe un change en `openspec/changes/` con propuesta, specs, diseño y tareas, y el PR indica su nombre

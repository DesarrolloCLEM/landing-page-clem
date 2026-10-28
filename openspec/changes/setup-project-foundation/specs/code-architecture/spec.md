# Spec Delta

## Purpose

Garantiza que el código del sitio se organice por feature con capas de dependencia claras, verificadas automáticamente, para que cada página nueva siga la misma estructura sin depender de la memoria de quien la escribe.

## ADDED Requirements

### Requirement: Capas de código con dependencias en un solo sentido
El código fuente SHALL organizarse en las capas rutas, features, componentes compartidos y utilidades. Cada capa solo puede depender de las capas inferiores.

#### Scenario: Componente compartido importa una feature
- **WHEN** un archivo de `src/components/` importa algo de `src/features/`
- **THEN** el lint del proyecto falla y señala la importación prohibida

#### Scenario: Página importa una feature
- **WHEN** un archivo de `src/app/` importa el punto de entrada público de una feature
- **THEN** el lint del proyecto pasa

### Requirement: Features aisladas entre sí
Una feature SHALL NOT importar código de otra feature. El código compartido entre features MUST vivir en componentes compartidos, configuración o utilidades.

#### Scenario: Una feature importa otra
- **WHEN** un archivo de `src/features/home/` importa desde `src/features/services/`
- **THEN** el lint del proyecto falla

### Requirement: Punto de entrada público por feature
Desde fuera de una feature solo SHALL importarse su archivo `index.ts`. Los archivos internos de la feature MUST NOT importarse directamente desde otras capas.

#### Scenario: Página importa un archivo interno de una feature
- **WHEN** un archivo de `src/app/` importa `@/features/home/components/hero-section`
- **THEN** el lint del proyecto falla e indica que debe usarse `@/features/home`

### Requirement: Formato de código uniforme
Todo archivo de código SHALL cumplir un formato único y verificable, incluido el orden canónico de las clases de Tailwind.

#### Scenario: Verificación de formato
- **WHEN** se ejecuta la verificación de formato del proyecto sobre un archivo mal formateado
- **THEN** la verificación falla e identifica el archivo

### Requirement: Build y lint sin errores en la rama principal
El proyecto SHALL compilar para producción y pasar el lint sin errores en cada commit de la rama principal.

#### Scenario: Build de producción
- **WHEN** se ejecuta el build de producción en un checkout limpio
- **THEN** termina sin errores y todas las rutas se generan como contenido prerenderizado

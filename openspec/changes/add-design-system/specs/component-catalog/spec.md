# Spec Delta

## Purpose

Ofrece una página interna donde el equipo revisa todos los componentes genéricos con sus variantes y estados, sin que esa página quede expuesta a los visitantes ni a los buscadores del sitio en producción.

## ADDED Requirements

### Requirement: Catálogo con todas las variantes
El catálogo SHALL mostrar cada componente genérico de interfaz y de maquetación con todas sus variantes, tamaños y estados relevantes (deshabilitado, con error, obligatorio, interactivo).

#### Scenario: Revisión de botones
- **WHEN** alguien abre el catálogo en desarrollo
- **THEN** ve los botones en todas sus variantes y tamaños, incluido el estado deshabilitado

#### Scenario: Componente nuevo
- **WHEN** se agrega un componente genérico nuevo
- **THEN** el catálogo incluye una muestra de ese componente

### Requirement: Catálogo oculto en producción
El catálogo SHALL responder con 404 en los builds de producción, salvo que se habilite explícitamente con una variable de entorno.

#### Scenario: Visitante en producción
- **WHEN** un visitante abre `/ui` en el sitio publicado sin la habilitación explícita
- **THEN** recibe la página 404 del sitio

#### Scenario: Build de revisión habilitado
- **WHEN** se hace un build de producción con `ENABLE_UI_CATALOG=true`
- **THEN** `/ui` muestra el catálogo

### Requirement: Catálogo excluido de buscadores
El catálogo SHALL NOT indexarse en buscadores, aunque esté habilitado.

#### Scenario: Catálogo habilitado
- **WHEN** se inspecciona el HTML de `/ui` con el catálogo habilitado
- **THEN** contiene una directiva `noindex`

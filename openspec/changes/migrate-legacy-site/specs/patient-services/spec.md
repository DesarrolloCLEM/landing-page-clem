# Spec Delta

## Purpose

Define la información de atención al usuario: el SIAU y la Alianza de Usuarios, los deberes y derechos del paciente, las preguntas frecuentes y los testimonios de pacientes.

## ADDED Requirements

### Requirement: Página de usuarios
La ruta `/usuarios/` SHALL presentar el contenido del sitio actual sobre la Coordinación SIAU, los compromisos con los usuarios y la Alianza de Usuarios (inscripción presencial en la oficina SIAU del primer piso, reuniones cada tres meses), con un botón "Quiero hacer parte de la Alianza de Usuarios".

#### Scenario: Unirse a la Alianza
- **WHEN** un visitante pulsa "Quiero hacer parte de la Alianza de Usuarios"
- **THEN** se abre una conversación de WhatsApp con `+57 304 474 8399` en una pestaña nueva

#### Scenario: Accesos a trámites
- **WHEN** un visitante está en `/usuarios/`
- **THEN** encuentra accesos a Deberes y derechos, Felicitaciones/PQRS y Preguntas frecuentes

### Requirement: Testimonios correctos y reutilizables
Los testimonios SHALL definirse una sola vez y mostrarse igual en el inicio y en `/usuarios/`, con nombre, procedimiento, resumen, foto y enlace al reel de Instagram.

#### Scenario: Datos de cada testimonio
- **WHEN** se comparan los testimonios de `/usuarios/` y del inicio
- **THEN** cada testimonio tiene el mismo nombre, procedimiento y enlace en ambas páginas (en el sitio actual `/usuarios/` repite "Laura Sofia Restrepo" y "Parto humanizado" en testimonios que no son suyos)

#### Scenario: Enlace a la historia
- **WHEN** un visitante pulsa "Leer historia completa" en `/usuarios/`
- **THEN** se abre el reel de Instagram del testimonio y no un enlace `#`

### Requirement: Deberes y derechos del paciente
La ruta `/deberes-y-derechos/` SHALL publicar el texto completo de deberes (Informar y actuar, Respetar, Cumplir) y derechos (Acceder, Consentimiento y libre escogencia, Protección a la dignidad humana, Información) del sitio actual.

#### Scenario: Navegación entre deberes y derechos
- **WHEN** un visitante abre la página
- **THEN** puede cambiar entre "Deberes" y "Derechos" con controles accesibles por teclado, y sin JavaScript ve ambos bloques completos

### Requirement: Preguntas frecuentes
La ruta `/preguntas-frecuentes/` SHALL publicar todas las preguntas y respuestas del sitio actual agrupadas por tema: Copagos, Consulta externa, Consulta preanestésica, Historia clínica e Imagenología.

#### Scenario: Acordeón accesible
- **WHEN** un visitante activa una pregunta con mouse, toque o teclado
- **THEN** la respuesta se expande, el control anuncia su estado expandido y las demás preguntas no cambian

#### Scenario: Enlace directo a una pregunta
- **WHEN** un visitante abre la URL de la página con el ancla de una pregunta
- **THEN** esa pregunta aparece expandida y visible

#### Scenario: Contenido indexable
- **WHEN** un buscador lee la página
- **THEN** todas las respuestas están en el HTML aunque estén colapsadas, y la página expone datos estructurados de tipo FAQ

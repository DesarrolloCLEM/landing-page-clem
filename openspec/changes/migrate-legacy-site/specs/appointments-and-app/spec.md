# Spec Delta

## Purpose

Define los canales con los que el paciente pide citas y accede a servicios digitales: la agenda por WhatsApp, la página de la aplicación AppCLEM (resultados, registro previo y descarga) y los paquetes integrales que se compran en la plataforma AppCLEM.

## ADDED Requirements

### Requirement: Agenda por WhatsApp
La ruta `/agenda/` SHALL explicar que las citas se agendan por WhatsApp, recordar tener la documentación requerida, mostrar los pasos del sitio actual (escribir por WhatsApp, indicar el servicio, compartir documentos) y el horario de atención de citas.

#### Scenario: Agendar
- **WHEN** un visitante pulsa "Agendar por WhatsApp"
- **THEN** se abre `https://wa.me/573046843367` en una pestaña nueva

#### Scenario: Horario de citas
- **WHEN** un visitante revisa el horario
- **THEN** ve "Lunes a viernes: 7:00 a. m. – 12:00 p. m. y 2:00 p. m. – 6:00 p. m." y "Sábado: 8:00 a. m. – 12:00 p. m." como texto

#### Scenario: Pasos legibles
- **WHEN** un lector de pantalla recorre los pasos
- **THEN** cada paso se lee como texto numerado, no como imagen

### Requirement: Página App Clem
La ruta `/app-clem/` SHALL presentar tres bloques: Resultados (consulta de resultados de imágenes diagnósticas, laboratorio y demás estudios), Registro previo (con el aviso de que no asegura el turno y debe confirmarse la admisión al llegar) y Descarga de la app (Android e iOS).

#### Scenario: Consultar resultados
- **WHEN** un visitante pulsa "Consultar"
- **THEN** se abre `https://appclem.appideas.com.co/acceso-resultados` en una pestaña nueva

#### Scenario: Registro previo
- **WHEN** un visitante pulsa "Registrar"
- **THEN** se abre `https://appclem.appideas.com.co/preregistro-paciente?service=urgencias` en una pestaña nueva

#### Scenario: Descargar la app
- **WHEN** un visitante pulsa la insignia de Google Play o de App Store
- **THEN** se abre la ficha `com.clem.app_clem` en Google Play o `id6752122596` en App Store

#### Scenario: Texto de cada bloque
- **WHEN** se lee el bloque Resultados
- **THEN** describe la consulta de resultados y no repite el texto de Registro previo (error del sitio actual)

### Requirement: Paquetes integrales
La ruta `/paquetes-integrales/` SHALL presentar los paquetes del sitio actual (Latidos de vida, Mujer Sana, Listo para entrenar) con nombre, descripción breve y botón que lleva a su página de compra en AppCLEM. Hoy esta página está vacía.

#### Scenario: Ver un paquete
- **WHEN** un visitante pulsa el botón de "Mujer Sana"
- **THEN** se abre `https://appclem.appideas.com.co/mujer-sana` en una pestaña nueva

#### Scenario: Submenú
- **WHEN** un visitante abre el submenú "Paquetes integrales" del header
- **THEN** ve los tres paquetes y un enlace a `/paquetes-integrales/`

### Requirement: Enlaces externos identificados
Todo enlace que lleve a WhatsApp, AppCLEM, tiendas de aplicaciones o redes sociales SHALL abrirse en una pestaña nueva, usar `rel="noopener noreferrer"` e indicar de forma accesible que sale del sitio.

#### Scenario: Lector de pantalla en enlace externo
- **WHEN** un lector de pantalla enfoca "Consultar" en `/app-clem/`
- **THEN** anuncia que el enlace abre en una pestaña nueva

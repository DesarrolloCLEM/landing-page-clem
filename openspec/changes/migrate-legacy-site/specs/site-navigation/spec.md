# Spec Delta

## Purpose

Define la navegación global del sitio (barra superior, menú principal, menú móvil, footer y acceso rápido a WhatsApp) y los datos de contacto institucionales que todas las páginas comparten.

## ADDED Requirements

### Requirement: Datos de contacto institucionales consistentes
Todas las páginas SHALL mostrar los mismos datos de contacto, tomados de una única fuente: dirección "Calle 12 # 4-58, Barrio Buenavista, Montería, Córdoba", PBX "60(4) 784 8903", correo `info@clinicalaesperanza.co`, WhatsApp de citas `+57 304 684 3367` y redes sociales (Facebook, Instagram, TikTok).

#### Scenario: Cambio de un dato de contacto
- **WHEN** cambia el teléfono de la clínica en la fuente única
- **THEN** el nuevo valor aparece en la barra superior, el footer, la página de contacto y cualquier otra página que lo muestre, sin editar cada página

#### Scenario: Enlaces de contacto accionables
- **WHEN** un visitante toca el teléfono, el correo o la dirección
- **THEN** se abren respectivamente la marcación (`tel:+576047848903`), el cliente de correo (`mailto:info@clinicalaesperanza.co`) y la ubicación en Google Maps

#### Scenario: Sin datos de plantilla
- **WHEN** se revisa cualquier página del sitio
- **THEN** no aparecen datos de plantilla como `info@website.com`, `1800 123 4566`, "Have a Project?" o "Go to Shop"

### Requirement: Barra superior de contacto
En escritorio, el sitio SHALL mostrar sobre el header una barra con correo, teléfono y dirección de la clínica.

#### Scenario: Escritorio
- **WHEN** un visitante abre cualquier página en una pantalla de 1280 px
- **THEN** ve la barra superior con correo, teléfono y dirección

#### Scenario: Móvil
- **WHEN** un visitante abre cualquier página en una pantalla de 375 px
- **THEN** la barra superior no ocupa espacio y esos datos siguen accesibles desde el menú móvil y el footer

### Requirement: Menú principal con la estructura del sitio actual
El header SHALL mostrar el logo enlazado al inicio y un menú con: Inicio; Sobre nosotros (Políticas institucionales, Organigrama, Comité, Informes financieros, Reportes de área, Indicadores, Nuestras proyecciones); Nuestros servicios; Paquetes integrales; Usuarios (Deberes y derechos, Felicitaciones/PQRS, Preguntas frecuentes); Agenda; Contacto.

#### Scenario: Submenú en escritorio
- **WHEN** un visitante pasa el cursor o enfoca con teclado "Sobre nosotros"
- **THEN** se despliega su submenú con las siete subpáginas y cada una navega a su ruta

#### Scenario: Nuestros servicios
- **WHEN** un visitante abre el menú "Nuestros servicios"
- **THEN** ve las unidades asistenciales (Consulta externa, Cirugía, Hospitalización, Urgencias, Cuidado crítico, Diagnóstico y apoyo terapéutico), un acceso a Especialidades, un acceso a Programas especiales y un enlace al catálogo completo en `/servicios/`

#### Scenario: Página activa
- **WHEN** un visitante está en una página del menú o en una de sus subpáginas
- **THEN** el ítem correspondiente se marca como activo de forma visible y con `aria-current="page"` en el enlace exacto

### Requirement: Llamada a la acción permanente para citas
El header SHALL incluir un botón destacado "Solicitar cita" que lleva a la página de agenda.

#### Scenario: Botón de cita
- **WHEN** un visitante pulsa "Solicitar cita" desde cualquier página
- **THEN** navega a `/agenda/`

### Requirement: Header fijo al desplazarse
El header SHALL permanecer visible al desplazarse por la página, en una versión compacta que no tape el contenido enfocado.

#### Scenario: Desplazamiento largo
- **WHEN** un visitante baja por una página larga
- **THEN** el logo, el menú (o el botón de menú en móvil) y el botón de cita siguen visibles

#### Scenario: Navegación con teclado
- **WHEN** un elemento recibe foco detrás de la zona del header fijo
- **THEN** la página se desplaza para que el elemento enfocado quede visible

### Requirement: Menú móvil accesible
En pantallas pequeñas el menú SHALL abrirse desde un botón, mostrar toda la estructura del menú principal con submenús expandibles, y mostrar teléfono, WhatsApp y redes sociales.

#### Scenario: Abrir y cerrar
- **WHEN** un visitante toca el botón de menú
- **THEN** el menú se abre, el foco pasa a su primer elemento, la tecla Escape lo cierra y el foco vuelve al botón

#### Scenario: Submenú en móvil
- **WHEN** un visitante toca "Usuarios" en el menú móvil
- **THEN** se expanden sus subpáginas sin navegar y el control anuncia su estado expandido

### Requirement: Footer institucional
Todas las páginas SHALL terminar con un footer que contenga logo y lema "Fe, Amor y Servicio", enlaces rápidos (Inicio, Sobre nosotros, Nuestros servicios, Agenda, Contacto), datos de contacto, horarios de visita, redes sociales, enlaces a Deberes y derechos y a Políticas institucionales, y el aviso de derechos con el año actual.

#### Scenario: Enlaces del footer
- **WHEN** se recorren todos los enlaces del footer
- **THEN** ninguno devuelve 404 ni apunta a `#`, a `/contact/`, a `/shop/` o a `https://https://`

#### Scenario: Redes sociales
- **WHEN** un visitante pulsa un ícono de red social
- **THEN** se abre el perfil oficial en una pestaña nueva y el enlace tiene un nombre accesible ("Facebook de Clínica La Esperanza", etc.)

### Requirement: Acceso flotante a WhatsApp
El sitio SHALL mostrar un botón flotante de WhatsApp que abre una conversación con el número de citas, sin tapar contenido ni controles.

#### Scenario: Botón flotante
- **WHEN** un visitante pulsa el botón flotante
- **THEN** se abre `https://wa.me/573046843367` en una pestaña nueva

#### Scenario: No tapa el contenido
- **WHEN** el visitante llega al final de una página en móvil
- **THEN** el botón flotante no cubre los enlaces del footer ni los botones de formularios

### Requirement: Enlace para saltar al contenido
Cada página SHALL ofrecer como primer elemento enfocable un enlace "Saltar al contenido" que lleva al contenido principal.

#### Scenario: Primer Tab
- **WHEN** un usuario de teclado presiona Tab al cargar una página
- **THEN** aparece el enlace "Saltar al contenido" y al activarlo el foco pasa al contenido principal

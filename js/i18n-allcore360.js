// Copy for the AllCore360º case study. Loaded after js/i18n.js and
// before its DOMContentLoaded handler runs, so the keys are in place by
// the time the first translation pass happens.
window.registerTranslations({
  en: {
    "ac.docTitle": "AllCore360º — Case study · Andrés Betancourt",
    "ac.back": "Back to portfolio",

    "ac.hero.kicker": "Product design — case study",
    "ac.hero.lede":
      "The control system for a physical therapy machine — one product, four surfaces, seven roles, and a touchscreen bolted to equipment in gyms and clinics.",
    "ac.hero.roleLabel": "Role",
    "ac.hero.role": "Senior Product Designer",
    "ac.hero.surfacesLabel": "Surfaces",
    "ac.hero.surfaces": "Web, Mobile, SBC Operator, SBC Technician",
    "ac.hero.toolsLabel": "Tools",
    "ac.hero.shotAlt":
      "AllCore360º user management screens shown on a tablet and a phone.",
    "ac.hero.caption": "Web · user management · role-scoped",

    "ac.challenge.kicker": "The challenge",
    "ac.challenge.title": "Permissions aren't a single table. They're a table times four.",
    "ac.challenge.lede":
      "AllCore360º has seven roles — GAM, AM, OA, FA-Admin, FA-User, Technician, Rider — but permissions aren't defined once. The same Organization Admin gets a full CRM on desktop and a deliberately narrower \u201cOperator\u201d view on the machine itself. The permission model gets redeclared per surface, not just per role.",
    "ac.challenge.dialAlt":
      "Concentric arcs showing how much of the product each of the seven roles can reach, from a full ring for GAM down to a sliver for Rider.",
    "ac.challenge.hierarchy": "Organization → Facility → Machine → Users → Riders",
    "ac.challenge.pull":
      "Every screen had to answer two questions: who's looking, and from which surface?",

    "ac.role.gam": "360° full ring",
    "ac.role.am": "~300°",
    "ac.role.oa": "~200°",
    "ac.role.faAdmin": "~140°",
    "ac.role.faUser": "~110°",
    "ac.role.technician": "~60°, machine-scoped rather than org-scoped",
    "ac.role.rider": "~20° sliver",

    "ac.stat.features": "Features mapped",
    "ac.stat.roles": "Roles",
    "ac.stat.surfaces": "Surfaces",
    "ac.stat.levels": "Levels of hierarchy",

    "ac.surfaces.kicker": "One system, four surfaces",
    "ac.surfaces.title": "Same product. Four completely different contexts.",
    "ac.surfaces.note": "Same design tokens. Four different jobs to be done.",
    "ac.surfaces.tablistLabel": "Product surfaces",
    "ac.tab.web": "Web",
    "ac.tab.mobile": "Mobile app",
    "ac.tab.operator": "SBC Operator",
    "ac.tab.technician": "SBC Technician",
    "ac.surface.web":
      "Full back office — organizations, facilities, machines, users, riders and reports.",
    "ac.surface.mobile":
      "The same account and management flows scoped for a phone — same Code Connect components, different layout rules.",
    "ac.surface.operator":
      "What OA, FA and Rider see standing at the machine — session and evaluation flows, countdowns, no-connection states, emergency stop.",
    "ac.surface.technician":
      "AllCore360º's own field employees — machine calibration, R/T axis setup, alarms, and onboarding a machine for the first time.",
    "ac.shot.web": "Screenshot — web organization management",
    "ac.shot.mobile": "Screenshot — mobile my account",
    "ac.shot.operator": "Screenshot — SBC operator session flow",
    "ac.shot.technician": "Screenshot — SBC technician calibration",

    "ac.process.kicker": "Process",
    "ac.process.title": "Figma for the system. Claude for the thinking. Figma Make for the prototype.",
    "ac.process.lede":
      "I built the design system in Figma — components, variables, Auto Layout, and shared Figma libraries — on top of Radix Themes' own structural conventions. Claude, run locally through Claude Cowork, acted as a technical thinking partner: reasoning through the 7-role × 4-surface permission model and the archive/cascade logic, running accessibility checks, critiquing new designs, and helping brainstorm and ideate new screens and components. Figma Make turned key flows into functional prototypes I could put in front of clients before anything reached development. Every ready frame in the Figma file is flagged \u201cReady for dev\u201d — a lightweight status system that kept handoff honest.",
    "ac.step.structure": "Structure",
    "ac.step.reason": "Reason",
    "ac.step.ship": "Prototype",
    "ac.step.shipTool": "Figma Make",
    "ac.process.pull":
      "AI didn't replace the design decisions — it removed the friction between making them and showing them working.",

    "ac.data.kicker": "A close look — data integrity",
    "ac.data.title": "When the dashboard math didn't add up.",
    "ac.data.lede":
      "The Active Records table had its month-over-month badge next to the previous period's value instead of the current one, breaking the natural left-to-right read. The percentages didn't match (current − previous) / previous, so some arrows pointed the wrong way. Fixing it meant defining the rolling-period rule the whole table should follow, not just moving a badge.",
    "ac.data.before": "Before",
    "ac.data.after": "After",
    "ac.shot.before": "Screenshot — badge on the previous-period column",
    "ac.shot.after": "Screenshot — badge on the current-period column",
    "ac.data.tableCaption": "Active records — corrected rolling period",
    "ac.table.record": "Record",
    "ac.table.current": "Feb 2026",
    "ac.table.change": "Change",
    "ac.table.previous": "Jan 2026",
    "ac.record.orgs": "Active organizations",
    "ac.record.facilities": "Active facilities",
    "ac.record.machines": "Active machines",
    "ac.record.riders": "Active riders",
    "ac.record.newRiders": "New riders",
    "ac.data.pull":
      "Good product design isn't just the interface — it's making sure the interface never lies.",

    "ac.safety.kicker": "A close look — physical safety",
    "ac.safety.title": "When the interface controls something that can hurt you.",
    "ac.safety.lede":
      "The SBC isn't just a touchscreen — it triggers real physical movement. Every ride and evaluation launch runs through a visible countdown (3… 2… 1… then a running timer) before the machine moves, so the rider is never caught off guard. The emergency-stop control has its own first-class states — pressed and released — each with a dedicated alert screen. And because the machine can lose its network connection mid-session, every key SBC screen has a systematically designed \u201cNo connection\u201d counterpart, not a generic error toast.",
    "ac.spec.countdown": "Countdown",
    "ac.spec.countdownBody": "Always shown before physical movement.",
    "ac.spec.estop": "Emergency stop",
    "ac.spec.estopBody": "Pressed and released are first-class states.",
    "ac.spec.offline": "Offline",
    "ac.spec.offlineBody": "Every key screen has a no-connection pair.",
    "ac.safety.pull":
      "Safety-critical interfaces don't get a second draft. The countdown and the E-stop state existed before the rest of the screen did.",

    "ac.system.kicker": "Foundation",
    "ac.system.title": "Built on Radix Themes — one system, every surface.",
    "ac.system.lede":
      "The design system runs on Radix Themes' own structural conventions — a 12-step accent (custom), neutral (slate), and semantic scales (green, red, amber, sky), each with alpha variants, medium radius, 100% scaling, and Roboto carrying a 9-step type scale — mapped directly to code through Figma variables and Code Connect, so engineering never had to guess a value across four surfaces.",
    "ac.system.accent": "Accent — custom, 12 steps",
    "ac.system.neutral": "Neutral — slate, 12 steps",
    "ac.system.semantic": "Semantic — solid (step 9)",
    "ac.system.success": "Success",
    "ac.system.error": "Error",
    "ac.system.warning": "Warning",
    "ac.system.info": "Info",
    "ac.system.type": "Type — Roboto, 9 steps",
    "ac.system.radius": "Radius — medium scale",
    "ac.system.radiusNote":
      "The theme locks Radix’s radius setting to medium. Components then pick from these six steps — buttons, inputs, cards, dialogs — instead of inventing a corner each time.",
    "ac.system.space": "Space — 100% scaling",
    "ac.system.spaceNote":
      "Spacing tokens at 100% scaling: the nine steps used for padding, gaps, and control heights across every surface.",

    "ac.close.title": "Complex systems don't need complicated interfaces. They need clear ones.",
    "ac.close.lede":
      "Designing for seven roles across four surfaces — one of them physically moving — forced a clarity a single-surface product never would have required.",
    "ac.close.more": "See more work",
    "ac.close.contact": "Get in touch",
  },

  es: {
    "ac.docTitle": "AllCore360º — Caso de estudio · Andrés Betancourt",
    "ac.back": "Volver al portafolio",

    "ac.hero.kicker": "Diseño de producto — caso de estudio",
    "ac.hero.lede":
      "El sistema de control de una máquina de fisioterapia: un producto, cuatro superficies, siete roles y una pantalla táctil montada sobre el equipo en gimnasios y clínicas.",
    "ac.hero.roleLabel": "Rol",
    "ac.hero.role": "Product Designer Senior",
    "ac.hero.surfacesLabel": "Superficies",
    "ac.hero.surfaces": "Web, Móvil, SBC Operador, SBC Técnico",
    "ac.hero.toolsLabel": "Herramientas",
    "ac.hero.shotAlt":
      "Pantallas de gestión de usuarios de AllCore360º en una tableta y un teléfono.",
    "ac.hero.caption": "Web · gestión de usuarios · según el rol",

    "ac.challenge.kicker": "El reto",
    "ac.challenge.title": "Los permisos no son una sola tabla. Son una tabla por cuatro.",
    "ac.challenge.lede":
      "AllCore360º tiene siete roles — GAM, AM, OA, FA-Admin, FA-User, Técnico, Rider — pero los permisos no se definen una sola vez. El mismo Organization Admin tiene un CRM completo en escritorio y una vista \u201cOperador\u201d deliberadamente más estrecha en la propia máquina. El modelo de permisos se vuelve a declarar por superficie, no solo por rol.",
    "ac.challenge.dialAlt":
      "Arcos concéntricos que muestran cuánto del producto alcanza cada uno de los siete roles, desde un anillo completo para GAM hasta una porción mínima para Rider.",
    "ac.challenge.hierarchy": "Organización → Sede → Máquina → Usuarios → Riders",
    "ac.challenge.pull":
      "Cada pantalla tenía que responder dos preguntas: quién está mirando y desde qué superficie.",

    "ac.role.gam": "anillo completo de 360°",
    "ac.role.am": "~300°",
    "ac.role.oa": "~200°",
    "ac.role.faAdmin": "~140°",
    "ac.role.faUser": "~110°",
    "ac.role.technician": "~60°, con alcance sobre la máquina y no sobre la organización",
    "ac.role.rider": "porción de ~20°",

    "ac.stat.features": "Funcionalidades mapeadas",
    "ac.stat.roles": "Roles",
    "ac.stat.surfaces": "Superficies",
    "ac.stat.levels": "Niveles de jerarquía",

    "ac.surfaces.kicker": "Un sistema, cuatro superficies",
    "ac.surfaces.title": "El mismo producto. Cuatro contextos completamente distintos.",
    "ac.surfaces.note": "Los mismos tokens de diseño. Cuatro trabajos por resolver distintos.",
    "ac.surfaces.tablistLabel": "Superficies del producto",
    "ac.tab.web": "Web",
    "ac.tab.mobile": "App móvil",
    "ac.tab.operator": "SBC Operador",
    "ac.tab.technician": "SBC Técnico",
    "ac.surface.web":
      "Back office completo: organizaciones, sedes, máquinas, usuarios, riders e informes.",
    "ac.surface.mobile":
      "Los mismos flujos de cuenta y gestión adaptados al teléfono: los mismos componentes de Code Connect con otras reglas de layout.",
    "ac.surface.operator":
      "Lo que ven OA, FA y Rider frente a la máquina: flujos de sesión y evaluación, cuentas regresivas, estados sin conexión y parada de emergencia.",
    "ac.surface.technician":
      "El personal de campo de AllCore360º: calibración de la máquina, configuración de los ejes R/T, alarmas y puesta en marcha de una máquina nueva.",
    "ac.shot.web": "Captura — gestión de organizaciones en web",
    "ac.shot.mobile": "Captura — mi cuenta en móvil",
    "ac.shot.operator": "Captura — flujo de sesión del SBC operador",
    "ac.shot.technician": "Captura — calibración del SBC técnico",

    "ac.process.kicker": "Proceso",
    "ac.process.title": "Figma para el sistema. Claude para pensar. Figma Make para el prototipo.",
    "ac.process.lede":
      "Construí el design system en Figma — componentes, variables, Auto Layout y librerías de Figma compartidas — sobre las convenciones estructurales de Radix Themes. Claude, usado localmente a través de Claude Cowork, funcionó como socio técnico de pensamiento: razonar el modelo de permisos de 7 roles × 4 superficies y la lógica de archivado en cascada, validar accesibilidad, hacer critique de nuevos diseños y apoyar el brainstorming e ideación de nuevas pantallas y componentes. Figma Make convirtió los flujos clave en prototipos funcionales que pude mostrar a los clientes antes de pasar a desarrollo. Cada frame listo en el archivo de Figma está marcado como \u201cReady for dev\u201d: un sistema de estados ligero que mantuvo el handoff honesto.",
    "ac.step.structure": "Estructura",
    "ac.step.reason": "Razonamiento",
    "ac.step.ship": "Prototipo",
    "ac.step.shipTool": "Figma Make",
    "ac.process.pull":
      "La IA no reemplazó las decisiones de diseño: eliminó la fricción entre tomarlas y mostrarlas funcionando.",

    "ac.data.kicker": "Una mirada de cerca — integridad de datos",
    "ac.data.title": "Cuando las cuentas del dashboard no cuadraban.",
    "ac.data.lede":
      "La tabla de Registros Activos mostraba el badge de variación mensual junto al valor del periodo anterior en lugar del actual, rompiendo la lectura natural de izquierda a derecha. Los porcentajes no coincidían con (actual − anterior) / anterior, así que algunas flechas apuntaban en la dirección equivocada. Corregirlo implicó definir la regla de periodo móvil que debía seguir toda la tabla, no solo mover un badge.",
    "ac.data.before": "Antes",
    "ac.data.after": "Después",
    "ac.shot.before": "Captura — badge sobre la columna del periodo anterior",
    "ac.shot.after": "Captura — badge sobre la columna del periodo actual",
    "ac.data.tableCaption": "Registros activos — periodo móvil corregido",
    "ac.table.record": "Registro",
    "ac.table.current": "Feb 2026",
    "ac.table.change": "Variación",
    "ac.table.previous": "Ene 2026",
    "ac.record.orgs": "Organizaciones activas",
    "ac.record.facilities": "Sedes activas",
    "ac.record.machines": "Máquinas activas",
    "ac.record.riders": "Riders activos",
    "ac.record.newRiders": "Riders nuevos",
    "ac.data.pull":
      "El buen diseño de producto no es solo la interfaz: es asegurarse de que la interfaz nunca mienta.",

    "ac.safety.kicker": "Una mirada de cerca — seguridad física",
    "ac.safety.title": "Cuando la interfaz controla algo que puede hacerte daño.",
    "ac.safety.lede":
      "El SBC no es solo una pantalla táctil: dispara movimiento físico real. Cada inicio de sesión o evaluación pasa por una cuenta regresiva visible (3… 2… 1… y luego un cronómetro) antes de que la máquina se mueva, para que el rider nunca sea tomado por sorpresa. El control de parada de emergencia tiene estados propios de primer nivel — presionado y liberado — cada uno con su pantalla de alerta. Y como la máquina puede perder la conexión a mitad de sesión, cada pantalla clave del SBC tiene su contraparte \u201cSin conexión\u201d diseñada sistemáticamente, no un toast de error genérico.",
    "ac.spec.countdown": "Cuenta regresiva",
    "ac.spec.countdownBody": "Siempre antes del movimiento físico.",
    "ac.spec.estop": "Parada de emergencia",
    "ac.spec.estopBody": "Presionado y liberado son estados de primer nivel.",
    "ac.spec.offline": "Sin conexión",
    "ac.spec.offlineBody": "Cada pantalla clave tiene su versión sin conexión.",
    "ac.safety.pull":
      "Las interfaces críticas para la seguridad no tienen segundo borrador. La cuenta regresiva y el estado de parada de emergencia existían antes que el resto de la pantalla.",

    "ac.system.kicker": "Fundamentos",
    "ac.system.title": "Construido sobre Radix Themes: un sistema, todas las superficies.",
    "ac.system.lede":
      "El design system se apoya en las convenciones estructurales de Radix Themes — acento de 12 pasos (custom), neutral (slate) y escalas semánticas (green, red, amber, sky), cada una con variantes alpha, radio medio, escalado al 100% y Roboto sosteniendo una escala tipográfica de 9 pasos — mapeadas directamente a código con variables de Figma y Code Connect, para que desarrollo nunca tuviera que adivinar un valor en ninguna de las cuatro superficies.",
    "ac.system.accent": "Acento — custom, 12 pasos",
    "ac.system.neutral": "Neutral — slate, 12 pasos",
    "ac.system.semantic": "Semánticos — sólido (paso 9)",
    "ac.system.success": "Éxito",
    "ac.system.error": "Error",
    "ac.system.warning": "Advertencia",
    "ac.system.info": "Info",
    "ac.system.type": "Tipo — Roboto, 9 pasos",
    "ac.system.radius": "Radio — escala medium",
    "ac.system.radiusNote":
      "El theme fija el radio de Radix en medium. Los componentes eligen entre estos seis pasos — botones, inputs, cards, diálogos — en lugar de inventar una esquina cada vez.",
    "ac.system.space": "Espacio — escalado 100%",
    "ac.system.spaceNote":
      "Tokens de espaciado al 100%: los nueve pasos para padding, gaps y alturas de controles en todas las superficies.",

    "ac.close.title": "Los sistemas complejos no necesitan interfaces complicadas. Necesitan interfaces claras.",
    "ac.close.lede":
      "Diseñar para siete roles en cuatro superficies — una de ellas en movimiento físico — exigió una claridad que un producto de una sola superficie nunca habría requerido.",
    "ac.close.more": "Ver más trabajo",
    "ac.close.contact": "Hablemos",
  },
});

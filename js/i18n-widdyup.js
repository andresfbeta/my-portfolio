// Copy for the WiddyUp case study. Loaded after js/i18n.js and
// before its DOMContentLoaded handler runs, so the keys are in place by
// the time the first translation pass happens.
window.registerTranslations({
  en: {
    "wu.docTitle": "WiddyUp — Case study · Andrés Betancourt",
    "wu.back": "Back to portfolio",

    "wu.hero.kicker": "Product design — case study",
    "wu.hero.lede":
      "Designing the financial layer of a school fundraising ecosystem — validated with real clients before writing a line of production code.",
    "wu.hero.productLabel": "Product",
    "wu.hero.product":
      "Fundraising and operational finance for school performing-arts programs.",
    "wu.hero.roleLabel": "My role",
    "wu.hero.role":
      "End-to-end product design: research, architecture, flows, hi-fi, and prototype.",
    "wu.hero.challengeLabel": "Challenge",
    "wu.hero.challenge": "Validate a modular model before investing in development.",
    "wu.hero.constraintLabel": "Constraint",
    "wu.hero.constraint": "Tight timeline for a credible prototype, ready for interviews.",
    "wu.hero.phoneAdmin": "Admin dashboard — mobile view",
    "wu.hero.phoneMoney": "Student Money view — mobile",
    "wu.hero.phonePortfolio": "Student Portfolio view — mobile",

    "wu.context.kicker": "Context",
    "wu.context.title": "Scattered tools, zero visibility",
    "wu.context.lede":
      "School bands, orchestras, and dance teams run fundraising and fee collection with spreadsheets, text messages, and cash. Program directors lose hours to manual follow-up; students and families never clearly know what they owe or why.",
    "wu.context.quote":
      '"The product needs to feel like a Slack-style ecosystem: a free messaging and profiles layer, with payment modules that feel independent of each other — not mandatory as a bundle."',
    "wu.context.quoteLabel": "Key business insight",

    "wu.persona.adminTitle": "Administrator",
    "wu.persona.adminDesc": "Program director. Back-end view, group management.",
    "wu.persona.studentTitle": "Member / student",
    "wu.persona.studentDesc":
      "Gen Z/Alpha, 14–18. Customer-facing dashboard, native to how they already use tech.",
    "wu.persona.parentTitle": "Parent / guardian",
    "wu.persona.parentDesc":
      "Separate login, linked to the student profile — for compliance when communicating with minors.",

    "wu.arch.kicker": "Process — information architecture",
    "wu.arch.title": "Four modules, one clear hierarchy",
    "wu.arch.lede":
      "Before drawing a single screen, I defined the product’s four modules and how they relate to each other.",
    "wu.arch.dash": "The central nervous system. Two views: administrator and member.",
    "wu.arch.fin": "The core to validate. Setup, maintenance, end-of-season close.",
    "wu.arch.fund": "The entry wedge. Video storytelling, not legacy fundraising.",
    "wu.arch.comm": "Light Notion-style feed. First to cut if time ran short.",
    "wu.arch.note":
      "If something had to be cut for time, Communication was sacrificed first. Dashboard, Financial, and Fundraising were non-negotiable.",
    "wu.stat.modules": "Modules",
    "wu.stat.screens": "Hi-fi screens",
    "wu.stat.flows": "User flows",

    "wu.flows.kicker": "Process — user flows",
    "wu.flows.title": "Three flows, three different frictions",
    "wu.flow.adminLabel": "01 · ADMINISTRATOR",
    "wu.flow.studentLabel": "02 · STUDENT",
    "wu.flow.parentLabel": "03 · PARENT / GUARDIAN",
    "wu.flow.a1t": "Choose modules",
    "wu.flow.a1d": "Fundraising, Financial, or both.",
    "wu.flow.a2t": "Invite members",
    "wu.flow.a2d": "QR or link, no friction.",
    "wu.flow.a3t": "Configure charges",
    "wu.flow.a3d": "Amount and due date per task.",
    "wu.flow.a4t": "Automatic follow-up",
    "wu.flow.a4d": "Reminders and approvals from the dashboard.",
    "wu.flow.s1t": "Open invitation",
    "wu.flow.s1d": "Link or QR, group already identified.",
    "wu.flow.s2t": "Create account",
    "wu.flow.s2d": "Name and email only.",
    "wu.flow.s3t": "See balance & fundraising",
    "wu.flow.s3d": "Next payment and group progress.",
    "wu.flow.s4t": "Pay",
    "wu.flow.s4d": "Apple Pay or card, instant confirmation.",
    "wu.flow.p1t": "Receive invitation",
    "wu.flow.p1d": "Linked to the student profile.",
    "wu.flow.p2t": "Create own account",
    "wu.flow.p2d": "Separate login, for compliance with minors.",
    "wu.flow.p3t": "See child’s balance",
    "wu.flow.p3d": "Activity and pending payments.",
    "wu.flow.p4t": "Pay on their behalf",
    "wu.flow.p4d": "Same payment flow, different login.",
    "wu.flows.onboarding": "Student onboarding, start to finish",
    "wu.flows.onboardingNote":
      "Any extra step means losing the student. The flow had to resolve in under half a minute.",

    "wu.iter.kicker": "Process — from mid-fi to hi-fi",
    "wu.iter.title": "I skipped wireframes. I iterated straight in Figma.",
    "wu.iter.lede":
      "Given the timeline, I skipped low-fidelity wireframes and iterated directly in mid/hi-fi, using stakeholder comments as a fast feedback loop — 15-minute check-ins.",
    "wu.iter.before": "Before",
    "wu.iter.after": "After",
    "wu.iter1.label": "Iteration 01 — Home vs. module detail",
    "wu.iter1.body":
      "The first admin dashboard mixed the overall summary with full financial detail in the same view. Feedback from a product stakeholder named the problem: home is not the same as a module’s detail view. I adjusted the model so Home showed only summaries and entry points, leaving detail inside each module.",
    "wu.iter1.beforeAlt": "Before — admin dashboard",
    "wu.iter1.afterAlt": "After — home with summary and entry points",
    "wu.iter1.slider": "Compare before and after of the admin dashboard",
    "wu.iter1.caption":
      "Resulting principle: the dashboard never duplicates a module’s detail — it only summarizes and links.",
    "wu.iter2.label": "Iteration 02 — Portfolio vs. Money",
    "wu.iter2.body":
      "Second iteration: separate the student’s “achievements profile” (Portfolio) from their financial information (Money). Mixing them created a confusing experience with the wrong tone.",
    "wu.iter2.portfolio": '"This is me" — zero financial content.',
    "wu.iter2.money": '"I\'m funding experiences" — financial only.',
    "wu.iter2.portfolioAlt": "Student Portfolio view",
    "wu.iter2.moneyAlt": "Student Money view",

    "wu.tools.kicker": "Process — tools and AI",
    "wu.tools.title": "An AI-supported flow to reach validation fast",
    "wu.tools.lede":
      "The client had a tight deadline for this delivery. Leaning on AI tools at every stage sped up screen production and got us to the first client-facing validation on time.",
    "wu.tools.s1": "01 · DOCUMENTATION",
    "wu.tools.s1d":
      "Meetings, briefs, and transcripts centralized — project context available throughout the process.",
    "wu.tools.s2": "02 · EARLY PROTOTYPING",
    "wu.tools.s2d":
      "Fast screen exploration in Figma Make, with a custom Make Kit to keep consistency across screens.",
    "wu.tools.s3": "03 · ITERATION & COLLABORATION",
    "wu.tools.s3d":
      "Collaborative refinement and iteration with the client on designs already validated in Make.",

    "wu.system.kicker": "Visual system",
    "wu.system.title": "A system built to scale fast",
    "wu.system.color": "Color",
    "wu.system.colorNote": "Indigo · Teal · Off-white · Coral (occasional accent)",
    "wu.system.type": "Typography",
    "wu.system.typeBody": "DM Sans — body text",
    "wu.system.integrations": "Integrations inside the module",
    "wu.system.integrationsNote": "Visible inside each module — never a separate module.",
    "wu.system.library": "Component library",
    "wu.system.btnPrimary": "New payment task",
    "wu.system.btnSecondary": "Remind",
    "wu.system.buttons": "Buttons",
    "wu.system.states": "States",
    "wu.system.avatars": "Avatars",
    "wu.system.progressLabel": "59% collected",
    "wu.system.progress": "Progress bar",
    "wu.system.input": "Search members…",
    "wu.system.metricLabel": "Season collected",
    "wu.system.metric": "Accent card",
    "wu.system.tabAll": "All",
    "wu.system.tabPaid": "Paid",
    "wu.system.tabOverdue": "Overdue",
    "wu.system.notif": "Notification",

    "wu.result.kicker": "Result",
    "wu.result.title": "From idea to client validation",
    "wu.result.shotAdmin": "Admin dashboard desktop",
    "wu.result.shotMoney": "Money desktop",
    "wu.result.shotMessages": "Messages desktop",
    "wu.result.shotAdminMobile": "Admin dashboard mobile",
    "wu.result.shotMoneyMobile": "Money mobile",
    "wu.result.deliverables": "Deliverables",
    "wu.result.d1": "Information architecture",
    "wu.result.d2": "User flows — admin / parent / student",
    "wu.result.d3": "Mid-fi → hi-fi mockups, no wireframe stage",
    "wu.result.d4": "Clickable prototype for client validation",
    "wu.result.copy":
      "The challenge wasn’t only visual. It was translating a modular business model — free layer plus independent upsells — into an information hierarchy a non-technical user could understand in seconds, fast enough to reach real client validation before writing a line of production code.",

    "wu.close.title": "Validate the model before you build the product.",
    "wu.close.lede":
      "A modular fundraising platform, designed end-to-end and put in front of real clients — without waiting on production engineering.",
    "wu.close.more": "See more work",
    "wu.close.contact": "Get in touch",
  },

  es: {
    "wu.docTitle": "WiddyUp — Case study · Andrés Betancourt",
    "wu.back": "Volver al portafolio",

    "wu.hero.kicker": "Case study de producto",
    "wu.hero.lede":
      "Diseñar la capa financiera de un ecosistema de fundraising escolar — validado con clientes reales antes de escribir una línea de producción.",
    "wu.hero.productLabel": "Producto",
    "wu.hero.product":
      "Fundraising y finanzas operativas para programas de artes escénicas escolares.",
    "wu.hero.roleLabel": "Mi rol",
    "wu.hero.role":
      "Product design end-to-end: research, arquitectura, flujos, hi-fi y prototipo.",
    "wu.hero.challengeLabel": "Reto",
    "wu.hero.challenge": "Validar un modelo modular antes de invertir en desarrollo.",
    "wu.hero.constraintLabel": "Restricción",
    "wu.hero.constraint":
      "Plazo ajustado para un prototipo creíble, listo para entrevistas.",
    "wu.hero.phoneAdmin": "Dashboard admin — vista mobile",
    "wu.hero.phoneMoney": "Vista Money del estudiante — mobile",
    "wu.hero.phonePortfolio": "Vista Portfolio del estudiante — mobile",

    "wu.context.kicker": "Contexto",
    "wu.context.title": "Herramientas dispersas, visibilidad cero",
    "wu.context.lede":
      "Bandas, orquestas y equipos de danza escolares manejan fundraising y cobro de cuotas con hojas de cálculo, mensajes de texto y efectivo. Los directores de programa pierden horas en seguimiento manual; estudiantes y familias no saben con claridad qué deben ni para qué.",
    "wu.context.quote":
      '"El producto necesita sentirse como un ecosistema tipo Slack: una capa gratuita de mensajería y perfiles, con módulos de pago que se sienten independientes entre sí — no obligatorios en conjunto."',
    "wu.context.quoteLabel": "Insight de negocio clave",

    "wu.persona.adminTitle": "Administrador",
    "wu.persona.adminDesc": "Director de programa. Vista back-end, gestión del grupo.",
    "wu.persona.studentTitle": "Miembro / estudiante",
    "wu.persona.studentDesc":
      "Gen Z/Alpha, 14–18 años. Dashboard customer-facing, nativo a como ya usan tecnología.",
    "wu.persona.parentTitle": "Padre / acudiente",
    "wu.persona.parentDesc":
      "Login separado, vinculado al perfil del estudiante — por cumplimiento en comunicación con menores.",

    "wu.arch.kicker": "Proceso — arquitectura de información",
    "wu.arch.title": "Cuatro módulos, una jerarquía clara",
    "wu.arch.lede":
      "Antes de dibujar una sola pantalla, definí los cuatro módulos del producto y cómo se relacionan entre sí.",
    "wu.arch.dash": "El sistema nervioso central. Dos vistas: administrador y miembro.",
    "wu.arch.fin": "El núcleo a validar. Setup, mantenimiento, cierre de temporada.",
    "wu.arch.fund": "La cuña de entrada. Storytelling en video, no fundraising legacy.",
    "wu.arch.comm": "Feed ligero tipo Notion. El primero en recortarse si falta tiempo.",
    "wu.arch.note":
      "Si algo debía cortarse por tiempo, Comunicación se sacrificaba primero. Dashboard, Financiero y Fundraising eran innegociables.",
    "wu.stat.modules": "Módulos",
    "wu.stat.screens": "Pantallas hi-fi",
    "wu.stat.flows": "Flujos de usuario",

    "wu.flows.kicker": "Proceso — user flows",
    "wu.flows.title": "Tres flujos, tres fricciones distintas",
    "wu.flow.adminLabel": "01 · ADMINISTRADOR",
    "wu.flow.studentLabel": "02 · ESTUDIANTE",
    "wu.flow.parentLabel": "03 · PADRE / ACUDIENTE",
    "wu.flow.a1t": "Elegir módulos",
    "wu.flow.a1d": "Fundraising, Financiero, o ambos.",
    "wu.flow.a2t": "Invitar miembros",
    "wu.flow.a2d": "QR o link, sin fricción.",
    "wu.flow.a3t": "Configurar cobros",
    "wu.flow.a3d": "Monto y fecha límite por tarea.",
    "wu.flow.a4t": "Seguimiento automático",
    "wu.flow.a4d": "Recordatorios y aprobaciones desde el dashboard.",
    "wu.flow.s1t": "Abrir invitación",
    "wu.flow.s1d": "Link o QR, grupo ya identificado.",
    "wu.flow.s2t": "Crear cuenta",
    "wu.flow.s2d": "Solo nombre y correo.",
    "wu.flow.s3t": "Ver balance y fundraising",
    "wu.flow.s3d": "Próximo pago y progreso del grupo.",
    "wu.flow.s4t": "Pagar",
    "wu.flow.s4d": "Apple Pay o tarjeta, confirmación instantánea.",
    "wu.flow.p1t": "Recibir invitación",
    "wu.flow.p1d": "Vinculada al perfil del estudiante.",
    "wu.flow.p2t": "Crear cuenta propia",
    "wu.flow.p2d": "Login separado, por cumplimiento con menores.",
    "wu.flow.p3t": "Ver balance del hijo",
    "wu.flow.p3d": "Actividad y pagos pendientes.",
    "wu.flow.p4t": "Pagar en su nombre",
    "wu.flow.p4d": "Mismo flujo de pago, distinto login.",
    "wu.flows.onboarding": "Onboarding del estudiante, de principio a fin",
    "wu.flows.onboardingNote":
      "Cualquier paso de más significa perder al estudiante. Se validó que el flujo debía resolverse en menos de medio minuto.",

    "wu.iter.kicker": "Proceso — de mid-fi a hi-fi",
    "wu.iter.title": "Salté los wireframes. Iteré directo en Figma.",
    "wu.iter.lede":
      "Dado el plazo, salté la etapa de wireframes de baja fidelidad e iteré directamente en mid/hi-fi, usando comentarios de stakeholders como ciclo de feedback rápido — check-ins de 15 minutos.",
    "wu.iter.before": "Antes",
    "wu.iter.after": "Después",
    "wu.iter1.label": "Iteración 01 — Home vs. detalle de módulo",
    "wu.iter1.body":
      "Primera versión del dashboard admin mezclaba el resumen general con el detalle financiero completo en la misma vista. El feedback de un stakeholder de producto identificó el problema: home no es lo mismo que la vista de detalle de un módulo. Ajusté el modelo para que Home mostrara solo resúmenes y puntos de entrada, dejando el detalle dentro de cada módulo.",
    "wu.iter1.beforeAlt": "Antes — dashboard admin",
    "wu.iter1.afterAlt": "Después — home con resumen y entry points",
    "wu.iter1.slider": "Comparar antes y después del dashboard admin",
    "wu.iter1.caption":
      "Principio resultante: el dashboard nunca duplica el detalle de un módulo, solo lo resume y enlaza.",
    "wu.iter2.label": "Iteración 02 — Portfolio vs. Money",
    "wu.iter2.body":
      "Segunda iteración: separar el “perfil de logros” del estudiante (Portfolio) de su información financiera (Money). Mezclarlos generaba una experiencia confusa y con tono equivocado.",
    "wu.iter2.portfolio": '"Esto soy yo" — cero contenido financiero.',
    "wu.iter2.money": '"Estoy financiando experiencias" — solo lo financiero.',
    "wu.iter2.portfolioAlt": "Vista Portfolio del estudiante",
    "wu.iter2.moneyAlt": "Vista Money del estudiante",

    "wu.tools.kicker": "Proceso — herramientas y AI",
    "wu.tools.title": "Un flujo apoyado en AI para llegar rápido a validación",
    "wu.tools.lede":
      "El cliente tenía un plazo ajustado para esta entrega. Apoyarme en herramientas de AI en cada etapa del proceso permitió agilizar y acelerar la producción de las pantallas, y llegar a tiempo al primer acercamiento y validación que el cliente quería hacer con sus propios clientes.",
    "wu.tools.s1": "01 · DOCUMENTACIÓN",
    "wu.tools.s1d":
      "Reuniones, briefs y transcripts centralizados — contexto del proyecto accesible durante todo el proceso.",
    "wu.tools.s2": "02 · PROTOTIPADO INICIAL",
    "wu.tools.s2d":
      "Exploración rápida de pantallas en Figma Make, con un Make Kit propio para mantener consistencia entre pantallas.",
    "wu.tools.s3": "03 · ITERACIÓN Y COLABORACIÓN",
    "wu.tools.s3d":
      "Refinamiento e iteración colaborativa con el cliente sobre los diseños ya validados en Make.",

    "wu.system.kicker": "Sistema visual",
    "wu.system.title": "Un sistema construido para escalar rápido",
    "wu.system.color": "Color",
    "wu.system.colorNote": "Indigo · Teal · Off-white · Coral (acento ocasional)",
    "wu.system.type": "Tipografía",
    "wu.system.typeBody": "DM Sans — body text",
    "wu.system.integrations": "Integraciones dentro del módulo",
    "wu.system.integrationsNote":
      "Visibles dentro de cada módulo — nunca un módulo aparte.",
    "wu.system.library": "Librería de componentes",
    "wu.system.btnPrimary": "Nueva tarea de pago",
    "wu.system.btnSecondary": "Recordar",
    "wu.system.buttons": "Botones",
    "wu.system.states": "Estados",
    "wu.system.avatars": "Avatares",
    "wu.system.progressLabel": "59% collected",
    "wu.system.progress": "Barra de progreso",
    "wu.system.input": "Buscar miembros…",
    "wu.system.metricLabel": "Season collected",
    "wu.system.metric": "Card con acento",
    "wu.system.tabAll": "Todos",
    "wu.system.tabPaid": "Pagado",
    "wu.system.tabOverdue": "Vencido",
    "wu.system.notif": "Notificación",

    "wu.result.kicker": "Resultado",
    "wu.result.title": "De la idea a la validación con clientes",
    "wu.result.shotAdmin": "Dashboard admin desktop",
    "wu.result.shotMoney": "Money desktop",
    "wu.result.shotMessages": "Messages desktop",
    "wu.result.shotAdminMobile": "Dashboard admin mobile",
    "wu.result.shotMoneyMobile": "Money mobile",
    "wu.result.deliverables": "Entregables",
    "wu.result.d1": "Arquitectura de información",
    "wu.result.d2": "User flows — administrador / padre / estudiante",
    "wu.result.d3": "Mockups mid-fi → hi-fi, sin etapa de wireframes",
    "wu.result.d4": "Prototipo clickeable para validación con clientes",
    "wu.result.copy":
      "El reto no fue solo visual. Fue traducir un modelo de negocio modular — capa gratuita más upsells independientes — en una jerarquía de información que un usuario no técnico entendiera en segundos, con la velocidad suficiente para llegar a validación real con clientes antes de escribir una línea de código de producción.",

    "wu.close.title": "Valida el modelo antes de construir el producto.",
    "wu.close.lede":
      "Una plataforma de fundraising modular, diseñada de punta a punta y puesta frente a clientes reales — sin esperar a ingeniería de producción.",
    "wu.close.more": "Ver más trabajo",
    "wu.close.contact": "Contactar",
  },
});

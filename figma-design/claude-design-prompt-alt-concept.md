# Prompt para Claude Design — Concepto alterno "Spec Sheet"

Prompt único, pensado para pegar completo en Claude Design (o cualquier generador similar). Es una dirección visual **totalmente distinta** a la actual en Figma (navy/rosa/teal + DM Sans) — pensada para comparar, no para reemplazar sin validar. No inventa proyectos ni logra ni resultados falsos: usa únicamente lo real de Pipe.

---

## PROMPT (copiar desde aquí)

Diseña la home de un portafolio de product designer. Actúa como director de diseño senior, con el nivel de exigencia de Linear o Stripe — no un template genérico de portafolio.

**Quién es el sujeto real (no inventes nada fuera de esto):**
Andrés "Pipe" Betancourt, Principal Product Designer (Fullstack Labs), Medellín, Colombia. +5 años liderando design systems y UX/UI para clientes como Hyatt, Pulte Homes, AllCore360°, Laika, Grupo Coomeva, Gorilla Logic, SuperGIROS, Itaú. Diferenciador real: además de producto digital, esculpe en 3D (Blender, Nomad Sculpt, @windowtodd.design) y hace motion/micro-interacciones — no es un hobby decorativo, es parte de cómo piensa el detalle y el material. Flujo de trabajo real: Figma avanzado (variables, Auto Layout, Code Connect) + Cursor con IA para llevar diseño a código, dev handoff técnico. Proyecto propio en curso: WiddyUp, SaaS para gestión de artes escénicas juveniles.

**Lo que la página tiene que probar en menos de 30 segundos:** este es un diseñador que piensa en sistemas Y que sabe llevar eso a producción — no "solo Figma". El objeto 3D real es la prueba tangible de oficio, no decoración.

**Evita explícitamente estos tres defaults de diseño generado por IA** (no los uses ni mezclados):
1. Fondo crema cálido + serif display de alto contraste + acento terracota.
2. Fondo casi negro + un solo acento neón (verde ácido o vermellón).
3. Layout tipo periódico con filetes finos, cero border-radius, columnas densas.

**Dirección: "Spec Sheet" — ficha técnica de un objeto, no una landing de SaaS.**
La idea central: Pipe trata sus propias piezas 3D como especímenes de un catálogo técnico — con anotaciones tipo ficha de producto (material, herramienta, origen). Esa misma lógica de "hoja de especificaciones" organiza toda la página: los proyectos se leen como líneas de un datasheet, no como tarjetas de marketing. Es una metáfora que viene de quién es él (preciso, sistemático, con handoff técnico), no un molde genérico.

**Sistema de color** (usar exactamente estos, no soft-pastelizar):
- `Ink` `#0F1521` — fondo base, negro-azulado (no negro puro), tono frío
- `Paper` `#F5F3EE` — superficie clara para secciones/cards de contraste
- `Coral` `#FF5470` — acento 1, muestreado del pulpo 3D (rojo/rosa)
- `Moss` `#3FA66B` — acento 2, muestreado del dragón 3D (verde)
- `Signal` `#00B7C2` — acento 3, continuidad con su marca real (teal)
- `Bone` `#B8BEC9` — texto secundario sobre fondo oscuro

Los acentos deben sentirse "muestreados" de las piezas reales, no decorativos — úsalos para etiquetar categorías (ej. un tag de proyecto, un estado), no para fondos grandes.

**Tipografía** (2 roles + 1 utilitario, todas Google Fonts reales):
- Display: **Space Grotesk**, pesos bold/semibold, solo para titulares — geométrica, técnica, con carácter. Úsala con restricción: 1-2 apariciones grandes por sección, no en todo.
- Cuerpo: **IBM Plex Sans** — legible, con herencia técnica/de sistemas (guiño intencional: Plex es de IBM, un lenguaje de sistemas, coherente con que Pipe diseña design systems).
- Utilitaria/mono: **IBM Plex Mono** — para specs, coordenadas, tags de proyecto, labels tipo "MATERIAL:", "RENDER:", nombres de estado. Esta es la voz "ficha técnica" de la página.

**Estructura (wireframe conceptual):**
```
┌────────────────────────────────────────────────────┐
│ PB · mono         Sobre mí  Proyectos  Contacto  ES/EN │  nav delgada, Ink
├────────────────────────────────────────────────────┤
│  PRODUCT              ┌──────────────┐              │
│  DESIGNER,             │  render 3D   │  MATERIAL:   │  hero: headline
│  SYSTEMS               │  real (ej.   │  Toon Shader │  Space Grotesk
│  THINKER.               pulpo)         │  RENDER:     │  gigante + objeto
│  [Space Grotesk 96-120px]              │  Blender     │  3D real anotado
│                                        │  ORIGIN:     │  como specimen,
│                                        │  Medellín    │  no como anillo
│                                        └──────────────┘  decorativo
├────────────────────────────────────────────────────┤
│ BRANDS —— tira monocromática, label mono "WORKED WITH" │
├────────────────────────────────────────────────────┤
│ 01  HYATT       Design System, tokens y variables  →  │  proyectos como
│ 02  WIDDYUP     Component library desde cero       →  │  filas de datasheet,
│ 03  ALLCORE360° Plataforma 0→1 con design system   →  │  hover revela
│  (fila = slug mono + descripción real en 1 línea + tags)│ preview del caso
├────────────────────────────────────────────────────┤
│ 3D / MOTION — galería full-bleed de "especímenes",     │  cada pieza con
│ cada pieza con ficha: herramienta, duración, técnica   │  caption mono real
├────────────────────────────────────────────────────┤
│ CONTACO — footer Ink, email grande en mono, sin emoji  │
└────────────────────────────────────────────────────┘
```
La numeración (01, 02, 03) en proyectos se justifica porque es convención real de catálogo/datasheet — no la uses en secciones que no sean un listado real.

**Elemento firma (lo único verdaderamente memorable):** el hero no lleva anillo ni forma decorativa genérica — lleva una de las piezas 3D reales de Pipe, tratada como objeto de estudio fotográfico, con 2-3 anotaciones mono a su alrededor (material, herramienta, origen) que son datos reales, no relleno. Esto es lo único "audaz" de la página; todo lo demás debe ser disciplinado y silencioso alrededor de eso.

**Motion:** limitado y con propósito — micro-hover en las filas de proyecto (la fila se desliza levemente y revela el tag mono ">"), una entrada suave del objeto 3D del hero al cargar. Nada de animaciones decorativas sueltas; si dudas, quita una.

**Contenido y copy:**
- Todo en español con toggle ES/EN funcional, bilingüe desde el inicio (no placeholders de "Lorem ipsum").
- Copy en voz activa, específica, sin adjetivos vacíos ("innovador", "disruptivo"). Ej: no "Diseño soluciones innovadoras" sino qué hizo y qué resultado tuvo.
- Usa el contenido real extraído del Figma (sección siguiente) como base de cada proyecto; si falta un dato real (resultado numérico, fecha), márcalo explícitamente como `[dato pendiente]` en vez de inventarlo.

**Contenido real (extraído del Figma actual, node 869:2186 — úsalo como fuente de verdad para copy):**

Hero: "I'm a Product Designer" · "Senior product designer with a technical edge: I use AI tools to prototype faster, translate designs into dev-ready specs, and bridge the gap between Figma and code. 5+ years leading design systems for scaleups and enterprise clients." · tags: Systems Thinking, AI-Powered Prototyping, Dev Handoff, Motion Design.

Brands: Hyatt, FullStack, Pulte Homes, AllCore360°, Laika, Grupo Coomeva, Gorilla Logic, SuperGIROS.

My favorites:
- **Hyatt** — "From Testing, creating new UIs and designing a complex Design System that required the use of tokens and variables." · tags: Design System, Product Design
- **AllCore360°** — "Creation of a platform that helps startups/entrepreneurs grow their business. Design created from scratch with design system." · tags: Product Design, Figma
- **Piku** — "Designed a conceptual platform for seamless restaurant order and quick pickup using Design Thinking methodology." · tags: Case Study, Figma
- **WiddyUp** — "Created the component library from scratch and the support for the creation of the new platform." (nota: en las instrucciones del proyecto WiddyUp es en realidad su propio SaaS de gestión de artes escénicas juveniles — más sustancioso que este one-liner; si el generador puede, que lo use en vez del texto de la card) · tags: Product Design, Figma

Other projects:
- **Logika** — "Creation of a platform that helps startups/entrepreneurs grow their business. Design created from scratch with design system." · tags: Product Design, Figma
- **Pulte** — "Created the component library from scratch and the support for the creation of the new platform." · tags: Product Design, Figma
- **Laika** — "Conducted A/B testing and a UX/UI audit, researching best practices to enhance their design system." · tags: UX Design, UI Design, Figma
- **Nequi** — "Execution of a design proposal for the creation and offer of microcredit services in the Nequi web app (Colombian Digital Bank)." · tags: Case Study, Figma

3D: "I am passionate for 3D design I mostly use Blender and Nomad Sculpt for my work." — @windowtodd.design. Piezas reales visibles: Octopus, Fercho, Oso, Gota, Namaste, Dragón, El_Pollo, Helado, Bomb, Loco, Regalo, Lama, Marciano, Gallina_Chueca, Rocket, Fresita, Mariquita, Alienpus, Beemo, Cactusin, Camaronsin, Escoba.

Motion: "I also apply motion design and micro-interactions to my prototypes and designs. Here are some examples."

Footer: "Let's work together!" + email + LinkedIn + copyright.

⚠️ **Bug de contenido que encontré al leer el Figma (repórtaselo a Pipe, no es tuyo de arreglar en el prompt):** la descripción de **AllCore360°** está duplicada palabra por palabra en **Logika**, y la de **WiddyUp** está duplicada en **Pulte**. Son 4 proyectos distintos con el mismo texto copiado — probablemente contenido placeholder que quedó sin reemplazar. Cuando generes el copy nuevo, no repitas esas descripciones entre proyectos: si no tienes el dato real distinto para Logika y Pulte, márcalo `[dato pendiente]` en vez de reusar el texto de otro proyecto.

**Accesibilidad y responsive (no negociable):** contraste WCAG AA incluso sobre `Ink`, foco de teclado visible, objetivos táctiles ≥44px, mobile-first real (la galería 3D/Motion no puede cortarse sin indicador de scroll).

**Qué NO reutilizar de su portafolio actual:** el navy/rosa/teal de su Figma actual, tarjetas de proyecto con fondo de color por marca, el anillo punteado del hero. Esta es una exploración deliberadamente distinta para comparar, no una traducción 1:1.

---

## Cómo usarlo

Pega el bloque completo entre "PROMPT" y el separador. Si la herramienta te deja iterar, pídele primero el hero y la fila de proyectos por separado antes de la página completa — son las dos piezas que más definen si el concepto funciona.

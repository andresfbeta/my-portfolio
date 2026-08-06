# Prompts Figma Make — Home v2 "Spectacular pass" (Desktop, node 869:4391)

Este frame es un duplicado nuevo del Home — los IDs cambiaron respecto al archivo `figma-make-prompts-home.md` original. Usa los IDs de este documento, no los del v1.

**Bug de naming a corregir en Figma antes de correr estos prompts:** hay dos frames llamados igual "3D Design" — el 869:4586 (carrusel de piezas 3D, correcto) y el 869:4620 (en realidad es la sección Motion Design, mal nombrado). Renómbralo a "Motion Design" para que Figma Make no confunda cuál tocar.

**Estado de los 5 prompts del v1 sobre este frame nuevo:**
1. Header ES/EN toggle — ✅ aplicado (869:4668)
2. Tarjetas unificadas — ❌ no aplicado, sigue con fondo de marca por tarjeta
3. Brands alineados — ✅ aplicado (869:4417)
4. Motion Design swatches — ❌ no aplicado, siguen planos sin play icon
5. Footer — ✅ aplicado (869:4631)

Pega uno a la vez, en este orden. Cada uno toca solo la sección indicada.

---

## 1. Hero — elemento firma (reemplaza el anillo punteado)

**Tocar:** "Profile Image Container" (869:4409): la instancia "Name circle" (869:4411) y el "Mask group" (869:4412) con su vector "Ellipse 53" (869:4413).
**No tocar:** el retrato en sí, el "file 1" (869:4414), el resto de "Introduction Container".

> Elimina el efecto de texto rotando en círculo punteado alrededor del retrato ("Name circle" / "Ellipse 53") — es un cliché genérico de portafolios generados con IA y no comunica nada específico de Pipe. En su lugar, coloca una de las piezas 3D reales de la sección "3D Design" (869:4591) — elige una con silueta compacta (ej. "Octopus" o "Namaste") — como elemento flotante junto al borde inferior-izquierdo del círculo del retrato, a una escala pequeña (~110x110px), con la misma sombra "Large" (doble drop-shadow 0,2,3,0 @30% + 0,6,10,4 @15%) que usan las tarjetas de proyecto. Debe leerse como un objeto que "asoma" junto al retrato, no como decoración de fondo — z-index por encima del círculo del retrato, ligera superposición con el borde.

---

## 2. Hero — contraste tipográfico

**Tocar:** "Introduction Title" (869:4397) + "Im Designer Component" (869:4398), y "Introduction Paragraph" (869:4399).
**No tocar:** el copy, los Skill Tags (869:4400).

> Aumenta el contraste de escala entre el titular "I'm a [Product Designer]" y el párrafo debajo. Sube el tamaño del titular al siguiente escalón de Display (no Headline) manteniendo DM Sans Bold, y reduce el line-height del párrafo (Introduction Paragraph) para que se vea más compacto y denso frente al titular grande — hoy ambos pesan casi igual y la jerarquía no se siente. El acento en pink #fb1d61 sobre "Product Designer" se mantiene igual.

---

## 3. Tarjetas de proyecto — unificar sistema (re-emisión del v1, IDs actualizados)

**Tocar:** "My Favoriets" (869:4468) y "Other Projects Container" (869:4527), dentro de "Projects Container" (869:4462).
**No tocar:** el copy de cada proyecto, los logos de marca.

> Rediseña las tarjetas de proyecto para que compartan un mismo fondo (Neutral/White o Alternate 1 #f5f5f5) y la misma sombra "Large", en vez de que cada tarjeta tenga su propio color de fondo de marca (Pulte navy, Laika morado, Nequi teal, Lógika negro). El logo de cada proyecto va en un contenedor de tamaño fijo (64x64) centrado, con fondo neutro, para que todos los proyectos queden visualmente al mismo nivel. Unifica el estilo de los tags (Design System, Case Study, Figma, etc.) a un solo estilo de pill: fondo Primary/50 #dfe5ec, texto Primary #123d6e, sin variar colores por tarjeta.

---

## 4. Carrusel "3D Design" — fix de corte en el borde

**Tocar:** frame "3D Design" (869:4591), dentro de la sección con título "3D Design Title Container" (869:4587).
**No tocar:** las piezas en sí, el link de Instagram (869:4617).

> El carrusel se corta a media imagen en el borde derecho del contenedor (1280px) sin ningún indicio de que hay más contenido — se ve roto, no editado. Agrega un fade horizontal (gradiente a transparente de ~80px) sobre el borde derecho del contenedor visible, y un indicador sutil de scroll (flecha pequeña o dots) para dar a entender que es un carrusel navegable, no una fila cortada por error.

---

## 5. Motion Design — reemplazar swatches planos (re-emisión del v1, IDs actualizados)

**Tocar:** frame mal nombrado "3D Design" (869:4620, renombrar a "Motion Design" primero) → "3D Design" interior (869:4624).
**No tocar:** la sección de arriba, el carrusel real de piezas 3D (869:4586).

> Reemplaza los recuadros de color plano por thumbnails con un ícono de "play" superpuesto (círculo semi-transparente + triángulo blanco centrado, estilo Dribbble). Usa fondo oscuro #28272A para los recuadros sin asset real todavía, marcado con texto "Preview pendiente" en overlay — temporal hasta que subas los GIFs/videos reales.

---

### Nota
No corras esto sobre mobile todavía. Cuando apruebes cómo queda desktop, te paso los ajustes puntuales de mobile.

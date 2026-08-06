# Prompt para Claude Code — Home del portafolio (HTML/CSS/JS)

Pega esto tal cual en Claude Code, en la raíz del repo donde quieres construir el sitio.

---

Actúa como front-end developer senior construyendo un portafolio de producto/UX designer. Vamos a construir **solo el Home** (hero + grid de proyectos) en HTML/CSS/JS vanilla, 100% responsive y bilingüe (ES/EN) desde la estructura, no como traducción pegada después.

## 1. Fuente de verdad: Figma

Usa el Figma MCP (`get_design_context`, `get_metadata`, `get_variable_defs`, `download_assets`) sobre:

- **fileKey:** `ewuKvVTOtUpJRLLScROKog`
- **Frame Home desktop:** node `869:4391`
- Busca dentro de ese mismo archivo el frame mobile equivalente (probablemente nombrado "Home – Mobile" o similar cerca del desktop); no asumas que es el node `35:219` viejo, ese pertenecía a una versión anterior del frame.

Extrae de ahí: copy real (hero, tagline, nombre de las 8 tarjetas de proyecto y sus tags/marcas — Lógika, Pulte Homes, Laika, Nequi, WiddyUp, etc.), assets (logos, iconos, imagen del retrato, pieza 3D del Octopus), y estructura de layout/espaciado tal como está en Figma. No inventes copy que no esté en el archivo — si falta algo, pregúntame antes de rellenar con lorem ipsum.

**Bug conocido a evitar:** la tarjeta "WiddyUp" en Figma tiene mal asignada la imagen de Pulte Homes. Si detectas esa inconsistencia al extraer el asset, avísame en vez de replicar el error en código.

## 2. Design tokens (ya definidos, no los cambies ni los reinventes)

```css
--color-primary: #123d6e;      /* navy — texto principal, header */
--color-accent: #fb1d61;       /* rosa/rojo — CTAs, highlight de texto */
--color-secondary: #00b7c2;    /* teal — títulos de sección */
--color-bg-alt: #f5f5f5;       /* fondo alterno de secciones */
--color-white: #ffffff;
--color-black: #000000;
--color-gray-100: #e4e4e5;
--color-gray-200: #d2d1d4;
--color-gray-600: #656268;
--color-gray-900: #28272a;

--font-family: 'DM Sans', sans-serif; /* única familia, todas las escalas */

--shadow-large: 0 2px 3px rgba(0,0,0,0.3), 0 6px 10px 4px rgba(0,0,0,0.15);
```

Confirma con `get_variable_defs` si hay escalas tipográficas adicionales (Display/Headline/Title/Body/Label) y tradúcelas a variables CSS (`--font-size-display`, etc.) en vez de tamaños sueltos.

## 3. Estructura de archivos (no crear otras carpetas sin avisar)

```
/index.html
/css/
  styles.css       ← todo el CSS del home
/js/
  main.js          ← interacciones (scroll carrusel 3D, hover cards, nav)
  i18n.js           ← diccionario ES/EN + lógica del toggle
/assets/
  images/          ← retrato, logos de marcas, thumbnails de proyectos
  icons/           ← iconos sueltos (play, favorito, flechas, etc.)
```

## 4. Secciones del Home (en este orden)

1. **Header** — logo/nombre, nav simple, toggle ES/EN visible (botón real, no dropdown escondido), CTA de contacto.
2. **Hero** — nombre, rol ("Product Designer"), diferenciador (3D/motion), retrato con la pieza 3D del Octopus flotando al lado (no el anillo punteado genérico — ya se descartó ese patrón en Figma). Contraste tipográfico: titular grande, párrafo secundario más chico (ya ajustado en Figma a ~20px/30px line-height vs 64px del titular).
3. **My projects** — grid de cards (8 proyectos). Cada card es un `<a>` clickeable envolviendo toda la tarjeta (no solo el título), con:
   - Badge de logo de marca centrado (no la marca ocupando todo el fondo de la card).
   - Tags unificados con el mismo estilo de pill (fondo Primary/50%, texto navy) — no un color distinto por marca.
   - `href` apuntando a `proyectos/[slug].html` (ej. `proyectos/widdyup.html`) aunque esas páginas no existan todavía — es intencional, se construyen en la siguiente fase. Usa slugs en minúscula-guion basados en el nombre del proyecto.
4. **Brands I have worked with** — logos alineados por tamaño/baseline consistente, monocromáticos (Itaú no debe romper el patrón con fondo sólido de color — usa la versión monocroma o aplica el mismo tratamiento que el resto).
5. **Motion Design** — 6 swatches con fondo `--color-gray-900`, ícono de play centrado, texto "Preview pendiente" (no son videos reales todavía).
6. **Footer** — sin emoji. Debe incluir: email de contacto real, links a redes/portafolio externo si aplica, copyright con año dinámico vía JS (`new Date().getFullYear()`).

## 5. Requisitos no negociables

- **Mobile-first real:** escribe el CSS partiendo del layout mobile y agregando media queries hacia arriba, no al revés. Breakpoints sugeridos: 375px (mobile), 768px (tablet), 1200px (desktop). Verifica que ninguna card ni el carrusel de Motion Design/3D se corte en el borde en mobile — si hay scroll horizontal, debe tener fade + indicador visual en el borde, igual que se resolvió en el carrusel 3D del desktop.
- **Accesibilidad WCAG AA mínimo:** contraste de texto verificado contra los tokens de arriba, estados de foco visibles en todos los elementos interactivos (cards, botones, toggle de idioma), tamaños táctiles ≥44px en mobile.
- **Micro-interacciones con propósito, no decorativas:** hover en cards (lift sutil + `--shadow-large`), transición suave en el toggle ES/EN, estado hover/focus/active en botones y links. Nada de animación porque sí.
- **Bilingüe estructural:** todo el copy visible debe salir de un diccionario en `i18n.js` (objeto `{ es: {...}, en: {...} }`) y renderizarse vía `data-i18n="key"` en el HTML + función que reemplaza `textContent` al togglear. No hardcodear texto en español directamente en el HTML.
- **Sin frameworks ni build step.** HTML/CSS/JS puro, sin dependencias externas salvo la fuente DM Sans (Google Fonts) y, si hace falta, una librería ligera para el carrusel 3D (avísame antes de agregar cualquier dependencia externa).

## 6. Qué NO tocar en esta fase

- No construyas las páginas de detalle de proyecto (`proyectos/*.html`) — solo los links desde las cards.
- No inventes paleta de colores ni tipografía alternativa — usa exactamente los tokens de la sección 2.
- No agregues secciones que no estén en el Figma (869:4391).

## 7. Al terminar

Corre un check rápido de: contraste de color (los tokens contra fondo blanco y contra `--color-gray-900`), que el toggle ES/EN cambie todo el copy visible, y que el grid de cards no se rompa en 375px/768px/1200px. Repórtame cualquier gap entre lo que extrajiste de Figma y lo que terminaste implementando.

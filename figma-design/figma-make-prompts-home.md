# Prompts Figma Make — Home (Desktop, node 6:3)

Pega uno a la vez, en este orden. Cada uno toca solo la sección indicada — no dejes que Figma Make reescriba el resto de la página.

---

## 1. Header — toggle de idioma
**Tocar:** Frame "Frame 2" (id 15:13), a la derecha del botón "Mobile Portfolio".
**No tocar:** logo, nav (About me / My projects / Contact), estilos de "Botones".

> Agrega un switch de idioma ES/EN en el header, a la izquierda del botón "Mobile Portfolio". Debe verse como un toggle de dos estados (texto "ES" y "EN" lado a lado, el activo en Primary #123d6e sobre fondo blanco, el inactivo en Neutral/Gray/600), altura 40px para alinear con el botón contiguo, radio de esquina consistente con el resto de los botones del sistema. Sin íconos de bandera.

---

## 2. Tarjetas de proyecto — unificar sistema
**Tocar:** grid dentro de "Section 1 Desktop" (id 70:5437), ambas filas ("My favorites" y "Other projects").
**No tocar:** el copy de cada proyecto, los logos de marca.

> Rediseña las tarjetas de proyecto para que compartan un mismo fondo (Neutral/White o Alternate 1 - Off White #f5f5f5) y un mismo borde/sombra (usa el efecto "Large" ya definido en las variables), en vez de que cada tarjeta tenga su propio color de fondo de marca. El logo de cada proyecto va en un contenedor de tamaño fijo (ej. 64x64) centrado, con fondo neutro, para que Hyatt, Logika, Laika, Nequi, etc. queden visualmente al mismo nivel. Elimina el ícono de corazón/favorito de cada tarjeta — no cumple función para un visitante externo. Unifica el estilo de los tags (Design System, Case Study, Figma, UX/UI Design, etc.) a un solo estilo de pill: fondo Primary/50 #dfe5ec, texto Primary #123d6e, sin variar colores por tarjeta.

---

## 3. "Brands I have worked with" — alineación
**Tocar:** Frame "Section 2" (id 70:6982).
**No tocar:** el texto del título, los logos en sí (son reales, no reemplazar).

> Alinea los 6 logos de marca (Hyatt, Pulte, Laika, Grupo Coomeva, SuperGIROS, Itaú) a una misma altura visual (contenedor de 40px de alto, ancho variable, centrados verticalmente) y a un espaciado horizontal uniforme. Aplica el mismo tratamiento visual a todos — si Itaú es el único con fondo de color sólido, quítale el fondo y déjalo igual de monocromático/neutro que los demás para que la fila se lea como un solo bloque, no como logos sueltos.

---

## 4. Motion Design — reemplazar swatches planos
**Tocar:** sección "Motion Design" (dentro de "Section 1 Desktop", debajo de "3D Design").
**No tocar:** la sección "3D Design" de arriba (esas sí son imágenes reales).

> Reemplaza los recuadros de color plano de la sección Motion Design por thumbnails con un ícono de "play" superpuesto (círculo semi-transparente + triángulo blanco centrado, estilo YouTube/Dribbble), dando a entender que cada recuadro abre un preview de una micro-interacción o animación. Usa un placeholder de fondo oscuro (#28272A) para los recuadros donde aún no haya asset real, marcado explícitamente con el texto "Preview pendiente" en overlay — esto es temporal hasta que Pipe suba los GIFs/videos reales.

---

## 5. Footer — quitar tono informal, agregar contacto real
**Tocar:** Frame "Section 3" (id 94:7739).
**No tocar:** nada del contenido de arriba.

> Rediseña el footer: quita el emoji 🚀 del texto "Let's work together!" y déjalo solo como titular en Headline/Bold/Medium. Debajo, agrega una fila con: botón primario "Escríbeme" (mismo estilo del CTA "Let's see my projects"), y 3 íconos de contacto (email, LinkedIn, Instagram @windowtodd.design) alineados horizontalmente. Cierra con una línea de copyright pequeña en Neutral/Gray/600 ("© 2026 Andrés Betancourt").

---

### Nota para la versión mobile (node 35:219)
No corras estos prompts todavía sobre el frame mobile — primero valida los 5 cambios en desktop. Cuando estén aprobados, aviso los ajustes puntuales de mobile (el corte de tarjetas y swatches en los bordes es un problema de layout, no de contenido, y se resuelve mejor cuando ya sepamos cómo quedó el sistema de tarjetas en desktop).

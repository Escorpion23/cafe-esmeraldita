# 📋 Plan de Trabajo — Página Web "Café Esmeraldita"

## 🎯 Objetivo del Proyecto

Crear una página web atractiva, moderna y funcional para el producto **Café Esmeraldita**, destacando sus dos principales diferenciadores:

1. ⭐ **Es un café cultivado en Tello, Huila (Colombia)** — origen y terruño único.
2. ⭐ **Está elaborado por mujeres campesinas** — empoderamiento, tradición y trabajo artesanal femenino.

El sitio debe comunicar la calidad, el origen, la historia y el valor humano del café, y permitir a los visitantes conocer el producto, su proceso y cómo adquirirlo.

---

## 🧱 Stack Tecnológico

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura y contenido semántico de la página |
| **CSS3** | Estilos, diseño responsive, animaciones y paleta de colores |
| **JavaScript (Vanilla JS)** | Interactividad: menú móvil, carrusel, formularios, animaciones al hacer scroll |

> No se usan frameworks ni librerías externas para mantener el proyecto ligero y fácil de mantener.

---

## 📁 Estructura de Carpetas Propuesta

```
cafe-esmeraldita/
│
├── index.html              → Página principal (landing)
├── css/
│   └── styles.css          → Hoja de estilos principal
├── js/
│   └── main.js             → Lógica de interactividad
├── img/
│   ├── hero.jpg            → Imagen principal (cafetal / taza)
│   ├── logo.png            → Logo de la marca
│   ├── tello.jpg           → Paisaje de Tello, Huila
│   ├── mujeres.jpg         → Mujeres campesinas trabajando el café
│   ├── proceso-*.jpg       → Fotos del proceso de cultivo
│   └── producto-*.jpg      → Fotos del producto final
└── README.md               → Documentación del proyecto
```

---

## 🎨 Identidad Visual (Propuesta)

### 🟤 Paleta de colores SERIA (extraída de las imágenes reales)

Se ejecutó el script `extraer_colores.py` sobre las 5 imágenes del café en `img/`, y se obtuvieron los siguientes colores dominantes:

| Imagen | Colores dominantes |
|--------|-------------------|
| **Imagen 1** | `#EFDBCA` (beige), `#553F19` (marrón oscuro), `#00192C` (azul marino), `#05506B` (azul petróleo) |
| **Imagen 2** | `#FEFEFE` (blanco), `#9F0015` (rojo oscuro), `#3E551C` (verde oliva), `#FDE9BE` (crema) |
| **Imagen 3** | `#FBC18C` (naranja claro), `#974920` (marrón anaranjado), `#3B0F05` (marrón muy oscuro), `#783211` (marrón rojizo) |
| **Imagen 4** | `#F2D5B5` (beige), `#EEE8E3` (gris claro), `#53250B` (marrón oscuro), `#603614` (marrón) |
| **Imagen 5** | `#2E370B` (verde oscuro), `#FDF4E4` (blanco crema), `#4F5114` (verde oliva), `#8C8540` (verde oliva claro) |

**Paleta seria y sobria** derivada de estas imágenes (para un diseño simple, elegante y profesional):

| Color | Código HEX | Uso |
|-------|-----------|-----|
| **Café muy oscuro (grano tostado)** | `#3B0F05` | Fondos, textos principales, footer |
| **Café oscuro** | `#53250B` | Títulos, secciones oscuras |
| **Café medio** | `#603614` | Botones secundarios, detalles |
| **Café rojizo** | `#783211` | Acentos, hover |
| **Café anaranjado** | `#974920` | Detalles cálidos |
| **Crema (espuma de leche)** | `#EFDBCA` | Fondo principal de la página |
| **Blanco crema** | `#FDF4E4` | Fondo de secciones alternas |
| **Beige** | `#F2D5B5` | Tarjetas, bordes |
| **Verde oliva oscuro** | `#2E370B` | Sección de origen/cafetal |
| **Verde oliva** | `#3E551C` | Acentos de naturaleza |
| **Verde oliva claro** | `#4F5114` | Detalles de hojas |
| **Dorado** | `#C9A227` | Detalles premium, sellos |

### 🎨 Resumen de la Paleta SERIA (CSS)

```css
:root {
  /* Tonos de café (extraídos de las imágenes) */
  --cafe-oscuro: #3B0F05;
  --cafe-muy-oscuro: #280903;
  --cafe-medio: #603614;
  --cafe-rojizo: #783211;
  --cafe-anaranjado: #974920;
  --cafe-claro: #8C8540;

  /* Crema y beige (fondos) */
  --crema: #EFDBCA;
  --blanco-crema: #FDF4E4;
  --beige: #F2D5B5;

  /* Verde oliva (hojas/plantas) */
  --verde-oscuro: #2E370B;
  --verde-oliva: #3E551C;
  --verde-claro: #4F5114;

  /* Acentos */
  --dorado: #C9A227;
  --terracota: #B5651D;
}
```

### 🧭 Cómo usar los colores serios por sección

- **Hero / Portada:** fondo café muy oscuro `#3B0F05` con texto crema y botón dorado.
- **Nuestro Café:** fondo crema `#EFDBCA`, tarjetas beige `#F2D5B5`.
- **Origen (Tello, Huila):** verde oliva oscuro `#2E370B` como acento, fotos del paisaje.
- **Mujeres Campesinas:** café rojizo `#783211` y dorado `#C9A227` para transmitir calidez y empoderamiento.
- **Proceso:** línea de tiempo con café medio `#603614` y dorado para los pasos.
- **Galería:** fondo blanco crema `#FDF4E4` para que las fotos resalten.
- **Contacto:** botones café medio `#603614` y acentos dorados.
- **Footer:** café muy oscuro `#3B0F05` con texto crema.

### ✨ Consejos de contraste y accesibilidad

- Texto sobre fondo café oscuro → usar crema o blanco.
- Texto sobre fondo crema → usar café oscuro `#3B0F05`.
- Botones CTA → café medio `#603614` con texto blanco.
- Evitar usar verde oliva sobre verde oliva (bajo contraste).
- **Tipografía:** fuentes legibles y cálidas (ej. `Poppins` para títulos, `Lato` para texto).
- **Estilo:** limpio, natural, sobrio y profesional, con fotografía real del café, la región y las mujeres campesinas.

---

### 🖼️ Imágenes reales a usar en la página

Las imágenes del archivo `img/` deben reemplazar los placeholders de `picsum.photos`:

| Sección | Imagen a usar |
|---------|---------------|
| **Hero / Portada** | `img/Imagen 3 cafe.jpeg` (tonos de café tostado) |
| **Nuestro Café (producto)** | `img/Imagen 4 cafe.jpeg` |
| **Origen (Tello, Huila)** | `img/Imagen 5 cafe.jpeg` (verdes de cafetal) |
| **Mujeres Campesinas** | `img/Imagen 2 cafe.jpeg` |
| **Galería (carrusel)** | Todas las 5 imágenes |
| **Testimonios / fondo** | `img/Imagen 1 cafe.jpeg` |

> ⚠️ **Nota:** Las rutas deben ser relativas (`img/Imagen 3 cafe.jpeg`) para que funcionen en GitHub Pages. Los nombres de archivo contienen espacios, por lo que en HTML deben escaparse como `img/Imagen%203%20cafe.jpeg`.

### 🟤 Colores Principales (tonos de café)

| Color | Código HEX | Uso |
|-------|-----------|-----|
| **Café oscuro (grano tostado)** | `#3E2723` | Fondos, textos principales, footer |
| **Café medio (tueste)** | `#6F4E37` | Títulos, botones secundarios |
| **Café claro (latte)** | `#A1887F` | Bordes, detalles, fondos de tarjetas |
| **Crema (espuma de leche)** | `#F5EFE6` | Fondo principal de la página |
| **Blanco crema** | `#FFF8F0` | Fondo de secciones alternas |

### 🟢 Verde Esmeralda (por el nombre "Esmeraldita")

| Color | Código HEX | Uso |
|-------|-----------|-----|
| **Verde esmeralda** | `#0F9D58` | Botones CTA, acentos, enlaces |
| **Verde esmeralda oscuro** | `#0B7A45` | Hover de botones, detalles |
| **Verde hoja (cafetal)** | `#2E7D32` | Sección de origen y cafetal |

### 🟠 Acentos Cálidos (trabajo de las mujeres campesinas)

| Color | Código HEX | Uso |
|-------|-----------|-----|
| **Ámbar / caramelo** | `#D2691E` | Destacar cifras, badges, iconos |
| **Dorado** | `#C9A227` | Detalles premium, premios, sellos |
| **Terracota** | `#B5651D` | Sección de mujeres campesinas |

### 🎨 Resumen de la Paleta (CSS)

```css
:root {
  /* Tonos de café */
  --cafe-oscuro: #3E2723;
  --cafe-medio: #6F4E37;
  --cafe-claro: #A1887F;
  --crema: #F5EFE6;
  --blanco-crema: #FFF8F0;

  /* Verde esmeralda */
  --esmeralda: #0F9D58;
  --esmeralda-oscuro: #0B7A45;
  --verde-hoja: #2E7D32;

  /* Acentos cálidos */
  --ambar: #D2691E;
  --dorado: #C9A227;
  --terracota: #B5651D;
}
```

### 🧭 Cómo usar los colores por sección

- **Hero / Portada:** fondo café oscuro `#3E2723` con texto crema y botón verde esmeralda.
- **Nuestro Café:** fondo crema `#F5EFE6`, tarjetas café claro.
- **Origen (Tello, Huila):** verde hoja `#2E7D32` como acento, fotos del paisaje.
- **Mujeres Campesinas:** terracota `#B5651D` y dorado `#C9A227` para transmitir calidez y empoderamiento.
- **Proceso:** línea de tiempo con café medio y ámbar para los pasos.
- **Galería:** fondo blanco crema para que las fotos resalten.
- **Contacto:** botones verdes esmeralda y acentos ámbar.
- **Footer:** café oscuro `#3E2723` con texto crema.

### ✨ Consejos de contraste y accesibilidad

- Texto sobre fondo café oscuro → usar crema o blanco.
- Texto sobre fondo crema → usar café oscuro `#3E2723`.
- Botones CTA → verde esmeralda con texto blanco.
- Evitar usar verde esmeralda sobre verde hoja (bajo contraste).
- **Tipografía:** fuentes legibles y cálidas (ej. `Poppins` para títulos, `Lato` para texto).
- **Estilo:** limpio, natural, con fotografía real del café, la región y las mujeres campesinas.

---

## 🎨 Guía de Diseño UI/UX — Línea Gráfica Oficial (Café Emeraldita)

> **Nota:** Esta es la **línea gráfica definitiva y oficial** de la marca, basada en la identidad visual del logotipo (oso amigable con taza de café, montañas, flores blancas y frutos rojos). **Prevalece sobre las paletas anteriores** de esta sección. Usar estos códigos exactos para mantener coherencia visual.

### 🎯 Concepto y Dirección de Arte

**Frase rectora:** *"Rústico, campestre y artesanal, con la sobriedad de un producto premium."*

| Atributo | Directriz |
|----------|-----------|
| **Tono emocional** | Acogedor, cálido, confiable, de origen |
| **Estilo** | Orgánico, artesanal, con texturas naturales |
| **Calidad percibida** | Alta, profesional, de especialidad |
| **Referentes visuales** | Costal de yute, papel kraft, montañas al atardecer, granos tostados |

**Regla de oro:** Cada pieza debe sentirse *hecha a mano*, pero con acabado impecable. Nada de brillos artificiales ni degradados digitales fríos.

### 🟤 Paleta de Colores Oficial (Códigos Exactos)

#### Tonos Base / Fondo
| Nombre | Hex | Uso |
|--------|-----|-----|
| **Crema Suave** | `#F7F4EF` | Fondo principal de la página |
| **Arena / Kraft** | `#E6D7C3` | Secciones alternas, tarjetas, texturas de yute |

#### Texto y Contraste
| Nombre | Hex | Uso |
|--------|-----|-----|
| **Espresso Profundo** | `#2C1D11` | Texto principal, títulos secundarios, máxima legibilidad |

#### Tonos de Acento
| Nombre | Hex | Uso |
|--------|-----|-----|
| **Azul Petróleo** | `#1B4965` | Fondos de títulos, botones, CTA, enlaces |
| **Rojo Cereza / Vino** | `#A62B2B` | Frutos maduros, acentos, badges, detalles |

#### Tonos Naturales
| Nombre | Hex | Uso |
|--------|-----|-----|
| **Verde Hoja / Pino** | `#2D5A27` | Sellos ecológicos, "100% Orgánico", iconos de naturaleza |

#### Escala de apoyo (derivada)
| Nombre | Hex | Uso |
|--------|-----|-----|
| **Café Medio** | `#6B4A2F` | Bordes suaves, sombras, separadores |
| **Crema Oscura** | `#D9C7AE` | Hover de tarjetas, fondos de badges |
| **Blanco Cálido** | `#FFFFFF` | Texto sobre fondos oscuros (azul/rojo) |

> **Regla de contraste:** Texto espresso (`#2C1D11`) siempre sobre fondos claros. Texto blanco solo sobre azul petróleo, rojo vino o verde pino. Cumple WCAG AA.

#### Resumen de la Paleta Oficial (CSS)

```css
:root {
  /* Tonos base / fondo */
  --crema-suave: #F7F4EF;
  --arena-kraft: #E6D7C3;

  /* Texto y contraste */
  --espresso: #2C1D11;

  /* Acentos */
  --azul-petroleo: #1B4965;
  --rojo-cereza: #A62B2B;

  /* Naturales */
  --verde-pino: #2D5A27;

  /* Escala de apoyo */
  --cafe-medio: #6B4A2F;
  --crema-oscura: #D9C7AE;
  --blanco-calido: #FFFFFF;
}
```

### 🔤 Tipografía Oficial

#### Títulos (Display / Palo Seco Grueso)
- **Estilo:** Sans-serif gruesa, contundente, con impacto de sello o brochazo artesanal.
- **Sugerencias:** `Archivo Black`, `Anton`, `Bebas Neue`, `Montserrat ExtraBold`.
- **Uso:** H1 del hero, títulos de sección, nombres de producto.
- **Tratamiento:** MAYÚSCULAS, letter-spacing ligero (0.5–1px), peso 800–900.

#### Texto y Descripciones (Body)
- **Estilo:** Moderna, limpia, altamente legible.
- **Sugerencias:** `Poppins`, `Inter`.
- **Uso:** Párrafos, subtítulos, navegación, botones, formularios.
- **Pesos:** Regular (400) para cuerpo, Medium (500) y SemiBold (600) para énfasis.

#### Jerarquía tipográfica sugerida
| Elemento | Fuente | Peso | Tamaño (desktop) |
|----------|--------|------|------------------|
| H1 Hero | Display | 900 | 56–72px |
| H2 Sección | Display | 800 | 40–48px |
| H3 Tarjeta | Display | 700 | 24–28px |
| Body | Poppins/Inter | 400 | 16–18px |
| Caption / Badge | Poppins | 600 | 12–14px |

### 🖼️ Elementos Gráficos Clave

#### Logotipo (Oso + Café)
- **Formato:** Circular, sello.
- **Contenido:** Oso amigable con taza humeante, montañas, flores blancas de café y frutos rojos.
- **Uso:** Header (esquina superior), footer, favicon, sello de producto.
- **Regla:** Mantener siempre sobre fondo claro o dentro de un círculo de color sólido. No distorsionar ni cambiar colores.

#### Insignias / Sellos Circulares
| Insignia | Colores | Ubicación |
|----------|---------|-----------|
| **"Hecho con amor por mujeres campesinas"** | Verde pino `#2D5A27` + crema | Hero, sección beneficios, footer |
| **"100% Orgánico"** | Verde pino `#2D5A27` + crema | Vitrina de producto, junto a cada empaque |

- **Formato:** Sello circular con borde doble, texto curvado (opcional) o recto.
- **Efecto:** Ligera rotación (-8° a -12°) para sensación artesanal.

#### Paisaje del Huila al Atardecer
- **Uso:** Fondo del Hero Banner y separadores de sección.
- **Paleta del paisaje:** Tonos cálidos (naranja/ámbar del atardecer) que armonicen con la crema y el café, con siluetas de montañas en capas.
- **Tratamiento:** Overlay oscuro (espresso `#2C1D11` al 40–60%) sobre el paisaje para garantizar legibilidad del texto.

#### Vitrina de Producto (Empaque Doypack)
- **Elementos:** Empaque *Doypack* con ilustración del oso, granos tostados, notas de sabor.
- **Notas de sabor a destacar:** *"Mezcla de Altura"*, *"Café Emeraldita"*.
- **Presentación:** Tarjetas de producto con foto del empaque, nombre, descripción de notas, precio y botón de compra/WhatsApp.

### 🧱 Estructura Visual (Wireframe)

#### Hero Banner
```
┌─────────────────────────────────────────────┐
│  [Logo Oso]        [Nav: Inicio|Producto|Contacto] │
│                                             │
│   PAISAJE DEL HUILA AL ATARDECER (fondo)    │
│   ─────────────────────────────────────     │
│   H1: Café Artesanal del Huila              │
│   Subtítulo: Origen campesino, sabor de altura│
│   [Botón WhatsApp 312 472 4794]             │
│   [Sello: Hecho con amor por mujeres campesinas]│
│                                             │
└─────────────────────────────────────────────┘
```

#### Sección de Beneficios (3 Tarjetas)
```
┌──────────────┬──────────────┬──────────────┐
│  [Icono]     │  [Icono]     │  [Icono]     │
│  Cosecha     │  De las      │  Apoya a     │
│  Selecta     │  Montañas    │  Mujeres     │
│              │  del Huila   │  Campesinas  │
└──────────────┴──────────────┴──────────────┘
```
- **Fondo:** Crema `#F7F4EF` o arena `#E6D7C3` alternado.
- **Iconos:** Línea fina, color verde pino o café medio.

#### Vitrina de Producto
```
┌─────────────────────────────────────────────┐
│  H2: Nuestro Café                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Empaque  │  │ Empaque  │  │ Empaque  │  │
│  │ Doypack  │  │ Doypack  │  │ Doypack  │  │
│  │ + Granos │  │ + Granos │  │ + Granos │  │
│  │ Notas    │  │ Notas    │  │ Notas    │  │
│  │ [Comprar]│  │ [Comprar]│  │ [Comprar]│  │
│  └──────────┘  └──────────┘  └──────────┘  │
│  [Sello: 100% Orgánico]                    │
└─────────────────────────────────────────────┘
```

#### Sección de Contacto
```
┌─────────────────────────────────────────────┐
│  H2: Contáctanos                            │
│  Ubicación: Conjunto Morichal               │
│  Teléfono: 312 472 4794                     │
│  [Botón WhatsApp]                           │
│  [Mapa / Ubicación]                         │
└─────────────────────────────────────────────┘
```

#### Botón Flotante de WhatsApp
- **Posición:** Esquina inferior derecha.
- **Color:** Verde WhatsApp (`#25D366`) o azul petróleo `#1B4965` con icono de WhatsApp.
- **Siempre visible** en todas las secciones.

### 🎛️ Componentes y Estados de Interacción

| Componente | Normal | Hover | Activo |
|------------|--------|-------|--------|
| **Botón primario** | Azul petróleo `#1B4965`, texto blanco | Oscurecer a `#14384E` | Sombra reducida |
| **Botón WhatsApp** | Verde `#25D366` | Verde más oscuro | Presionado |
| **Tarjeta producto** | Fondo crema, borde sutil | Elevación + sombra, borde café | Seleccionada |
| **Enlaces** | Café espresso `#2C1D11` | Rojo vino `#A62B2B` | Subrayado |

### 📐 Reglas de Composición y Espaciado

- **Grid:** 12 columnas, gutter de 24px, margen lateral 80px (desktop).
- **Radio de esquinas:** 12–16px en tarjetas (orgánico, no excesivamente redondeado).
- **Sombras:** Suaves, cálidas (`rgba(44,29,17,0.12)`), nunca negras puras.
- **Texturas:** Papel kraft / yute aplicadas como fondo sutil en secciones alternas.
- **Respiración:** Espaciado vertical generoso (80–120px entre secciones).

### ✅ Checklist de Coherencia Visual

- [ ] Logotipo del oso siempre sobre fondo claro o círculo sólido.
- [ ] Texto espresso sobre fondos claros; blanco sobre azul/rojo/verde.
- [ ] Sellos circulares con rotación artesanal ligera.
- [ ] Paisaje del Huila con overlay oscuro para legibilidad.
- [ ] Botón de WhatsApp visible en todo momento.
- [ ] Notas de sabor ("Mezcla de Altura", "Café Emeraldita") visibles en la vitrina.
- [ ] Ubicación (Conjunto Morichal) y teléfono (312 472 4794) en contacto y footer.

---

## 🖼️ Descripción de las Piezas Visuales de la Marca

> **Nota:** Esta sección documenta la descripción exacta de cada pieza gráfica que compone la identidad visual de la marca, basada en los archivos de imagen del proyecto. Sirve como referencia para el equipo de desarrollo al momento de integrar los assets en la página.

### 1. `logo.jpeg` — Logotipo Principal

- Es un **sello circular** con un fondo que muestra un paisaje de las **montañas del Huila al atardecer**.
- En la parte superior lleva el texto **"CAFÉ ARTESANAL DEL HUILA"** sobre bloques texturizados en **verde y rojo**, acompañados de una **rama con cerezas de café**.
- El elemento más destacado es un **tierno oso amigable** que sostiene una **taza azul de café**, rodeado de vegetación y **flores blancas de cafeto**.

**Uso en la página:** Header (esquina superior), footer, favicon, sello de producto.

---

### 2. `imagen 4 cafe.jpeg` — Banner / Pieza Principal

- Formato **horizontal** con un fondo de **paisaje montañoso al atardecer** y una **mesa rústica de madera** con granos de café esparcidos, ramas verdes y una flor blanca.
- En el centro superior muestra el título principal **"CAFÉ ARTESANAL DEL HUILA"** con tipografía gruesa.
- Muestra el **empaque (doypack)** de color **kraft/beige** con la ilustración del oso y la marca **"Pedaleando sin parar"**.
- Incluye el **sello circular** a la derecha (**"Hecho con amor por mujeres campesinas"**) y **tres viñetas** a la izquierda (**"Cosecha selecta"**, **"De las montañas del Huila"**, **"Apoya a mujeres campesinas"**).

**Uso en la página:** Fondo del Hero Banner y separadores de sección.

---

### 3. `Imagen 1 cafe_2.jpeg` y `Imagen 3_2.jpeg` — Afiches Publicitarios

- Formato **vertical tipo afiche** que anuncia **"VENTA AQUÍ CAFÉ ARTESANAL DEL HUILA - 100% Orgánico"**.
- Integran de forma prominente el **empaque de café**, una **taza de cerámica rústica** con el logotipo y un **tazón con granos tostados**.
- Una de las variantes incluye datos de **ubicación física** (**"Conjunto Morichal Torre 9, Apto 104"**).
- Cierran en la parte inferior con una **barra oscura corporativa** que destaca la llamada a la acción: **"PÍDELO POR WHATSAPP"** junto al icono verde y el número **312 472 4794**.

**Uso en la página:** Material promocional, sección de contacto y llamadas a la acción.

---

### 4. `Imagen 2 cafe_2.jpeg` — Fotografía de Detalle

- **Plano cercano (close-up)** sobre una superficie de **madera rústica** cubierta de ramas con **frutos rojos** y granos maduros.
- Muestra el empaque etiquetado como **"Café Emeraldita"** (**Café de origen del Huila, 100% Artesanal, 250 g**) junto a una **taza blanca con café recién hecho** y su **capa de crema de espresso**.

**Uso en la página:** Vitrina de producto, sección "Nuestro Café" y galería.

---

## 🧩 Secciones de la Página (index.html)

1. **Barra de navegación (Navbar)**
   - Logo + menú (Inicio, Nuestro Café, Origen, Mujeres, Proceso, Galería, Contacto)
   - Menú hamburguesa para móviles (JS)

2. **Hero / Portada**
   - Imagen de fondo impactante del cafetal
   - Título principal: "Café Esmeraldita"
   - Subtítulo: "Cultivado en Tello, Huila · Elaborado por mujeres campesinas"
   - Botón de llamada a la acción (CTA): "Conócenos"

3. **Nuestro Café**
   - Descripción del producto
   - Características destacadas (aroma, sabor, tueste)

4. **Origen: Tello, Huila** ⭐ (sección clave)
   - Por qué es especial: altitud, clima, suelo volcánico
   - Datos de la región
   - Mapa o imagen de Tello

5. **Elaborado por Mujeres Campesinas** ⭐ (sección clave)
   - Historia y rostro de las mujeres que cultivan y elaboran el café
   - Empoderamiento femenino y trabajo artesanal
   - Impacto social en la comunidad de Tello
   - Fotografías de las mujeres en su labor

6. **Proceso de Cultivo**
   - Pasos: siembra → cosecha → beneficio → tostado → empaque
   - Línea de tiempo visual

7. **Galería**
   - Carrusel de imágenes (JS)
   - Incluir fotos de las mujeres campesinas y del cafetal

8. **Testimonios / Reseñas**
   - Opiniones de clientes

9. **Contacto / Pedidos**
   - Formulario de contacto (validación con JS)
   - Datos de contacto y redes sociales

10. **Footer**
    - Información legal, créditos, enlaces

---

## ⚙️ Funcionalidades JavaScript (main.js)

- [ ] Menú hamburguesa responsive (abrir/cerrar)
- [ ] Navegación suave (smooth scroll) entre secciones
- [ ] Animaciones de aparición al hacer scroll (Intersection Observer)
- [ ] Carrusel / slider de la galería
- [ ] Validación del formulario de contacto
- [ ] Barra de navegación que cambia al hacer scroll (efecto sticky)
- [ ] Contador animado de estadísticas (ej. hectáreas, tazas servidas, mujeres productoras)

---

## 🗓️ Fases del Trabajo (Cronograma)

### Fase 1 — Preparación (Día 1) ✅ COMPLETADA
> 📄 **Documento de referencia:** `docs/FASE_1_PREPARACION.md` (copywriting final, mapeo de imágenes, identidad visual consolidada)

- [x] Definir textos y contenido final (copywriting), incluyendo la historia de las mujeres campesinas
- [x] Recopilar fotografías reales del café, de Tello, Huila y de las mujeres campesinas (en `img/`)
- [x] Crear o conseguir el logo de la marca (`img/Logo.jpeg`)
- [x] Definir paleta de colores y tipografías definitivas (línea gráfica oficial)

### Fase 2 — Estructura HTML (Día 2) ✅ COMPLETADA
- [x] Crear `index.html` con todas las secciones (ya existe)
- [x] Estructura semántica correcta (header, main, section, footer) (ya existe)
- [x] Insertar textos e imágenes provisionales → **COMPLETADO:** se actualizó con textos finales (Café Emeraldita / Café Artesanal del Huila), rutas de imágenes reales (`img/logo.jpeg`, `img/hero.jpeg`, `img/producto.jpeg`, `img/origen.jpeg`, `img/mujeres.jpeg`), sellos ("Hecho con amor por mujeres campesinas", "100% Orgánico"), botón flotante de WhatsApp y datos de contacto reales (312 472 4794, Conjunto Morichal)
- [x] Renombrar imágenes sin espacios → **COMPLETADO:** los archivos `img/Imagen 1 cafe.jpeg`, `img/Imagen 2 cafe.jpeg`, `img/Imagen 3.jpeg` e `img/imagen 4 cafe.jpeg` fueron renombrados a `img/producto.jpeg`, `img/origen.jpeg`, `img/hero.jpeg` e `img/mujeres.jpeg` respectivamente. El archivo vacío `img/.jpeg` fue eliminado.

### Fase 3 — Estilos CSS (Día 3-4) ✅ COMPLETADA
- [x] Crear `css/styles.css` (ya existe)
- [x] Diseño responsive (mobile-first) (ya implementado)
- [x] Aplicar paleta de colores y tipografías → **COMPLETADO:** el CSS ya usa la línea gráfica oficial (crema `#F7F4EF`, espresso `#2C1D11`, azul petróleo `#1B4965`, rojo vino `#A62B2B`, verde pino `#2D5A27`) y las tipografías `Archivo Black` (títulos) y `Poppins` (texto)
- [x] Estilizar todas las secciones y componentes (ya implementado)

### Fase 4 — Interactividad JS (Día 5) ✅ COMPLETADA
- [x] Crear `js/main.js` → **COMPLETADO:** se creó el archivo con todas las funcionalidades
- [x] Implementar todas las funcionalidades listadas arriba → **COMPLETADO:** menú hamburguesa responsive, navegación suave, animaciones de aparición al hacer scroll (Intersection Observer), carrusel de la galería con autoplay, validación del formulario de contacto, barra de navegación sticky al hacer scroll y contador animado de estadísticas
- [x] Probar en distintos tamaños de pantalla → **COMPLETADO:** se revisaron y ajustaron los media queries (992px, 768px, 480px) para imágenes, tipografías, botones y elementos en tablet y móvil

### Fase 5 — Pruebas y Pulido (Día 6)
- [ ] Revisar compatibilidad en navegadores
- [ ] Optimizar imágenes (peso y formato)
- [ ] Corregir detalles de diseño y accesibilidad
- [ ] Validar formularios y enlaces

### Fase 6 — Entrega (Día 7)
- [ ] Revisión final del sitio completo
- [ ] Documentación en `README.md`
- [ ] Entrega del proyecto

---

## ✅ Criterios de Éxito

- [ ] La página carga rápido y se ve bien en móvil y escritorio
- [ ] El origen "Tello, Huila" queda claramente destacado
- [ ] El valor "elaborado por mujeres campesinas" queda claramente destacado
- [ ] Todas las secciones funcionan correctamente
- [ ] El formulario valida datos y da retroalimentación
- [ ] El diseño refleja la identidad natural, premium y humana del café

---

## 🌐 Publicación en GitHub Pages

GitHub Pages es la forma más sencilla y gratuita de publicar una página web estática (HTML, CSS y JS), que es exactamente el stack de este proyecto.

### 📌 Requisitos previos

- Tener una cuenta en [GitHub](https://github.com)
- Tener [Git](https://git-scm.com/) instalado en tu computadora
- El proyecto listo con `index.html` en la raíz

### 🚀 Pasos para publicar

#### Paso 1 — Crear un repositorio en GitHub

1. Inicia sesión en GitHub y haz clic en **New repository**.
2. Ponle un nombre, por ejemplo: `cafe-esmeraldita`.
3. Déjalo **público** (necesario para GitHub Pages gratuito).
4. No marques la opción de inicializar con README (lo crearemos nosotros).

#### Paso 2 — Subir el proyecto con Git

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar el repositorio
git init

# Agregar todos los archivos
git add .

# Crear el primer commit
git commit -m "Primera versión de Café Esmeraldita"

# Conectar con el repositorio remoto (reemplaza USUARIO por tu usuario)
git remote add origin https://github.com/USUARIO/cafe-esmeraldita.git

# Subir los cambios
git branch -M main
git push -u origin main
```

#### Paso 3 — Activar GitHub Pages

1. Ve a tu repositorio en GitHub.
2. Entra en **Settings** (Configuración).
3. En el menú lateral, busca **Pages**.
4. En **Source** (Origen), selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Haz clic en **Save**.

#### Paso 4 — Obtener la URL

Después de unos minutos, tu sitio estará disponible en:

```text
https://USUARIO.github.io/cafe-esmeraldita/
```

> ⚠️ **Importante:** La URL usa el nombre de tu repositorio. Si el repositorio se llama `cafe-esmeraldita`, la URL será `https://USUARIO.github.io/cafe-esmeraldita/`.

### 🔧 Consideraciones importantes para GitHub Pages

#### Rutas relativas (clave)

Como la página se publica en una subcarpeta (`/cafe-esmeraldita/`), **todas las rutas deben ser relativas**, no absolutas.

```html
<!-- ❌ MAL: ruta absoluta (no funcionará en GitHub Pages) -->
<img src="/img/hero.jpg">

<!-- ✅ BIEN: ruta relativa (funciona en GitHub Pages) -->
<img src="img/hero.jpg">
```

#### Enlaces de CSS y JS

```html
<!-- ✅ Usar rutas relativas -->
<link rel="stylesheet" href="css/styles.css">
<script src="js/main.js"></script>
```

#### Actualizar el sitio

Cada vez que hagas cambios, súbelos con:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

GitHub Pages se actualiza automáticamente en unos minutos.

### 🎨 Dominio personalizado (opcional)

Si quieres un dominio propio (ej. `www.cafeesmeraldita.com`), puedes configurarlo en **Settings → Pages → Custom domain**.

---

## 🚀 Siguientes Pasos

1. Confirmar el contenido y las imágenes disponibles
2. Empezar con la **Fase 1** (preparación de textos y fotos)
3. Construir la estructura HTML

> 💡 **Nota:** Si deseas, puedo comenzar a crear directamente los archivos del proyecto (HTML, CSS y JS) siguiendo este plan.










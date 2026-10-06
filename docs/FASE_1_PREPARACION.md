# 📝 Fase 1 — Preparación (Copywriting, Imágenes e Identidad Visual)

> Documento de referencia para la construcción del sitio **Café Artesanal del Huila (Café Emeraldita)**.
> Esta fase consolida el contenido final, el mapeo de recursos reales y la identidad visual oficial que se aplicará en las fases siguientes (HTML, CSS, JS).

---

## 1. 🎯 Identidad y Naming

| Campo | Valor |
|-------|-------|
| **Nombre de marca** | Café Emeraldita |
| **Nombre comercial / descriptivo** | Café Artesanal del Huila |
| **Origen** | Tello, Huila (Colombia) |
| **Diferenciadores clave** | 1) Café de altura del Huila · 2) Elaborado por mujeres campesinas |
| **Notas de sabor** | "Mezcla de Altura", "Café Emeraldita" |
| **Contacto WhatsApp** | 312 472 4794 |
| **Ubicación física** | Conjunto Morichal |

---

## 2. ✍️ Copywriting Final (Textos Definitivos)

### 2.1 Hero Banner
- **Título (H1):** Café Artesanal del Huila
- **Marca destacada:** Café Emeraldita
- **Subtítulo:** Origen campesino, sabor de altura
- **Descripción:** Un café de especialidad cultivado en las montañas del Huila y elaborado con amor por mujeres campesinas. Cada taza cuenta la historia de nuestra tierra.
- **CTA principal:** Pedir por WhatsApp (312 472 4794)
- **CTA secundario:** Conócenos
- **Sello:** "Hecho con amor por mujeres campesinas"

### 2.2 Sección de Beneficios (3 tarjetas)
| Icono | Título | Texto |
|-------|--------|-------|
| 🌾 | Cosecha Selecta | Seleccionamos a mano, grano a grano, solo las cerezas maduras en su punto óptimo. |
| ⛰️ | De las Montañas del Huila | Cultivado a más de 1,500 metros de altitud en el terruño privilegiado de Tello, Huila. |
| 💪 | Apoya a Mujeres Campesinas | Cada compra impulsa el empoderamiento y el desarrollo de las mujeres de nuestra comunidad. |

### 2.3 Vitrina de Producto
- **Título de sección:** Nuestro Café
- **Producto principal:** Café Emeraldita — Mezcla de Altura
- **Descripción:** Café 100% arábica de especialidad, tostado artesanalmente en pequeños lotes para preservar sus notas dulces y afrutadas.
- **Características:**
  - ✅ 100% Café Arábica
  - ✅ Cultivado en Tello, Huila
  - ✅ Elaborado por mujeres campesinas
  - ✅ Tueste medio - medio alto
  - ✅ Notas: "Mezcla de Altura" / "Café Emeraldita"
- **CTA:** Pedir por WhatsApp
- **Sello:** "100% Orgánico"

### 2.4 Sección de Contacto
- **Título:** Contáctanos / Haz tu pedido
- **Ubicación:** Conjunto Morichal
- **Teléfono / WhatsApp:** 312 472 4794
- **CTA:** Botón directo de WhatsApp (flotante + sección)

---

## 3. 🖼️ Mapeo de Imágenes Reales

Las imágenes reales están en `img/`. Se recomienda **renombrarlas sin espacios** para rutas limpias en GitHub Pages.

| Sección | Archivo actual | Archivo sugerido (renombrado) |
|---------|----------------|-------------------------------|
| **Logo (header/footer)** | `img/Logo.jpeg` | `img/logo.jpeg` |
| **Hero / Portada** | `img/Imagen 3.jpeg` | `img/hero.jpeg` |
| **Nuestro Café (producto)** | `img/Imagen 1 cafe.jpeg` | `img/producto.jpeg` |
| **Origen (Tello, Huila)** | `img/Imagen 2 cafe.jpeg` | `img/origen.jpeg` |
| **Mujeres Campesinas** | `img/.jpeg` | `img/mujeres.jpeg` |
| **Galería (carrusel)** | Todas las anteriores | — |

> ⚠️ **Nota:** El archivo `img/.jpeg` tiene un nombre vacío antes de la extensión. Debe renombrarse a `img/mujeres.jpeg` para poder referenciarlo correctamente.

---

## 4. 🎨 Identidad Visual Oficial (Consolidada)

> Esta es la **línea gráfica definitiva** que se aplicará en la Fase 3 (CSS). Prevalece sobre cualquier paleta anterior.

### 4.1 Paleta de Colores Oficial

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Crema Suave** | `#F7F4EF` | Fondo principal |
| **Arena / Kraft** | `#E6D7C3` | Secciones alternas, tarjetas, texturas |
| **Espresso Profundo** | `#2C1D11` | Texto principal, máxima legibilidad |
| **Azul Petróleo** | `#1B4965` | Fondos de títulos, botones, CTA |
| **Rojo Cereza / Vino** | `#A62B2B` | Frutos maduros, acentos, badges |
| **Verde Hoja / Pino** | `#2D5A27` | Sellos ecológicos, "100% Orgánico" |
| **Café Medio** | `#6B4A2F` | Bordes, sombras, separadores |
| **Crema Oscura** | `#D9C7AE` | Hover de tarjetas, fondos de badges |
| **Blanco Cálido** | `#FFFFFF` | Texto sobre fondos oscuros |

### 4.2 Tipografías Oficiales

| Rol | Fuente sugerida | Peso | Uso |
|-----|-----------------|------|-----|
| **Títulos (Display)** | `Archivo Black` / `Anton` / `Montserrat ExtraBold` | 800–900 | H1, H2, H3, nombres de producto |
| **Texto (Body)** | `Poppins` / `Inter` | 400–600 | Párrafos, navegación, botones, formularios |

### 4.3 Elementos Gráficos Clave
- **Logotipo:** Oso amigable con taza humeante, montañas, flores blancas y frutos rojos (circular, estilo sello).
- **Sellos circulares:** "Hecho con amor por mujeres campesinas" y "100% Orgánico" (verde pino `#2D5A27` + crema).
- **Paisaje del Huila al atardecer:** fondo del hero con overlay espresso (`#2C1D11` al 40–60%).
- **Empaque Doypack:** con ilustración del oso y notas de sabor.

---

## 5. ✅ Checklist de la Fase 1

- [x] Definir textos y contenido final (copywriting) — ver sección 2
- [x] Recopilar fotografías reales — ver sección 3 (mapeo de `img/`)
- [x] Crear/conseguir el logo — `img/Logo.jpeg` disponible
- [x] Definir paleta de colores y tipografías definitivas — ver sección 4

### Pendientes para fases siguientes
- [ ] **Fase 2:** Renombrar imágenes sin espacios y actualizar `index.html` con rutas reales + textos finales.
- [ ] **Fase 3:** Aplicar la paleta oficial y tipografías en `css/styles.css`.
- [ ] **Fase 4:** Crear `js/main.js` (no existe actualmente).

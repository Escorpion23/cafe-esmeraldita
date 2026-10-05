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

- **Paleta de colores:** tonos tierra y café (marrón, crema, verde esmeralda como acento).
  - Verde esmeralda: `#0F9D58` (hace alusión al nombre "Esmeraldita")
  - Marrón café: `#6F4E37`
  - Crema: `#F5EFE6`
  - Oscuro: `#2B1D12`
  - Café oscuro (grano tostado): `#3E2723`
  - Café claro (latte): `#A1887F`
  - Verde esmeralda oscuro: `#0B7A45`
  - Verde hoja (cafetal): `#2E7D32`
  - Ámbar / caramelo: `#D2691E`
  - Dorado: `#C9A227`
  - Terracota: `#B5651D`

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

### Fase 1 — Preparación (Día 1)
- [ ] Definir textos y contenido final (copywriting), incluyendo la historia de las mujeres campesinas
- [ ] Recopilar fotografías reales del café, de Tello, Huila y de las mujeres campesinas
- [ ] Crear o conseguir el logo de la marca
- [ ] Definir paleta de colores y tipografías definitivas

### Fase 2 — Estructura HTML (Día 2)
- [ ] Crear `index.html` con todas las secciones
- [ ] Estructura semántica correcta (header, main, section, footer)
- [ ] Insertar textos e imágenes provisionales

### Fase 3 — Estilos CSS (Día 3-4)
- [ ] Crear `css/styles.css`
- [ ] Diseño responsive (mobile-first)
- [ ] Aplicar paleta de colores y tipografías
- [ ] Estilizar todas las secciones y componentes

### Fase 4 — Interactividad JS (Día 5)
- [ ] Crear `js/main.js`
- [ ] Implementar todas las funcionalidades listadas arriba
- [ ] Probar en distintos tamaños de pantalla

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










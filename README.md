# ☕ Café Esmeraldita — Café Artesanal del Huila

Página web oficial de **Café Esmeraldita**, un café de especialidad cultivado en **Tello, Huila (Colombia)** y elaborado por **mujeres campesinas**.

> 🌐 **Sitio en vivo:** [https://Escorpion23.github.io/cafe-esmeraldita/](https://Escorpion23.github.io/cafe-esmeraldita/)

---

## 🎯 Descripción del Proyecto

Sitio web estático, moderno y responsive que presenta el producto **Café Esmeraldita**, destacando sus dos diferenciadores principales:

1. ⭐ **Origen único:** cultivado en Tello, Huila — terruño privilegiado de café de especialidad.
2. ⭐ **Valor humano:** elaborado por mujeres campesinas — empoderamiento, tradición y trabajo artesanal.

---

## 🧱 Stack Tecnológico

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura y contenido semántico |
| **CSS3** | Estilos, diseño responsive, animaciones y paleta de colores |
| **JavaScript (Vanilla JS)** | Interactividad: menú móvil, animaciones, contadores, validación de formulario |

> Sin frameworks ni librerías externas. Proyecto ligero y fácil de mantener.

---

## 📁 Estructura del Proyecto

```
cafe-esmeraldita/
│
├── index.html              → Página principal (landing)
├── css/
│   └── styles.css          → Hoja de estilos principal
├── js/
│   └── main.js             → Lógica de interactividad
├── img/
│   ├── logo.jpeg           → Logotipo de la marca
│   ├── Imagen3.jpeg        → Fondo del hero (paisaje del Huila)
│   ├── Imagen4.jpg         → Producto (empaque doypack)
│   ├── Imagen2cafe.jpeg    → Paisaje de Tello, Huila
│   ├── Mujerescampesinas.jpg → Mujeres campesinas
│   └── Imagen1 cafe.jpeg   → Material promocional
├── docs/
│   └── FASE_1_PREPARACION.md → Documentación de preparación (Fase 1)
├── PLAN_DE_TRABAJO.md      → Plan de trabajo completo
└── README.md               → Este documento
```

---

## 🎨 Identidad Visual

### Paleta de Colores Oficial

| Color | Código HEX | Uso |
|-------|-----------|-----|
| **Crema Suave** | `#F7F4EF` | Fondo principal |
| **Arena / Kraft** | `#E6D7C3` | Secciones alternas, tarjetas |
| **Espresso Profundo** | `#2C1D11` | Texto principal, footer |
| **Azul Petróleo** | `#1B4965` | Botones, CTA, enlaces |
| **Rojo Cereza / Vino** | `#A62B2B` | Acentos, badges |
| **Verde Pino** | `#2D5A27` | Sellos ecológicos, "100% Orgánico" |
| **Café Medio** | `#6B4A2F` | Bordes, sombras |
| **Crema Oscura** | `#D9C7AE` | Hover de tarjetas |
| **Blanco Cálido** | `#FFFFFF` | Texto sobre fondos oscuros |

### Tipografías

- **Títulos:** `Archivo Black` (sans-serif gruesa, impacto artesanal)
- **Texto:** `Poppins` (moderna, legible)

---

## 🧩 Secciones de la Página

1. **Barra de navegación** — logo + menú responsive con hamburguesa
2. **Hero / Portada** — paisaje del Huila, título, CTA de WhatsApp y sello de mujeres campesinas
3. **Nuestro Café** — características (cosecha selecta, montañas del Huila, mujeres campesinas) + vitrina de producto
4. **Origen: Tello, Huila** — por qué es especial, estadísticas animadas, características del terruño
5. **Elaborado por Mujeres Campesinas** — empoderamiento, comunidad y tradición
6. **Proceso de Cultivo** — línea de tiempo (siembra → empaque)
7. **Contacto / Pedidos** — información de contacto, formulario validado, botón de WhatsApp
8. **Footer** — marca, enlaces y copyright
9. **Botón flotante de WhatsApp** — siempre visible

---

## ⚙️ Funcionalidades JavaScript

- ✅ Menú hamburguesa responsive (abrir/cerrar)
- ✅ Navegación suave (smooth scroll) entre secciones
- ✅ Barra de navegación sticky al hacer scroll
- ✅ Animaciones de aparición al hacer scroll (Intersection Observer)
- ✅ Contador animado de estadísticas
- ✅ Validación del formulario de contacto (nombre, email, teléfono, mensaje)
- ✅ Mensaje de éxito con `aria-live` para accesibilidad

---

## 📱 Responsive

El sitio es totalmente responsive con breakpoints en:
- **992px** (tablet landscape)
- **768px** (tablet portrait / móvil)
- **480px** (móvil pequeño)

---

## ♿ Accesibilidad

- Foco visible (`:focus-visible`) en todos los elementos interactivos
- Soporte para `prefers-reduced-motion`
- `aria-live` en mensajes de éxito del formulario
- `aria-label` en botones de iconos (WhatsApp, hamburguesa)
- Contraste de colores que cumple WCAG AA

---

## 🚀 Publicación en GitHub Pages

### Requisitos
- Cuenta en [GitHub](https://github.com)
- [Git](https://git-scm.com/) instalado

### Pasos

1. **Crear un repositorio** en GitHub (ej. `cafe-esmeraldita`), público.
2. **Subir el proyecto:**
   ```bash
   git init
   git add .
   git commit -m "Entrega final Café Esmeraldita"
   git remote add origin https://github.com/USUARIO/cafe-esmeraldita.git
   git branch -M main
   git push -u origin main
   ```
3. **Activar GitHub Pages:** Settings → Pages → Source: `main` / `/ (root)` → Save.
4. **URL del sitio:**
   ```
   https://Escorpion23.github.io/cafe-esmeraldita/
   ```

> 🌐 **Visita el sitio:** [https://Escorpion23.github.io/cafe-esmeraldita/](https://Escorpion23.github.io/cafe-esmeraldita/)

> ⚠️ **Importante:** Todas las rutas son relativas (`img/...`, `css/...`, `js/...`) para que funcionen en GitHub Pages.

### Actualizar el sitio

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

GitHub Pages se actualiza automáticamente en unos minutos.

---

## 📞 Datos de Contacto

- **WhatsApp:** 312 472 4794
- **Ubicación:** Conjunto Morichal
- **Enlace directo:** `https://wa.me/573124724794`

---

## 📄 Licencia

© 2026 Café Esmeraldita · Café Artesanal del Huila. Todos los derechos reservados.

---

## ✅ Estado del Proyecto

| Fase | Descripción | Estado |
|------|-------------|--------|
| Fase 1 | Preparación | ✅ Completada |
| Fase 2 | Estructura HTML | ✅ Completada |
| Fase 3 | Estilos CSS | ✅ Completada |
| Fase 4 | Interactividad JS | ✅ Completada |
| Fase 5 | Pruebas y Pulido | ✅ Completada |
| **Fase 6** | **Entrega** | ✅ **Completada** |

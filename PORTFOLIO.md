# Portfolio Feature - Documentación

## 🎨 Implementación Completada

Se ha agregado exitosamente una página de Portfolio con las siguientes características:

### ✅ Cambios Realizados

#### 1. **Colores Beige (Inspirado en Conectar Construcciones)**
   - **Colores añadidos en `css/base.css`:**
     - `--color-accent: #d4b896` - Beige principal para acentos
     - `--color-beige: #e8dcc8` - Beige claro para fondos
     - `--color-beige-dark: #c9a975` - Beige oscuro
   
   - **Elementos actualizados con beige:**
     - Botones en hover (hero, CTA, formulario)
     - Badge de "Consulta Gratuita" en sección CTA
     - Tags de categorías en tarjetas de servicios
     - Specs en tarjetas de portfolio

#### 2. **Nueva Página Portfolio**
   - **Archivo:** `portfolio.html`
   - **Ruta:** `https://yourdomain.com/portfolio.html`
   - **Navegación:** Agregado link "Portfolio" en el menú principal

#### 3. **Diseño de Tarjetas (Inspirado en Yesica Oviedo)**
   - **Grid responsive:** 3 columnas en desktop, 1 en móvil
   - **Tamaño de tarjetas:** 350px de ancho mínimo (más pequeñas que el original)
   - **Altura de imágenes:** 280px
   - **Efectos hover:** 
     - Elevación de tarjeta (-8px)
     - Zoom de imagen (scale 1.1)
     - Sombras suaves

### 📁 Archivos Nuevos

```
/portfolio.html                              # Página principal de portfolio
/sections/portfolio.html                     # Sección HTML del portfolio
/css/sections/portfolio.css                  # Estilos del portfolio
/js/main-portfolio.js                        # Script principal del portfolio
/js/modules/portfolio-renderer.js            # Módulo para renderizar proyectos
/assets/images/portfolio/                    # Carpeta para imágenes de proyectos
/assets/images/portfolio/README.md           # Guía de imágenes
```

### 📁 Archivos Modificados

```
/data/site-data.js                           # + Navegación Portfolio + Datos de proyectos
/css/base.css                                # + Variables de colores beige
/css/styles.css                              # + Import de portfolio.css
/css/sections.css                            # + Acentos beige en botones y badges
```

## 🎯 Datos de Portfolio

Se agregaron **6 proyectos de ejemplo** en `data/site-data.js`:

1. **Edificio Residencial Nueva Córdoba** (Multifamiliar)
2. **Casa Quinta en Country** (Unifamiliar)
3. **Local Comercial Centro** (Comercial)
4. **Duplex en Barrio Cerrado** (Unifamiliar)
5. **Ampliación Residencial** (Ampliación)
6. **Complejo de Oficinas** (Comercial)

### Estructura de Datos

```javascript
{
    id: 1,
    title: "Título del Proyecto",
    location: "Ubicación, Córdoba",
    category: "Categoría",
    image: "assets/images/portfolio/projectX.jpg",
    description: "Descripción breve del proyecto",
    specs: {
        rooms: "X dormitorios",
        area: "XXX m²",
        year: "20XX"
    }
}
```

## 📸 Imágenes Necesarias

Agregar las siguientes imágenes en `/assets/images/portfolio/`:

- `project1.jpg` - Edificio residencial
- `project2.jpg` - Casa quinta
- `project3.jpg` - Local comercial
- `project4.jpg` - Duplex
- `project5.jpg` - Ampliación
- `project6.jpg` - Complejo oficinas

**Especificaciones recomendadas:**
- Formato: JPG o WebP
- Dimensiones: 800x600px (ratio 4:3)
- Tamaño: <500KB
- Calidad: 80-85%

## 🚀 Cómo Usar

### Ver el Portfolio

1. Abrir en navegador: `http://localhost:8001/portfolio.html`
2. O hacer clic en "Portfolio" en el menú de navegación

### Agregar Nuevos Proyectos

Editar `data/site-data.js` y agregar objetos al array `portfolio`:

```javascript
portfolio: [
    // ... proyectos existentes
    {
        id: 7,
        title: "Nuevo Proyecto",
        location: "Tu Ubicación",
        category: "Tu Categoría",
        image: "assets/images/portfolio/project7.jpg",
        description: "Descripción del nuevo proyecto",
        specs: {
            rooms: "X dormitorios",
            area: "XXX m²",
            year: "20XX"
        }
    }
]
```

### Personalizar Colores

Editar variables en `css/base.css`:

```css
--color-accent: #d4b896;      /* Color principal beige */
--color-beige: #e8dcc8;       /* Beige claro */
--color-beige-dark: #c9a975;  /* Beige oscuro */
```

## 🎨 Paleta de Colores Beige

| Color | Hex | Uso |
|-------|-----|-----|
| Beige Principal | `#d4b896` | Botones hover, categorías portfolio |
| Beige Claro | `#e8dcc8` | Fondos, specs, badges |
| Beige Oscuro | `#c9a975` | Acentos adicionales |

## 📱 Responsive

- **Desktop (>768px):** Grid de 3 columnas
- **Tablet (768px):** Grid de 2 columnas
- **Mobile (<768px):** 1 columna, tarjetas optimizadas

## ✨ Efectos y Animaciones

1. **Hover en tarjetas:**
   - Transform: translateY(-8px)
   - Shadow: 0 12px 24px rgba(0,0,0,0.15)

2. **Hover en imágenes:**
   - Transform: scale(1.1)
   - Transition: 0.5s ease

3. **Hover en botones:**
   - Background: beige
   - Border: beige
   - Color: primary
   - Shadow: beige glow

## 🔧 Próximos Pasos

1. ✅ Agregar imágenes de proyectos reales
2. ✅ Personalizar descripciones de proyectos
3. ✅ Ajustar especificaciones según proyectos reales
4. ⬜ Considerar agregar filtros por categoría (opcional)
5. ⬜ Considerar agregar modal con más detalles de proyecto (opcional)

## 📞 Navegación Actualizada

El menú ahora incluye:
- **Inicio** → `index.html`
- **Sobre Mí** → `index.html#sobre-mi`
- **Servicios** → `index.html#servicios`
- **Portfolio** → `portfolio.html` (NUEVO)
- **Consulta Gratuita** → `index.html#contacto`

---

**Última actualización:** 2025
**Autor:** GitHub Copilot
**Estado:** ✅ Implementación completa

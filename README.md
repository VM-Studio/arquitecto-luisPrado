# Luis Prado Arquitecto - Sitio Web Modular

## 📋 Estructura del Proyecto (Modular)

Este proyecto utiliza una **arquitectura modular** con componentes separados, facilitando el mantenimiento y escalabilidad.

```
arquitecto-luisPrado/
├── index.html                      # Archivo principal (minimalista)
│
├── components/                     # Componentes HTML reutilizables
│   ├── nav.html                   # Navegación
│   └── footer.html                # Footer
│
├── sections/                       # Secciones HTML del sitio
│   ├── hero.html                  # Hero section
│   ├── about.html                 # Sobre mí
│   ├── services.html              # Servicios
│   ├── cta.html                   # Call to action
│   └── contact.html               # Contacto
│
├── css/                           # Estilos modulares
│   ├── styles.css                 # Importa todos los módulos
│   ├── base.css                   # Variables, reset, base
│   ├── sections.css               # Estilos de secciones
│   ├── components/
│   │   ├── nav.css               # Estilos de navegación
│   │   └── footer.css            # Estilos de footer
│   └── sections/                  # (Opcional para más modularización)
│
├── js/                            # JavaScript modular (ES6)
│   ├── main.js                    # Aplicación principal
│   ├── modules/                   # Módulos funcionales
│   │   ├── navigation.js         # Lógica de navegación
│   │   ├── content-renderer.js   # Renderiza contenido dinámico
│   │   ├── form-handler.js       # Manejo de formularios
│   │   └── animations.js         # Animaciones y efectos
│   └── utils/                     # Utilidades
│       └── component-loader.js   # Carga componentes HTML
│
├── data/                          # Datos del sitio
│   └── site-data.js              # Toda la información centralizada
│
└── assets/                        # Recursos estáticos
    ├── images/                    # Imágenes
    └── icons/                     # Iconos
```

## 🎯 Ventajas de esta Arquitectura

### ✅ **Modularidad**
- Cada componente está en su propio archivo
- Fácil de mantener y actualizar
- Cambios aislados no afectan otros componentes

### ✅ **Escalabilidad**
- Agregar nuevas secciones es simple
- Crear nuevos componentes es fácil
- Estructura preparada para crecer

### ✅ **Mantenimiento**
- Código organizado y limpio
- Fácil de encontrar y modificar
- Separación de responsabilidades

### ✅ **Reutilización**
- Componentes reutilizables
- Estilos modulares
- Funciones compartidas

### ✅ **Datos Centralizados**
- Todo el contenido en `data/site-data.js`
- Actualizar información es simple
- No necesitas tocar HTML

## 🚀 Cómo Usar

### 1. **Ver el Sitio**
```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Usar servidor local
python3 -m http.server 8000
# Luego ir a: http://localhost:8000
```

### 2. **Editar Contenido**
Todo el contenido está en `data/site-data.js`:

```javascript
// Cambiar texto del hero
hero: {
    title: "Tu nuevo título aquí",
    description: "Tu nueva descripción...",
    // ...
}
```

### 3. **Agregar un Servicio**
En `data/site-data.js`:

```javascript
services: [
    // Servicios existentes...
    {
        id: 4,
        tag: "Nuevo",
        title: "Mi Nuevo Servicio",
        image: "assets/images/service4.jpg",
        items: [
            "Item 1",
            "Item 2",
            "Item 3"
        ]
    }
]
```

### 4. **Cambiar Colores**
En `css/base.css`:

```css
:root {
    --color-primary: #tu-color;
    --color-secondary: #tu-color;
    --color-accent: #tu-color;
}
```

### 5. **Crear un Nuevo Componente**

#### Paso 1: Crear HTML
`components/mi-componente.html`:
```html
<div class="mi-componente">
    <h2 id="miTitulo"></h2>
</div>
```

#### Paso 2: Crear CSS
`css/components/mi-componente.css`:
```css
.mi-componente {
    padding: var(--spacing-xl);
}
```

#### Paso 3: Importar CSS
En `css/styles.css`:
```css
@import url('components/mi-componente.css');
```

#### Paso 4: Cargar Componente
En `js/main.js`, método `loadComponents()`:
```javascript
{ path: 'components/mi-componente.html', target: '#mi-componente-placeholder' }
```

## 📂 Archivos Principales

### `index.html`
Archivo minimalista que solo contiene placeholders para componentes.

### `data/site-data.js`
**Archivo más importante** - Contiene toda la información del sitio:
- Textos
- Enlaces
- Información de contacto
- Servicios
- Redes sociales

### `js/main.js`
Aplicación principal que:
1. Carga componentes HTML
2. Renderiza contenido dinámico
3. Inicializa módulos

### `js/modules/`
- **navigation.js**: Menú, scroll activo
- **content-renderer.js**: Renderiza todo el contenido
- **form-handler.js**: Maneja formulario de contacto
- **animations.js**: Efectos y animaciones

## 🖼️ Imágenes Necesarias

Coloca estas imágenes en `assets/images/`:

1. **hero-main.jpg** - Imagen principal del hero
2. **hero-background.jpg** - Fondo del hero
3. **about-main.jpg** - Sección sobre mí
4. **service1.jpg** - Proyectos y Construcción
5. **service2.jpg** - Servicios de Construcción
6. **service3.jpg** - Servicios Adicionales
7. **cta-background.jpg** - CTA section
8. **logo.png** - Logo (opcional)

## 🎨 Personalización Rápida

### Cambiar Información de Contacto
`data/site-data.js` → `contact`:
```javascript
contact: {
    email: "tu@email.com",
    phone: "+54 9 XXX XXX XXXX",
    whatsapp: "549XXXXXXXXXX"
}
```

### Cambiar Redes Sociales
`data/site-data.js` → `social`:
```javascript
social: {
    instagram: "https://instagram.com/tu_usuario",
    facebook: "https://facebook.com/tu_pagina"
}
```

### Cambiar Experiencia
`data/site-data.js` → raíz:
```javascript
experience: "30",  // años
projectsCompleted: "150"  // obras
```

## 💻 Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modulares con @import
- **JavaScript ES6+** - Módulos nativos
- **No frameworks** - Vanilla JS puro
- **No build tools** - Funciona directo en navegador

## 🔧 Comandos Útiles

```bash
# Iniciar servidor local
python3 -m http.server 8000

# Ver estructura de archivos
tree -I 'node_modules'

# Buscar en código
grep -r "palabra" .
```

## 📱 Responsive

El sitio es completamente responsive:
- Móviles (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🎯 Próximos Pasos

1. ✅ Agregar las 7 imágenes necesarias
2. ✅ Actualizar información en `data/site-data.js`
3. ✅ Personalizar colores en `css/base.css`
4. ✅ Probar en todos los dispositivos
5. ⬜ Deploy en Vercel/Netlify

## 📞 Soporte

Si necesitas ayuda:
1. Revisa `data/site-data.js` para cambiar contenido
2. Revisa `css/base.css` para cambiar colores
3. Los componentes están en `components/` y `sections/`

---

**✨ Arquitectura modular, código limpio, fácil de mantener!**
# arquitecto-luisPrado

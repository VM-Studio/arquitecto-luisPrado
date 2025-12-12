# Luis Prado Arquitecto - Sitio Web

## 📋 Información del Proyecto

Sitio web profesional para **Luis Prado Arquitecto** basado en el diseño de referencia de Yesica Oviedo.

### Información del Cliente
- **Nombre**: Luis Prado Arquitecto
- **Experiencia**: +25 años en el rubro
- **Obras**: +104 obras ejecutadas en tiempo y forma
- **Ubicación**: Ciudad de Córdoba, Argentina
- **Área de cobertura**: Máximo 60-90 km de Córdoba (mayormente dentro de la ciudad)

### Servicios Prestados

#### 1. Proyectos y Construcción (Principal)
- Proyectos arquitectónicos completos
- Construcción de viviendas
- Locales comerciales
- Ampliaciones y refacciones

#### 2. Servicios de Construcción (Especializado)
- Cambio de pisos y revestimientos
- Instalaciones de cañerías
- Instalaciones sanitarias
- Instalaciones eléctricas

#### 3. Servicios Adicionales (Complementario)
- Instalación de cloacas
- Instalación de agua
- Colocación de cerámicos
- Acabados y terminaciones

## 🎨 Estructura del Sitio

Basado en: https://yessica-oviedo.vercel.app/

### Secciones Implementadas:

1. **Navegación Fija**
   - Logo Luis Prado
   - Links: Inicio, Sobre Mí, Servicios
   - CTA: Consulta Gratuita
   - Menú hamburguesa responsive

2. **Hero Section**
   - Título: "Hacemos realidad tus proyectos arquitectónicos"
   - Descripción con años de experiencia y obras ejecutadas
   - Botón CTA: Contáctame
   - Imagen principal + background decorativo

3. **Sección "Tu proyecto es nuestra prioridad"**
   - Imagen destacada
   - Texto descriptivo de servicios
   - Diseño a dos columnas en desktop

4. **Servicios** (reemplaza "Zonas Destacadas")
   - 3 tarjetas de servicios principales
   - Cada tarjeta con:
     - Imagen representativa
     - Tag (Principal/Especializado/Complementario)
     - Título del servicio
     - Lista de prestaciones
   - Hover effects y animaciones

5. **CTA Section**
   - Título: "Maximizamos el potencial de tus proyectos..."
   - Badge: "Consulta Gratuita"
   - Imagen complementaria
   - Call-to-action: "Llevemos al éxito tu proyecto"

6. **Contacto**
   - Formulario de consulta
   - Información de contacto
   - Emails: info@luisprado.com, obras@luisprado.com
   - Botón CTA: "Hablemos de tu Proyecto"

7. **Footer**
   - Logo y nombre
   - Redes sociales (Email, WhatsApp, Instagram)
   - Certificaciones/logos (opcionales)
   - Copyright

## 📂 Estructura de Archivos

```
arquitecto-luisPrado/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── hero-main.jpg          # Imagen principal del hero (derecha)
│   │   ├── hero-background.jpg    # Background decorativo del hero
│   │   ├── about-main.jpg         # Imagen de la sección "sobre mí"
│   │   ├── service1.jpg           # Proyectos y Construcción
│   │   ├── service2.jpg           # Servicios de Construcción
│   │   ├── service3.jpg           # Servicios Adicionales
│   │   ├── cta-background.jpg     # Imagen del CTA section
│   │   ├── logo.png               # Logo para el footer
│   │   ├── cert1.png              # Certificación 1 (opcional)
│   │   ├── cert2.png              # Certificación 2 (opcional)
│   │   └── cert3.png              # Certificación 3 (opcional)
│   └── icons/
└── README.md
```

## 🖼️ Imágenes Necesarias

### Requeridas (IMPORTANTES):

1. **hero-main.jpg** (800x600px aprox.)
   - Foto profesional de Luis Prado o proyecto destacado
   - Ubicación: lado derecho del hero
   - Estilo: Profesional, alta calidad

2. **hero-background.jpg** (1920x1080px)
   - Imagen arquitectónica de fondo (aparece difuminada)
   - Puede ser un plano, proyecto o construcción

3. **about-main.jpg** (800x600px)
   - Imagen que represente profesionalismo
   - Puede ser: equipo trabajando, obra en proceso, planos

4. **service1.jpg** (800x600px)
   - Representa: Proyectos y Construcción
   - Sugerencia: Casa moderna, edificio en construcción

5. **service2.jpg** (800x600px)
   - Representa: Servicios de Construcción
   - Sugerencia: Instalaciones, cañerías, trabajo técnico

6. **service3.jpg** (800x600px)
   - Representa: Servicios Adicionales
   - Sugerencia: Colocación de cerámicos, acabados

7. **cta-background.jpg** (800x600px)
   - Proyecto terminado o en proceso
   - Inspira confianza y calidad

### Opcionales:

8. **logo.png** (200x200px)
   - Logo de Luis Prado (si existe)
   - Fondo transparente

9. **cert1.png, cert2.png, cert3.png**
   - Logos de certificaciones profesionales
   - Asociaciones o colegios de arquitectos
   - Si no existen, se pueden ocultar

## 🎨 Fuentes de Imágenes Recomendadas

### Sitios Gratuitos:
- **Unsplash**: unsplash.com
- **Pexels**: pexels.com
- **Pixabay**: pixabay.com

### Términos de Búsqueda:
- "construction worker"
- "architect blueprints"
- "house construction"
- "modern architecture"
- "building interior"
- "ceramic tiles installation"
- "plumbing installation"
- "electrical work"
- "córdoba argentina architecture" (para contexto local)

## 🚀 Funcionalidades Implementadas

### JavaScript:
- ✅ Menú móvil hamburguesa
- ✅ Smooth scrolling a secciones
- ✅ Link activo en navegación según scroll
- ✅ Formulario de contacto funcional
- ✅ Animaciones on-scroll (Intersection Observer)
- ✅ Lazy loading de imágenes
- ✅ Optimizaciones de performance (debounce)
- ✅ Mejoras de accesibilidad (keyboard support, focus trap)

### CSS:
- ✅ Diseño completamente responsive
- ✅ Mobile-first approach
- ✅ Variables CSS para fácil personalización
- ✅ Hover effects y transiciones suaves
- ✅ Grid y Flexbox modernos
- ✅ Sombras y profundidad

## 💻 Cómo Usar

### 1. Añadir Imágenes
Coloca todas las imágenes necesarias en `assets/images/` con los nombres exactos listados arriba.

### 2. Personalizar Contenido
Edita `index.html` para:
- Cambiar textos
- Actualizar información de contacto
- Modificar enlaces de redes sociales

### 3. Ajustar Colores (Opcional)
En `css/styles.css`, modifica las variables CSS:
```css
:root {
    --color-primary: #1a1a1a;    /* Color principal */
    --color-secondary: #2c2c2c;  /* Color secundario */
    --color-accent: #4a4a4a;     /* Color de acento */
}
```

### 4. Ver el Sitio
Simplemente abre `index.html` en tu navegador web.

### 5. Deployment
El sitio puede ser desplegado en:
- **Vercel** (recomendado, gratuito)
- **Netlify** (gratuito)
- **GitHub Pages** (gratuito)
- Cualquier hosting web estándar

## 📱 Responsive Design

El sitio se adapta perfectamente a:
- 📱 Móviles (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🎯 Siguiente Paso: Añadir Imágenes

**PRIORIDAD**: Necesitas las 7 imágenes principales listadas arriba para que el sitio se vea completo.

Una vez tengas las imágenes:
1. Colócalas en `assets/images/`
2. Asegúrate de que tengan los nombres exactos
3. Abre `index.html` en el navegador

## 📞 Información de Contacto a Actualizar

Recuerda actualizar en `index.html`:
- Emails (actualmente: info@luisprado.com, obras@luisprado.com)
- Teléfono de WhatsApp (actualmente: +5493511234567)
- Enlaces de redes sociales (Instagram, etc.)

---

**¡El sitio está listo para recibir las imágenes y ser personalizado!** 🎉

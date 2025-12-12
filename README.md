# Luis Prado - Sitio Web de Arquitecto

Sitio web profesional construido con **Next.js 15** y **TypeScript** para Luis Prado, arquitecto con más de 25 años de experiencia en Córdoba, Argentina.

## 🚀 Tecnologías

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Tipado estático para mayor seguridad
- **React 19** - Biblioteca UI moderna
- **CSS Variables** - Sistema de diseño consistente
- **Next/Image** - Optimización automática de imágenes

## 📁 Estructura del Proyecto

```
arquitecto-luisPrado/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout global (Navbar + Footer)
│   ├── page.tsx             # Página de inicio
│   ├── globals.css          # Estilos globales
│   ├── portfolio/           
│   │   └── page.tsx         # Página de portfolio
│   └── sobre-mi/            
│       └── page.tsx         # Página sobre mí
├── components/              # Componentes React TypeScript
│   ├── Navbar.tsx           # Navegación principal
│   ├── Hero.tsx             # Sección hero
│   ├── About.tsx            # Sección sobre nosotros
│   ├── Services.tsx         # Sección servicios
│   ├── CTA.tsx              # Llamado a la acción
│   ├── Contact.tsx          # Formulario de contacto
│   └── Footer.tsx           # Pie de página
├── lib/                     
│   └── data.ts              # Datos centralizados con tipos
├── public/                  
│   └── assets/              
│       └── images/          # Imágenes del sitio
├── css/                     # Estilos CSS modulares
│   ├── components/          # Estilos de componentes
│   └── sections/            # Estilos de secciones
├── next.config.js           # Configuración de Next.js
├── tsconfig.json            # Configuración de TypeScript
└── package.json             # Dependencias del proyecto
```

## 🛠️ Instalación y Desarrollo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

El sitio estará disponible en **[http://localhost:3000](http://localhost:3000)**

### 3. Construir para producción

```bash
npm run build
```

### 4. Ejecutar en producción

```bash
npm start
```

### 5. Lint del código

```bash
npm run lint
```

## 📄 Páginas

- **/** - Página de inicio con hero, sobre nosotros, servicios, CTA y contacto
- **/portfolio** - Galería de proyectos arquitectónicos realizados (6 proyectos)
- **/sobre-mi** - Información sobre Luis Prado y su experiencia (25+ años)

## 🎨 Personalización

### Modificar contenido

Edita el archivo `lib/data.ts` para cambiar:
- ✏️ Información de contacto (email, teléfono, WhatsApp)
- 🔗 Redes sociales (Instagram, Facebook, LinkedIn)
- 📝 Textos de todas las secciones
- 🏗️ Proyectos del portfolio
- 🔧 Servicios ofrecidos
- 👤 Información de "Sobre Mí"

### Modificar estilos

Los estilos están organizados en:
- `app/globals.css` - Variables CSS y estilos globales
- `css/components/` - Estilos de componentes (nav, footer)
- `css/sections/` - Estilos de secciones (hero, about, services, etc.)

**Paleta de colores:**
```css
--color-primary: #1a1a1a        /* Negro principal */
--color-accent: #d4b896          /* Beige accent */
--color-beige: #e8dcc8           /* Beige claro */
--color-beige-dark: #c9a975      /* Beige oscuro */
```

### Agregar imágenes

1. Coloca las imágenes en `public/assets/images/`
2. Actualiza las rutas en `lib/data.ts`
3. Las imágenes se optimizan automáticamente con Next/Image

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente Next.js
3. ¡Deploy automático en cada push!

### Opción 2: Otras plataformas

Compatible con:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Cualquier plataforma con soporte Node.js

## 📝 Características

✅ **Diseño responsive** - Mobile-first, se adapta a todos los dispositivos  
✅ **SEO optimizado** - Meta tags, estructura semántica  
✅ **Carga rápida** - Optimización automática de Next.js  
✅ **Imágenes optimizadas** - Lazy loading y formatos modernos  
✅ **TypeScript** - Código type-safe y robusto  
✅ **Componentes modulares** - Fácil de mantener y extender  
✅ **Navegación suave** - Client-side routing de Next.js  
✅ **Formulario funcional** - Validación en cliente  
✅ **Paleta profesional** - Colores neutrales con acentos beige  
✅ **CSS Variables** - Sistema de diseño consistente  

## 🎯 Próximas Mejoras

- [ ] Integración con backend para formulario de contacto
- [ ] Envío de emails con SendGrid o similar
- [ ] Página individual para cada proyecto del portfolio
- [ ] Blog de arquitectura con MDX
- [ ] Galería de imágenes con lightbox
- [ ] Animaciones y transiciones suaves (Framer Motion)
- [ ] Modo oscuro
- [ ] Testimonios de clientes
- [ ] Google Analytics integration
- [ ] Sitemap y robots.txt

## � Solución de Problemas

### Los estilos no se cargan

- Asegúrate de que el servidor esté corriendo (`npm run dev`)
- Verifica que las rutas en `globals.css` apunten a los archivos CSS correctos

### Las imágenes no se muestran

- Verifica que las imágenes estén en `public/assets/images/`
- Las rutas deben empezar con `/assets/` (no `../assets/`)
- Reinicia el servidor después de agregar imágenes nuevas

### Errores de TypeScript en el editor

- Cierra y vuelve a abrir VS Code
- Ejecuta: `npm run build` para verificar errores reales
- Los errores del editor no afectan la compilación si el servidor funciona

## �📧 Contacto

**Luis Prado - Arquitecto**  
📧 Email: info@luisprado.com  
📧 Email obras: obras@luisprado.com  
📱 Teléfono: +54 9 351 123 4567  
📍 Ubicación: Córdoba, Argentina

**Experiencia:** 25+ años  
**Proyectos completados:** 104+

---

✨ **Desarrollado con Next.js 15 + TypeScript + React 19**

🎨 **Diseño:** Profesional, responsive y optimizado para SEO

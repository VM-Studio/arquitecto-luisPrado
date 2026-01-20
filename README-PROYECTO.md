# 🏛️ Luis Prado - Arquitecto en Córdoba

Sitio web profesional con sistema de landing pages para servicios de arquitectura y construcción.

## 🎯 Inicio Rápido

### Desarrollo

\`\`\`bash
npm install
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000)

### Producción

\`\`\`bash
npm run build
npm start
\`\`\`

## 📚 Documentación Completa

**⭐ EMPIEZA AQUÍ:** [INDEX-DOCUMENTACION.md](./INDEX-DOCUMENTACION.md)

### Archivos Importantes:

- **[INDEX-DOCUMENTACION.md](./INDEX-DOCUMENTACION.md)** - Índice de toda la documentación
- **[RESUMEN-FINAL.md](./RESUMEN-FINAL.md)** - Qué se implementó y cómo funciona
- **[SERVICIOS-ESTRUCTURA.md](./SERVICIOS-ESTRUCTURA.md)** - Estructura técnica detallada
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Guía de deployment

## 🚀 Características

### ✅ Implementado

- ✅ 11 landing pages de servicios (generadas automáticamente)
- ✅ Sistema de categorías (Construcción y Arquitectura)
- ✅ Filtrado inteligente por categoría
- ✅ SEO optimizado con metadata dinámica
- ✅ Responsive design completo
- ✅ Static Site Generation (SSG)
- ✅ Performance optimizado

### 📊 Estructura de Servicios

#### 🏗️ Construcción (7 servicios)

1. Albañilería en General
2. Instalaciones de Gas y Eléctricas
3. Instalaciones de Agua/Cloacas
4. Colocación de Cerámica
5. Calefacción por Losa Radiante
6. Estructuras Metálicas y Techos
7. Durlock

#### 🏛️ Arquitectura (4 servicios)

1. Proyectos de Vivienda y Locales
2. Ampliaciones
3. Refacciones
4. Relevamiento

## 🗂️ Estructura del Proyecto

\`\`\`
arquitecto-luisPrado/
├── app/
│ ├── servicios/
│ │ ├── page.tsx # Página principal de servicios
│ │ └── [slug]/
│ │ └── page.tsx # 11 landing pages dinámicas ⭐
│ ├── portfolio/
│ ├── contacto/
│ └── sobre-mi/
├── components/ # Componentes React
├── css/
│ └── sections/
│ └── service-landing.css # Estilos landing pages ⭐
├── lib/
│ └── data.ts # Data de servicios ⭐
└── public/
└── assets/
└── images/
└── servicios/ # Imágenes de servicios
\`\`\`

## 🎨 Personalización

### Agregar un Nuevo Servicio

1. Edita \`lib/data.ts\`
2. Encuentra \`serviceCategories\`
3. Agrega el servicio:

\`\`\`typescript
{
id: "nuevo-servicio",
name: "Nombre del Servicio",
slug: "nuevo-servicio",
category: "construccion", // o "arquitectura"
features: ["Feature 1", "Feature 2", ...],
benefits: ["Benefit 1", "Benefit 2", ...],
// ... más campos
}
\`\`\`

4. Ejecuta \`npm run build\`
5. ¡La página se genera automáticamente!

### Cambiar Estilos

Edita \`css/sections/service-landing.css\` para modificar las landing pages.

### Actualizar Contenido

Todo el contenido está en \`lib/data.ts\`:

- Información de contacto
- Textos de servicios
- Features y benefits
- Metadata SEO

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** CSS Modules
- **Deployment:** Vercel/Netlify compatible
- **Renderizado:** Static Site Generation (SSG)

## 🚀 Deployment

Ver guía completa en: [DEPLOYMENT.md](./DEPLOYMENT.md)

### Vercel (Recomendado)

\`\`\`bash
vercel
\`\`\`

### Build Local

\`\`\`bash
npm run build
\`\`\`

Genera 19 páginas estáticas:

- 8 páginas base
- 11 landing pages de servicios

## 📈 Performance

- ✅ First Load JS: ~102-112 KB
- ✅ Build Time: 3-5 segundos
- ✅ 100% páginas estáticas (SSG)
- ✅ SEO optimizado
- ✅ Responsive en todos los dispositivos

## 📝 URLs Principales

- \`/\` - Homepage
- \`/servicios\` - Categorías de servicios
- \`/servicios/albanileria-general\` - Landing de servicio
- \`/servicios/proyectos-vivienda-locales-comerciales\` - Landing de servicio
- \`/portfolio\` - Portfolio de proyectos
- \`/contacto\` - Formulario de contacto
- \`/sobre-mi\` - Acerca de Luis Prado

## ⚠️ Pendientes

- [ ] Agregar imágenes reales en \`/public/assets/images/servicios/\`
- [ ] Actualizar datos de contacto en \`lib/data.ts\`
- [ ] Configurar dominio
- [ ] Deploy a producción

## 📞 Soporte

Para más información, ver la documentación completa:

- [INDEX-DOCUMENTACION.md](./INDEX-DOCUMENTACION.md) - Índice completo
- [RESUMEN-FINAL.md](./RESUMEN-FINAL.md) - Resumen ejecutivo
- [SERVICIOS-ESTRUCTURA.md](./SERVICIOS-ESTRUCTURA.md) - Estructura técnica

## 📄 Licencia

Este proyecto es privado y confidencial.

---

**Estado:** ✅ Completo y funcional  
**Versión:** 1.0  
**Última actualización:** ${new Date().toLocaleDateString()}

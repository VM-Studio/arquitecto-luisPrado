# Estructura de Servicios - Luis Prado Arquitecto

## 📋 Nueva Estructura Implementada

La web ahora sigue esta estructura:

### Páginas Principales

- `/` - HOME PAGE
- `/servicios` - Página principal de servicios (muestra categorías)
- `/portfolio` - Portfolio de proyectos
- `/contacto` - Consulta/Contacto

### Servicios por Categoría

#### 🏗️ CONSTRUCCIÓN

Todas las URLs tienen el formato: `/servicios/{slug}`

1. **Albañilería en General** → `/servicios/albanileria-general`
2. **Instalaciones de Gas y Eléctricas (Matriculado)** → `/servicios/instalaciones-gas-electricas`
3. **Instalaciones de Agua/Cloacas** → `/servicios/instalaciones-agua-cloacas`
4. **Colocación de Cerámica** → `/servicios/colocacion-ceramica`
5. **Calefacción por Losa Radiante y Radiadores** → `/servicios/calefaccion-losa-radiante-radiadores`
6. **Estructuras Metálicas y Techos de Madera** → `/servicios/estructuras-metalicas-techos-madera`
7. **Durlock** → `/servicios/durlock`

#### 🏛️ ARQUITECTURA

Todas las URLs tienen el formato: `/servicios/{slug}`

1. **Proyectos de Vivienda y Locales Comerciales** → `/servicios/proyectos-vivienda-locales-comerciales`
2. **Ampliaciones** → `/servicios/ampliaciones`
3. **Refacciones** → `/servicios/refacciones`
4. **Relevamiento** → `/servicios/relevamiento`

## 🎯 Características Implementadas

### Landing Pages Reutilizables

- **Una sola estructura** para todas las landing pages de servicios
- Similar al sistema de Fili y Asociados
- El contenido cambia dinámicamente según el servicio
- Cada landing incluye:
  - Hero section con título y descripción
  - Características del servicio
  - Beneficios de elegir Luis Prado
  - Servicios relacionados de la misma categoría
  - CTA para contacto
  - Información de contacto

### SEO Optimizado

- Metadata dinámica para cada servicio
- Títulos y descripciones personalizados
- Open Graph tags para redes sociales
- Static Site Generation (SSG) para todas las páginas

### Filtrado Inteligente

- En las landing pages se muestran **solo los servicios de la misma categoría**
- Si estás viendo un servicio de CONSTRUCCIÓN, verás otros servicios de construcción
- Si estás viendo un servicio de ARQUITECTURA, verás otros servicios de arquitectura

## 📂 Archivos Clave

### Data

- `lib/data.ts` - Contiene toda la información de servicios estructurada

### Páginas

- `app/servicios/page.tsx` - Página principal de servicios
- `app/servicios/[slug]/page.tsx` - Landing page dinámica para cada servicio
- `app/servicios/[slug]/metadata.ts` - Metadata dinámica para SEO

### Estilos

- `css/sections/service-landing.css` - Estilos para las landing pages

## 🎨 Personalización

Para agregar un nuevo servicio:

1. Abre `lib/data.ts`
2. Encuentra la categoría correspondiente (`construccion` o `arquitectura`)
3. Agrega un nuevo objeto en el array `services` con esta estructura:

\`\`\`typescript
{
id: "slug-del-servicio",
name: "Nombre del Servicio",
slug: "slug-del-servicio",
title: "Título completo del servicio",
metaTitle: "Título SEO - Luis Prado Arquitecto | Córdoba",
metaDescription: "Descripción meta para SEO",
heroTitle: "Título del Hero",
heroDescription: "Descripción del hero",
category: "construccion", // o "arquitectura"
features: [
"Característica 1",
"Característica 2",
// ...
],
benefits: [
"Beneficio 1",
"Beneficio 2",
// ...
],
image: "/assets/images/servicios/nombre-servicio.jpg"
}
\`\`\`

## ✅ Testing

Para probar la nueva estructura:

1. Ejecuta el servidor de desarrollo: `npm run dev`
2. Navega a `/servicios` para ver las categorías
3. Haz clic en cualquier servicio para ver su landing page
4. Verifica que los servicios relacionados sean de la misma categoría
5. Prueba los botones de CTA y WhatsApp

## 🔗 URLs de Ejemplo

- Principal: http://localhost:3000/servicios
- Construcción: http://localhost:3000/servicios/albanileria-general
- Arquitectura: http://localhost:3000/servicios/proyectos-vivienda-locales-comerciales

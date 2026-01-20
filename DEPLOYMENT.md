# 🚀 Guía de Deployment

## Preparación para Producción

### 1. Verificar que todo compile correctamente

\`\`\`bash
npm run build
\`\`\`

Deberías ver:

- ✓ Compiled successfully
- ✓ Generating static pages (19/19)
- 11 landing pages de servicios generadas

### 2. Agregar Imágenes Reales

Antes de deployar, agrega las imágenes de servicios en:
\`\`\`
/public/assets/images/servicios/
\`\`\`

Imágenes necesarias:

- albanileria.jpg
- gas-electricidad.jpg
- agua-cloacas.jpg
- ceramica.jpg
- calefaccion.jpg
- estructuras.jpg
- durlock.jpg
- proyectos.jpg
- ampliaciones.jpg
- refacciones.jpg
- relevamiento.jpg

**Especificaciones:**

- Tamaño: 1200x800px mínimo
- Formato: JPG optimizado
- Peso: Máximo 500KB cada una

### 3. Actualizar Información de Contacto

En \`lib/data.ts\`, actualiza:
\`\`\`typescript
contact: {
email: "tu-email-real@gmail.com",
emailSecondary: "otro-email@gmail.com",
phone: "+54 9 351 XXX XXXX",
whatsapp: "549351XXXXXXX", // Número completo sin espacios ni +
address: "Dirección real, Córdoba, Argentina"
}
\`\`\`

### 4. Configurar metadataBase (Opcional pero Recomendado)

En \`app/layout.tsx\`, agrega:
\`\`\`typescript
export const metadata: Metadata = {
metadataBase: new URL('https://tu-dominio.com'),
title: 'Luis Prado - Arquitecto en Córdoba',
description: '...',
}
\`\`\`

Esto mejora el SEO y las imágenes de Open Graph.

## Deployment en Vercel (Recomendado)

### Opción 1: Desde GitHub

1. **Push tu código a GitHub:**
   \`\`\`bash
   git add .
   git commit -m "feat: nueva estructura de servicios implementada"
   git push origin main
   \`\`\`

2. **Conectar con Vercel:**
   - Ir a [vercel.com](https://vercel.com)
   - Hacer click en "Add New Project"
   - Importar tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

3. **Configuración automática:**
   - Build Command: `next build` (automático)
   - Output Directory: `.next` (automático)
   - Install Command: `npm install` (automático)

### Opción 2: Desde CLI

\`\`\`bash

# Instalar Vercel CLI

npm i -g vercel

# Deploy

vercel

# Para producción

vercel --prod
\`\`\`

## Deployment en Netlify

1. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Configurar next.config.js:**
   \`\`\`javascript
   module.exports = {
   output: 'export', // Para export estático
   images: {
   unoptimized: true
   }
   }
   \`\`\`

3. **Deploy:**
   \`\`\`bash
   npm run build

# Subir la carpeta .next a Netlify

\`\`\`

## Deployment en Servidor Propio (VPS)

### Requisitos:

- Node.js 18+
- Nginx o Apache
- PM2 para process management

### Pasos:

1.  **Clonar el repositorio:**
    \`\`\`bash
    git clone <tu-repo>
    cd arquitecto-luisPrado
    \`\`\`

2.  **Instalar dependencias:**
    \`\`\`bash
    npm install
    \`\`\`

3.  **Build para producción:**
    \`\`\`bash
    npm run build
    \`\`\`

4.  **Configurar PM2:**
    \`\`\`bash
    npm install -g pm2
    pm2 start npm --name "arquitecto-luisprado" -- start
    pm2 save
    pm2 startup
    \`\`\`

5.  **Configurar Nginx:**
    \`\`\`nginx
    server {
    listen 80;
    server_name tu-dominio.com;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

    }
    \`\`\`

6.  **SSL con Let's Encrypt:**
    \`\`\`bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d tu-dominio.com
    \`\`\`

## Variables de Entorno (Si las necesitas)

Crea un archivo \`.env.local\`:
\`\`\`
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_GA_ID=tu-google-analytics-id
\`\`\`

## Después del Deployment

### 1. Verificar las URLs:

- ✅ https://tu-dominio.com/
- ✅ https://tu-dominio.com/servicios
- ✅ https://tu-dominio.com/servicios/albanileria-general
- ✅ https://tu-dominio.com/servicios/proyectos-vivienda-locales-comerciales
- ✅ Todas las 11 landing pages

### 2. Verificar SEO:

- Abrir cualquier servicio
- Ver código fuente (Ctrl+U)
- Buscar \`<meta property="og:title"\`
- Verificar que tenga el título correcto

### 3. Test de Performance:

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 4. Test Responsive:

- Chrome DevTools (F12 → Toggle Device Toolbar)
- Probar en móvil real
- Verificar que todo se vea bien

### 5. Configurar Google Search Console:

- Agregar tu sitio
- Enviar sitemap.xml
- Monitorear indexación

### 6. Configurar Google Analytics (Opcional):

\`\`\`typescript
// En app/layout.tsx

<Script
  src={\`https://www.googletagmanager.com/gtag/js?id=\${GA_ID}\`}
  strategy="afterInteractive"
/>
\`\`\`

## Monitoreo Post-Deployment

### Métricas a Monitorear:
- [ ] Todas las páginas cargan correctamente
- [ ] No hay errores 404
- [ ] Imágenes se muestran
- [ ] Links funcionan
- [ ] Formulario de contacto funciona
- [ ] WhatsApp button funciona
- [ ] SEO metadata correcta
- [ ] Performance > 90 en PageSpeed

## Actualizaciones Futuras

Para actualizar el contenido:

1. **Editar servicios:**
   - Modificar \`lib/data.ts\`
   - Commit y push

2. **Agregar nuevo servicio:**
   - Agregar entrada en \`serviceCategories\`
   - Build automático generará la página

3. **Cambiar estilos:**
   - Editar archivos en \`css/\`
   - Rebuild y deploy

## Backup

Antes de hacer cambios importantes:
\`\`\`bash
# Crear backup
git tag -a v1.0 -m "Version estable con servicios"
git push origin v1.0

# Restaurar si es necesario
git checkout v1.0
\`\`\`

## Troubleshooting

### Error: "Module not found"
\`\`\`bash
rm -rf node_modules .next
npm install
npm run build
\`\`\`

### Error: "Build failed"
- Verificar que todas las imágenes existan
- Revisar \`lib/data.ts\` por errores de sintaxis
- Ejecutar \`npm run build\` localmente primero

### Error: "404 en producción"
- Verificar que \`generateStaticParams\` esté exportado
- Revisar que los slugs coincidan exactamente

---

## ✅ Checklist Pre-Deployment

- [ ] Código compilando sin errores
- [ ] Todas las imágenes agregadas
- [ ] Información de contacto actualizada
- [ ] metadataBase configurado
- [ ] Variables de entorno configuradas (si aplica)
- [ ] Build exitoso localmente
- [ ] Tests manuales en localhost

## 🎉 ¡Listo para Producción!

Una vez completado este checklist, tu sitio estará listo para deployment con:
- ✅ 11 landing pages de servicios
- ✅ SEO optimizado
- ✅ Performance excelente
- ✅ Responsive design
- ✅ Sin errores

**¡Éxito con tu deployment!** 🚀

# 📁 ESTRUCTURA DEL PROYECTO - RESUMEN RÁPIDO

## 🎯 Archivos que Editar Frecuentemente

### 1. **Contenido del Sitio**
📄 `data/site-data.js`
- ✏️ Cambiar textos
- 📧 Actualizar contacto
- 🏢 Modificar servicios
- 🔗 Enlaces de redes sociales

### 2. **Colores y Estilos**
🎨 `css/base.css`
- Variables de colores
- Espaciado
- Tipografía

### 3. **Imágenes**
📸 `assets/images/`
- Colocar las 7 imágenes principales
- Ver `LEEME.txt` para nombres exactos

## 🏗️ Arquitectura Modular

```
index.html (minimalista)
    ↓ carga
components/ + sections/
    ↓ usan estilos de
css/base.css + css/components/ + css/sections.css
    ↓ dinámico con
js/main.js → modules/ → utils/
    ↓ usa datos de
data/site-data.js
```

## 🔄 Flujo de Carga

1. **index.html** se abre
2. **main.js** inicia
3. **ComponentLoader** carga HTML de `components/` y `sections/`
4. **ContentRenderer** inyecta datos desde `site-data.js`
5. **Navigation, FormHandler, Animations** se inicializan
6. Sitio listo! ✅

## 📝 Guía Rápida de Edición

### Cambiar un Texto
1. Abre `data/site-data.js`
2. Busca la sección (hero, about, services, etc.)
3. Modifica el texto
4. Recarga el navegador

### Agregar un Servicio
1. Abre `data/site-data.js`
2. Ve a `services: [...]`
3. Agrega un nuevo objeto
4. Recarga el navegador

### Cambiar Colores
1. Abre `css/base.css`
2. Modifica variables en `:root`
3. Recarga el navegador

### Agregar una Sección
1. Crea `sections/mi-seccion.html`
2. Crea `css/sections/mi-seccion.css` (opcional)
3. Agrega placeholder en `index.html`
4. Carga en `js/main.js` → `loadComponents()`

## ✅ Ventajas

- ✨ **Modular**: Cada parte separada
- 🎯 **Fácil**: Editar sin tocar HTML
- 📦 **Escalable**: Agregar componentes fácilmente
- 🧹 **Limpio**: Código organizado
- 🔧 **Mantenible**: Cambios aislados

## 🚀 Para Empezar

1. **Añade imágenes** en `assets/images/`
2. **Edita información** en `data/site-data.js`
3. **Personaliza colores** en `css/base.css`
4. **Abre** en navegador o servidor local

---

**💡 Tip**: La mayoría de cambios se hacen en `data/site-data.js` sin tocar HTML!

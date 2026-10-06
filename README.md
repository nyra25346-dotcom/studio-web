# STUDIO WEB — V2

Sitio estático en HTML, CSS y JavaScript. Español por defecto, traducción completa al inglés y selección persistente. Sin compilación ni dependencias de producción.

## Configuración comercial

Edita `js/config.js`:
- `WHATSAPP_NUMBER`: número internacional, solo dígitos. Actual: `212701192223`.
- `EMAIL`, `INSTAGRAM_URL`, `FACEBOOK_URL`: completa únicamente canales reales. Los valores vacíos se ocultan.
- `PRICING`: precios de Web Esencial, Web Pro y mantenimiento.
- `PROJECTS`: nombres, categorías, textos, etiquetas y enlaces de portfolio. Los proyectos son conceptos, no clientes anunciados.

Todos los botones de WhatsApp usan esta configuración. Los botones de precios añaden el plan elegido. El formulario abre una conversación con un mensaje estructurado; el visitante revisa y envía desde WhatsApp. No necesita servidor, no envía datos automáticamente ni almacena consultas.

## Contenidos y diseño

- Logo: marcado `.brand` en `index.html` y favicon `assets/brand/favicon.svg`.
- Servicios: sección `#servicios` de `index.html`; estilos `.service-list`.
- Otros textos: `index.html`. Añade o actualiza su traducción exacta en `EN_TRANSLATIONS` de `js/i18n.js`.
- Portfolio: `PROJECTS` en `js/config.js`. Para añadir un proyecto, usa un identificador único y añade sus dos imágenes. Añade las traducciones de categoría, descripción y etiquetas en `js/i18n.js`.
- Capturas: `assets/projects/ID.webp` (1440 px) e `ID-720.webp` (720 px). Conserva el encuadre superior y comprime en WebP. El navegador selecciona la resolución adecuada. Hotaru incluye una captura móvil independiente.
- Colores de cada proyecto: `.project-ID .project-visual` en `css/style.css`.
- CSS: variables/base, secciones, componentes de portfolio/servicios, adaptación responsive y movimiento reducido.

## Probar localmente

Desde esta carpeta: `python3 -m http.server 4173` y abre `http://localhost:4173/`.

Comprueba ES/EN, navegación, móvil, FAQ, precios y mensaje de WhatsApp. No hace falta enviar un mensaje para verificar el enlace.

## Publicar actualizaciones en GitHub Pages

Repositorio: https://github.com/nyra25346-dotcom/studio-web

1. Sube el contenido de esta carpeta a la raíz de la rama `main`, conservando carpetas y `.nojekyll`.
2. En Settings → Pages, mantén Deploy from a branch → `main` → `/ (root)`.
3. Espera al despliegue `pages build and deployment` en Actions.
4. Abre https://nyra25346-dotcom.github.io/studio-web/ y verifica el cambio. Incrementa el parámetro `?v=` de CSS/JS cuando actualices sus archivos para evitar caché antigua.

Si cambias dominio, actualiza canonical, og:url, robots.txt y sitemap.xml.

Fuentes Manrope locales; licencia en `assets/brand/OFL.txt`. No se añaden métricas, testimonios, marcas registradas ni colaboraciones inventadas.

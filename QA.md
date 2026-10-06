# Comprobaciones de entrega

Fecha: 5 de octubre de 2026.

- Las cinco páginas de proyectos se abrieron y se capturaron directamente en el navegador.
- Enlaces de proyecto: URLs exactas del encargo, pestaña nueva y `noopener noreferrer`.
- Anchuras de 375, 390, 430, 768 y 1440 px: la anchura del documento coincide con la ventana; no hay desplazamiento horizontal.
- Inspección visual del bloque principal en escritorio y móvil, y del portfolio móvil.
- Un H1; enlaces internos apuntan a destinos existentes; imágenes con texto alternativo y dimensiones.
- Menú móvil: abre, navega y vuelve a su estado cerrado con `aria-expanded=false`.
- FAQ: abre mediante el control nativo de despliegue.
- Formulario sin configurar: campos obligatorios, aviso explícito de solicitud no enviada y copia de consulta verificados. No se ha enviado información a terceros.
- JavaScript: comprobación de sintaxis satisfactoria.
- Archivos de imagen optimizados en WebP; carga diferida en portfolio; fuentes locales; sin dependencias de ejecución.

## Límites

No se ha realizado una auditoría formal de accesibilidad, medición Lighthouse ni prueba en dispositivos físicos. El soporte de movimiento reducido está implementado en CSS y JavaScript. Las integraciones de WhatsApp, redes y formulario necesitan los datos reales del propietario; la entrega de mensajes debe probarse después de conectarlas. GitHub Pages está configurado en `nyra25346-dotcom/studio-web`, desde `main` y la carpeta raíz. Se incluye la guía para futuras actualizaciones.

## Actualización bilingüe — 6 de octubre de 2026

Verificados ES → EN → ES, persistencia después de recargar, navegación móvil traducida, preservación de los campos del formulario, mensajes de formulario y copia en inglés. Sin desbordamiento horizontal en inglés a 375, 390, 430, 768, 1024 y 1440 px. Título de página y atributo `lang` sincronizados. Las capturas de proyectos mantienen el idioma original.

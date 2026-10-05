# STUDIO WEB

Web estática de una página, en español, para un estudio especializado en restaurantes. HTML, CSS y JavaScript sin dependencias de ejecución, sin base de datos y sin proceso de compilación. Preparada para GitHub Pages.

## Abrir y previsualizar

Abre `index.html` en un navegador. Para comprobar la copia al portapapeles y el formulario mediante HTTP, desde esta carpeta ejecuta:

```sh
python3 -m http.server 4173
```

Abre `http://localhost:4173`. No es necesario instalar paquetes. La copia al portapapeles requiere HTTPS o localhost; si no está disponible se muestra un mensaje claro.

## Estructura

- `index.html`: estructura, textos españoles, metadatos y datos estructurados.
- `css/style.css`: diseño, colores, adaptación a pantallas y movimiento reducido.
- `js/config.js`: datos comerciales, destinos, precios y proyectos.
- `js/main.js`: proyectos, menú móvil, precios, enlaces y formulario.
- `assets/projects/`: capturas reales de los cinco conceptos y vista móvil de Hotaru.
- `assets/brand/`: favicon provisional, tipografía local y licencia.
- `.nojekyll`: permite servir los archivos tal cual en GitHub Pages.

## Datos pendientes

El documento recibido no incluía la captura de Facebook ni el logo oficial. Se utiliza una marca tipográfica temporal `<sw/> STUDIO WEB`, basada en la descripción del encargo, y los colores indicados. No se han inventado teléfonos, correo, perfiles sociales, reseñas ni clientes. Los cinco trabajos se identifican como conceptos.

El formulario NO envía información hasta configurar un destino real. Los enlaces de contacto sin configurar llevan al formulario e indican que el canal no está disponible. El botón flotante lleva al contacto hasta añadir WhatsApp. Esta versión es una entrega de archivos; no se ha publicado en una cuenta de GitHub.

## Cambiar el logo

Guarda el logo transparente en `assets/brand/logo.svg` o `logo.png`. En las dos apariciones de `.brand` de `index.html`, sustituye `.brand-mark` por:

```html
<img class="official-logo" src="assets/brand/logo.svg" alt="" width="52" height="42">
```

Añade `.official-logo { width: 52px; height: 42px; object-fit: contain; }` al CSS. Conserva el texto STUDIO WEB y el nombre accesible del enlace. Sustituye también `assets/brand/favicon.svg` si tienes un favicon oficial.

## Colores y tipografía

Edita las variables `:root` al principio de `css/style.css`: `--bg`, `--surface`, `--blue`, `--bright`, `--muted`, `--border`. La tipografía Manrope se sirve localmente. Se incluyen dos pesos para mantener la carga ligera y Arial como alternativa. La licencia está en `assets/brand/OFL.txt`.

## WhatsApp, correo y redes sociales

Edita únicamente estos campos de `js/config.js`:

```js
WHATSAPP_NUMBER: '',
EMAIL: '',
INSTAGRAM_URL: '',
FACEBOOK_URL: '',
FORM_ENDPOINT: '',
```

- WhatsApp: introduce tu número real con código de país, sin el signo `+`, sin espacios y sin ceros de prefijo internacional.
- Correo: introduce tu dirección real. Se crea automáticamente un enlace `mailto:`.
- Instagram y Facebook: pega la URL HTTPS completa de tus perfiles.
- Deja vacío cualquier campo no disponible; no añadas enlaces ficticios.
- El mensaje inicial de WhatsApp se encuentra en la constante `message` de `js/main.js`.

## Precios

En `js/config.js`, cambia `PRICING.essential`, `PRICING.pro` y `PRICING.maintenance`. Los valores actuales son 249 €, 449 € y 19 €/mes. Las cifras de respaldo de `index.html` deben actualizarse también si deseas que los valores sean idénticos con JavaScript desactivado. El presupuesto debe concretar impuestos, dominio, alojamiento, alcance y costes de proveedores; no se ha supuesto un tratamiento fiscal.

## Proyectos y enlaces

La lista `PROJECTS` de `js/config.js` contiene nombre, categoría, texto, etiquetas y URL. Para añadir o quitar proyectos, añade o elimina un objeto. Su `id` coincide con el nombre de la captura (sin extensión). No uses espacios ni barras en el `id`. Los proyectos se numeran automáticamente; el tercero y quinto utilizan la presentación amplia. Cambia los textos dentro del objeto para adaptar cada caso. Actualiza también el bloque `noscript` de `index.html` si cambias la lista.

Todos los enlaces a proyectos se abren en pestaña nueva con `rel="noopener noreferrer"`. Las cinco URLs suministradas se conservan exactamente.

## Sustituir capturas

Capturas incluidas, tomadas directamente de las páginas facilitadas:

- `assets/projects/hotaru.webp`
- `assets/projects/hotaru-mobile.webp`
- `assets/projects/es-paella.webp`
- `assets/projects/vesuvio.webp`
- `assets/projects/la-riua.webp`
- `assets/projects/la-mesa.webp`

Las vistas de escritorio son de 1440 × 1000 píxeles; la móvil, 390 × 844. Sustituye cada archivo por una captura con esas dimensiones para evitar cambios de proporción. Se recomienda WebP de calidad 80–85. Si cambias de formato, actualiza las rutas en `index.html`, `js/main.js` y la imagen del bloque comparativo en `css/style.css`. Las capturas son de conceptos y conservan su condición de demostración. Los derechos de las fotografías y marcas corresponden a sus titulares; revisa las licencias del material de los proyectos antes de cualquier uso distinto del portfolio autorizado.

## Conectar el formulario

El comportamiento inicial es deliberadamente transparente: valida los campos, avisa de que no hay envío y permite copiar la consulta. No guarda datos ni envía solicitudes a un servidor no configurado.

Puedes utilizar un proveedor de formularios estáticos, por ejemplo Formspree, u otro destino HTTPS propio. Comprueba sus condiciones y límites gratuitos vigentes en su web. Para configurarlo:

1. Crea tu formulario en el servicio elegido y verifica el destinatario real.
2. Copia el endpoint HTTPS de envío en `FORM_ENDPOINT` de `js/config.js`.
3. El destino debe aceptar `POST` con `FormData`, permitir CORS desde tu dominio y responder con un estado HTTP correcto. La implementación solicita respuesta JSON mediante `Accept: application/json`.
4. Los nombres enviados son `nombre`, `restaurante`, `ciudad`, `telefono`, `web_actual` y `mensaje`. No se pide correo al visitante porque el encargo especifica el contacto por teléfono/WhatsApp.
5. Añade la información de privacidad que corresponda a tu negocio y al proveedor, usando datos reales del responsable. El texto del formulario está en `#form-notice`; no se ha inventado una política ni un responsable.
6. Realiza un envío de prueba y comprueba su recepción. El mensaje de éxito solo aparece tras una respuesta HTTP satisfactoria; eso confirma la aceptación del servidor, no la lectura por el destinatario.
7. Prueba también el estado de error. No publiques una clave privada en `config.js`: todo el código del sitio es público.

Para utilizar un destino que no admita CORS o un flujo diferente, adapta el controlador `submit` de `js/main.js` siguiendo la documentación del proveedor. El correo configurado en el pie no es automáticamente el destino del formulario.

## Cambiar los textos

La mayor parte del contenido está en `index.html`. Los textos de los proyectos están en `js/config.js`; los mensajes interactivos, en `js/main.js`. Mantén `lang="es"`, un solo H1 y títulos H2/H3 coherentes. La comparativa antes/después es ficticia y debe seguir identificándose como ilustrativa.

## SEO

Se incluyen título, descripción, Open Graph de texto, tarjeta X/Twitter de resumen, favicon y datos estructurados `ProfessionalService` sin reseñas ni valoraciones inventadas. Cuando tengas el dominio definitivo, puedes añadir la URL canónica y `og:url`. No se ha inventado una dirección web de publicación ni una imagen social. Añade datos de contacto a los datos estructurados solo cuando sean reales.

## Publicar gratis en GitHub Pages

1. Crea un repositorio en tu cuenta de GitHub.
2. Sube el CONTENIDO de esta carpeta a la raíz del repositorio: `index.html`, `assets`, `css`, `js`, `README.md` y `.nojekyll`. No subas una carpeta contenedora extra.
3. En **Settings → Pages**, elige publicar desde una rama, selecciona `main` y la carpeta `/ (root)` y guarda.
4. Espera a que GitHub muestre la URL de tu sitio. No requiere comandos de compilación ni un servidor backend.
5. Abre esa URL y comprueba imágenes, los cinco enlaces y las funciones de contacto ya configuradas.
6. Los cambios posteriores se publican al actualizar los archivos de esa rama.

Las rutas de recursos son relativas y funcionan tanto en un dominio propio como en una ruta de repositorio. No se ha añadido un dominio CNAME porque no se proporcionó uno.

## Accesibilidad y rendimiento

Menú móvil con diálogo nativo, cierre con Escape y recuperación del foco; controles con etiquetas; foco visible; salto al contenido; FAQ con `details/summary`; movimiento reducido; imágenes WebP con dimensiones; carga diferida fuera del primer bloque; tipografía local. No hay analítica, cookies añadidas, bibliotecas externas ni solicitudes a redes sociales al cargar la página. El formulario transmite datos solo al configurarse y enviarse explícitamente.

## Verificación de entrega

Comprobados los cinco conceptos, la ausencia de desbordamiento horizontal en 375, 390, 430, 768 y 1440 píxeles, los recursos locales, los enlaces internos, el menú móvil, el acordeón y el aviso/copia del formulario sin destino. La prueba de entrega real del formulario queda pendiente hasta configurar tu proveedor. El documento `QA.md` resume los límites de estas comprobaciones.

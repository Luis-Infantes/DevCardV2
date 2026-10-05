# DESPLIEGUE EN VERCEL

- Antes del despliegue final aproveché para realizar una actualización visual de la página. La idea es que, cada vez que se modifica la arquitectura interna del proyecto, se aproveche también para darle una nueva imagen de cara al usuario.

1) Entramos en Vercel e iniciamos sesión con nuestra cuenta de GitHub para facilitar la integración con el repositorio.

2) Seleccionamos el plan **Hobby** en caso de que el proyecto tenga poco tráfico y sea de uso personal.

3) En la ventana **Import Git Repository** seleccionamos **GitHub**.

4) Debemos instalar Vercel en GitHub para permitir el acceso al repositorio.

5) Aprovechamos este paso para conceder acceso únicamente al repositorio que queremos desplegar.

6) Es posible que GitHub solicite confirmar la operación más de una vez durante el proceso de instalación.

7) Si no tenemos activada la autenticación multifactor, es posible que aparezca una ventana recomendando configurarla.

8) Una vez completada la instalación, regresaremos al menú anterior donde veremos el proyecto disponible para importar mediante el botón **Import**.

9) Seleccionamos **Deploy** para iniciar el despliegue del proyecto.

10) Si el despliegue finaliza correctamente, pulsamos **Continue to Project**.

11) Vercel nos llevará a una pantalla donde veremos el proyecto desplegado junto con una URL gratuita generada automáticamente para acceder a la aplicación.

12) Esta URL deberá añadirse posteriormente a la configuración **CORS** de Azure Functions para permitir la comunicación entre el Front y la API.

13) En este punto tendremos una arquitectura muy similar a la utilizada anteriormente con Render, utilizando una URL gratuita para uso personal y pruebas.

14) El siguiente paso consistirá en adquirir un dominio personalizado y asociarlo al proyecto.

---

## CONFIGURACIÓN DEL DOMINIO PERSONALIZADO

1) Desde el proyecto desplegado accedemos a:

```
Settings → Domains
```

2) Utilizamos el buscador de dominios para comprobar la disponibilidad del dominio deseado.

3) Una vez localizado y adquirido, seleccionamos la opción para asociarlo al proyecto.

4) Vercel generará automáticamente los certificados SSL necesarios para habilitar HTTPS.

5) Esperamos a que el dominio aparezca con el estado:

```
Valid Configuration
```

6) Una vez validado, comprobamos que la aplicación carga correctamente utilizando el nuevo dominio.

---

## CONFIGURACIÓN DE CORS PARA EL DOMINIO

1) Volvemos a Azure Portal y accedemos a la Azure Function.

2) Entramos en la configuración:

```
Settings → CORS
```

3) Añadimos el nuevo dominio personalizado.

Por ejemplo:

```
https://midominio.com
```

4) Si utilizamos también la versión con `www`, añadimos igualmente:

```
https://www.midominio.com
```

5) Guardamos la configuración.

6) Esperamos unos minutos para que los cambios se propaguen.

7) Finalmente verificamos que la aplicación puede consumir correctamente la API sin errores de CORS.

---

## NOTAS

1) Vercel detecta automáticamente los cambios realizados en GitHub.

2) Cada vez que realicemos cambios en el Front bastará con ejecutar:

```
git add .
git commit -m "Descripción del cambio"
git push origin main
```

3) Vercel realizará automáticamente un nuevo despliegue sin necesidad de publicar manualmente.

4) Si añadimos archivos físicos al proyecto, como imágenes, PDFs, iconos o documentos descargables, será necesario subirlos también al repositorio GitHub para que Vercel pueda incluirlos en el despliegue.

5) Cuando se utilice un dominio personalizado, es recomendable mantener también activa la URL generada por Vercel como alternativa y para tareas de validación o pruebas.

# DESPLIEGUE DE AZURE FUNCTION EN AZURE

## CREACIÓN DE AZURE FUNCTION EN AZURE

1) Entramos en nuestra cuenta de Azure para crear una Azure Function junto con un Grupo de Recursos para el proyecto.

2) Indicamos el nombre de la aplicación y la región. Como recomendación, **Sweden Central** suele funcionar correctamente.

3) Seleccionamos el tipo **.NET**.

4) Elegimos la versión 8 si el proyecto ha sido desarrollado en .NET 8. Si aparece como obsoleta, tendremos que seleccionar una versión superior y actualizar el proyecto.

5) Como recomendación para evitar este problema, podemos verificar previamente qué versiones están disponibles en Azure y crear directamente el proyecto en una versión compatible con la que utilizaremos posteriormente en la nube.

6) En la sección de implementación es muy importante habilitar **GitHub** para poder actualizar el proyecto desde el repositorio.

7) Tendremos que autorizar GitHub, seleccionando organización, repositorio y rama donde publicaremos el proyecto.

8) Una vez creado el Grupo de Recursos, pasamos a configurar las variables de entorno.

---

# VARIABLES DE ENTORNO

1) Accedemos a:

```
Configurar → Variables de entorno → Agregar
```

2) Creamos las cinco variables que tenemos en el archivo `local.settings.json` del proyecto.

3) Utilizamos exactamente los mismos nombres. Se recomienda copiar y pegar para evitar errores.

4) Aplicamos los cambios y guardamos.

---

# DESPLIEGUE

1) Abrimos el proyecto desde nuestro editor de código, en este caso Visual Studio.

2) Sobre el proyecto, hacemos clic derecho y seleccionamos **Publicar**.

3) Seleccionamos como destino **Azure**.

4) Elegimos **Aplicación de Funciones** como destino específico.

5) Seleccionamos la Azure Function creada anteriormente y pulsamos **Finalizar**.

6) Una vez desplegada correctamente la aplicación, volvemos a Azure para localizar la Function.

7) Debemos obtener la dirección URL para verificar que se visualiza correctamente la información de la base de datos.

8) Veremos varias URLs. Utilizaremos la que aparece como **Default**.

9) Esta misma URL será la que utilizaremos posteriormente en el Front, sustituyendo la URL local dentro del archivo:

```
devcard.service.ts
```

10) Antes de ejecutar el proyecto, debemos acceder a Azure y localizar la configuración **CORS** dentro de nuestra Azure Function. Allí añadiremos:

```
http://localhost:5173
```

Esto permitirá que las peticiones realizadas desde esta dirección sean aceptadas por la Azure Function.

11) Guardamos la configuración y ejecutamos el proyecto para verificar que no existen errores. La actualización de la configuración puede tardar varios minutos en aplicarse.

---

# NOTAS

1) Si el Front se despliega posteriormente en otra plataforma como Vercel o mediante un dominio personalizado, será necesario añadir también dichas URLs en la configuración de CORS.

2) Es recomendable comprobar directamente la URL de la Azure Function desde el navegador antes de realizar pruebas desde React, para verificar que la API devuelve correctamente el contenido JSON esperado.

3) Si se produce un error de tipo **CORS**, normalmente significa que la URL desde la que se está realizando la petición no ha sido añadida todavía a la lista de orígenes permitidos dentro de Azure.

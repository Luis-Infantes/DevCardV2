## DESPLIEGUE DE AZURE FUNCTION EN AZURE

# CREACION DE AZURE FUNCTION EN AZURE

1) Entramos en nuestra cuenta de Azure para crear una Azure Function junto con un grupo de recursos para el proyecto

2) Nombre de la aplicacion / Región (Sweden central, casi nunca falla)

3) Del tipo .NET

4) Versión 8 si el proyecto lo hiciste en 8. Si sale como obsoleta tendrás que elegir otra superior actualizar el proyecto

5) Como recomendación para evitar este problema se podría verificar que versiones hay disponibles en Azure para crear el proyecto directamnente con la versión de Azure que luego usaremos y así evitar problemas de versiones

6) En implementación muy importante habilitar GitHub para poder actualizar el repositorio

7) Tendremos que autorizar desde Github, seleccionamos organizacion, repositorio y la rama donde colgaremos el proyecto

8) Creado el grupo de recursos pasamos a gestionar las variables de entorno


# VARIABLES DE ENTORNO

1) Configurar => Variables de entorno => Agregar

2) Creamos las cinco variables que tenemos en el archivo local.settings.json de nuestro proyecto

3) Mismo nombre y se recomienda copiar y pegar para evitar errores

4) Aplicamos y guardamos

# DESPLIEGUE

1) Nos vamos a nuestro proyecto creado con nuestro editor que en este caso es Visual Studio

2) Tras abrirlo en la parte de la izquierda lo seleccionamos con el botón derecho y publicamos

3) Destino Azure

4) Destino especifico aplicacion de funciones

5) Seleccionamos la función creada y le damos a finalizar

6) Una vez desplegado sin fallo la aplicación, nos vamos a Azure para buscarla en nuestra Azure Function

7) Debemos de obtener la dirección de URL para verificar que se ve bien la base de datos

8) Veremos tres. Usamos la Default

9) Esta misma URL será la que usemos en el Front y cambiemos por la local en el archivo

```
	devcard.service.ts

```

10) Antes de ejecutar para ver si funciona, debemos ir a Azure a nuestro grupo de recursos para localizar CORS y añadir la url "http://localhost:5173", esto permite dar acceso a esta url.


11) Guardamos y ejecutamos el proyecto para ver si hay fallos. Puede tardar unos minutos

## DESPLIEGUE EN VERCEL

- Antes del despliegue final he aprovechado para actualizar la página de manera visual. La idea es que en cada versión ya que modificamos la arquitectura interna pues aprovehcar para darle una nueva imagen externa.

1) Entramos en Vercel y nos logamos con nuestra cuenta de GitHub para facilitar el acceso

2) Seleccionamos como Hobby en caso de que haya poco tráfico

3) En la ventana de Import Git Repository le damos a GitHub

4) Debemos de instalar Vercel en GitHub y así aprovechamos para darle acceso solo al repositorio deseado

5) Posiblemente tengas que realizar la operacion dos veces

6) Nos saldra una ventana de doble validación si es que no la tenemos activa

7) Después regresamos al menú anterior donde tendremos el proyecto listo para importar a traves del botón Import

8) Le damos damos a deploy para desplegar el proyecto

9) En caso de no haber fallo le damos a continue to project

10) Nos envía a un menu con el proyecto desplegado y una url gratuita con un nombre un tanto largo para visualizar la página

11) Esta URL la tendremos que colocar en la sección de CORS de Azure Functions para que nos de acceso.


12) Tendriamos básicamente el mismo despliegue que con Render. Una URL gratuita para uso personal
	
13) El siguiente paso sería comprar un Dominio y asociar finalmente el proyecto con el dominio.
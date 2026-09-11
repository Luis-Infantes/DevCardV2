# DEVCARD V2
Proceso de creación de la nueva versión del proyecto ya creado y desplegado DevCard

## ARQUITECTURA ACTUAL:

```
React
↓
Node.js (Express)
↓
MongoDB Atlas
↓
Render

```


## ARQUITECTURA OBJETIVO:

```
React
↓
Azure Functions
↓
SharePoint Lists

```

1) Mantenemos el Front con React
2) Cambiamos el back de Node,js a Azure functions
3) La base de datos la cambiamos de MongoDb Atlas a Listas de Sharepoint

----------------------------

## 1 - CREACION DE LA V2

- Creamos otra carpeta en el mismo disco duro con en el nombre de la nueva version
- En ella vamos a pegar un duplicado de la carpeta del front hecho en React en este caso
- A través de la consola nos colocamos en la carpeta del proyecto
- Ejecutamos en mi caso ejecuto npm install y npm run dev, para ejecutar el proyecto. Veremos que sigue conectado al back de node
- Fuera de la carpeta del front pero dentro de la del proyecto creamos otra carpeta llamada "Documents", que usaremos más adelante

---------

## 2 - ANALISIS DEL FRONTEND

- En este caso identificamos que el frontend consume un único endpoint que es "https://devcard-yzpn.onrender.com/api/devcard", mediante getDevCard()
- De esta forma la API devuelve un único objeto JSON con la información del CV interactivo

```
{
  "intro": {},
  "projects": [],
  "projectscloud": [],
  "projectsprimer": [],
  "education": [],
  "skillsfront": [],
  "skillsback": [],
  "skillscloud": [],
  "skillstool": []
}

```

----------


## 3 - ANALISIS DEL BACKEND ACTUAL

- La ruta principal es GET /api/devcard
- La API consulta a MongoDB:

```
const allDocs = await DevCardModel.find().lean();

```
- Y devuelve  allDocs[0]
- Básicamente la app esta construida alrededor de un único documento de MongoDB que contiene toda la información del CV

------

## 4 - ESTRATEGIA DE MIGRACION ELEGIDA

- Para este nueva versión vamos a utilizar una única lista de sharepoint para que guarde todos los datos como un JSON
- La migración será muy rápida
- Menos riesgo
- Menos cambios en React
-------------------------

## 5 - CREACIÓN DEL SITIO DE SHAREPOINT

- Creamos un sitio específico para este proyecto para que no se mezcle con otros y que sea privado ya que es de uso personal

## 6 - CREACION DE LA LISTA DE SHAREPOINT

- Acto seguido creamos una única lista con un Title por defecto y otra columna llamada JsonData que es un Text area para poder añadir varias líneas de texto

## 7 - EXPORTACION DE LOS DATOS ACTUALES

- La dirección de la API que encontramos en el front la colocamos en la url
- Obtenemos datos en formato JSON
- Estos datos los guardamos en un archivo de texto dentro de la carpeta documents
- Importante que el archivo de texto se guarde como archivo JSON y no como un TXT

## 8 CARGA DE LOS DATOS EN SHAREPOINT

- En la lista creamos un nuevo elemento.
- En Title añadimos CV por ejemplo
- En JsonData añadimos todo ese código Json que tenemos en el archivo que guaramos en la carpeta de Documents

## 9 CREACION DEL PROYECTO DE AZURE FUNCTIONS

- Creamos con el editor de código un proyecto de Azure Functions, en mi caso usaré Visual Studio 2022
- Le damos un nombre y como ruta la carpeta de DevCard02 para que cree el programa la de la función en el interior
- Configuración utilizada:

```

Runtime: .NET 8 Isolated
Template: HTTP Trigger
Authorization: Anonymous
Storage: Azurite

```


## 10 PRIMERA AZURE FUNCTION

- Hemos creado la funcion del tipo HTTP
- Configuración:

```

[Function("DevCard")]
public IActionResult Run(
    [HttpTrigger(
        AuthorizationLevel.Anonymous,
        "get",
        Route = "devcard")]
    HttpRequest req)

```

## 11 PRUEBA DE DEVOLUCION DE JSON

- Antes de conectarla a Sharepoint hemos realizado una validación tecnica
- Azure function leyo:

```
devcard.json

```
- Mediante:

```
File.ReadAllText(...)

```

- Devolvió el contenido como:

```
application/json

```

- De esta forma hemos podido acceder desde: "http://localhost:7280/api/devcard"









# DEVCARD V2

Proceso de creación de la nueva versión del proyecto ya creado y desplegado DevCard.

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

1) Mantenemos el Front con React.
2) Cambiamos el back de Node.js a Azure Functions.
3) La base de datos la cambiamos de MongoDB Atlas a listas de SharePoint.

----------------------------

## 1 - CREACIÓN DE LA V2

- Creamos otra carpeta en el mismo disco duro con el nombre de la nueva versión.
- En ella vamos a pegar un duplicado de la carpeta del Front hecha en React, en este caso.
- A través de la consola nos colocamos en la carpeta del proyecto.
- En mi caso ejecuto `npm install` y `npm run dev` para ejecutar el proyecto.
- Veremos que sigue conectado al back de Node.
- Fuera de la carpeta del Front pero dentro de la del proyecto creamos otra carpeta llamada "Documents", que usaremos más adelante.

---------

## 2 - ANÁLISIS DEL FRONTEND

- En este caso identificamos que el Frontend consume un único endpoint que es `https://devcard-yzpn.onrender.com/api/devcard` mediante `getDevCard()`.
- De esta forma, la API devuelve un único objeto JSON con la información del CV interactivo.

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

## 3 - ANÁLISIS DEL BACKEND ACTUAL

- La ruta principal es `GET /api/devcard`.
- La API consulta a MongoDB:

```
const allDocs = await DevCardModel.find().lean();
```

- Y devuelve `allDocs[0]`.
- Básicamente, la aplicación está construida alrededor de un único documento de MongoDB que contiene toda la información del CV.

------

## 4 - ESTRATEGIA DE MIGRACIÓN ELEGIDA

- Para esta nueva versión vamos a utilizar una única lista de SharePoint para guardar todos los datos como un JSON.
- La migración será muy rápida.
- Menor riesgo.
- Menos cambios en React.

-------------------------

## 5 - CREACIÓN DEL SITIO DE SHAREPOINT

- Creamos un sitio específico para este proyecto para que no se mezcle con otros y que sea privado, ya que es de uso personal.

## 6 - CREACIÓN DE LA LISTA DE SHAREPOINT

- Acto seguido, creamos una única lista con un campo Title por defecto y otra columna llamada JsonData, que es un Text Area para poder añadir varias líneas de texto.

## 7 - EXPORTACIÓN DE LOS DATOS ACTUALES

- La dirección de la API que encontramos en el Front la colocamos en la URL.
- Obtenemos los datos en formato JSON.
- Estos datos los guardamos en un archivo dentro de la carpeta Documents.
- Es importante que el archivo se guarde como JSON y no como TXT.

## 8 - CARGA DE LOS DATOS EN SHAREPOINT

- En la lista creamos un nuevo elemento.
- En Title añadimos "CV", por ejemplo.
- En JsonData añadimos todo el código JSON que tenemos en el archivo que guardamos en la carpeta Documents.

## 9 - CREACIÓN DEL PROYECTO DE AZURE FUNCTIONS

- Creamos un proyecto de Azure Functions con el editor de código. En mi caso, utilizaré Visual Studio 2022.
- Le damos un nombre y como ruta la carpeta DevCard02 para que el programa cree la carpeta de la Function en su interior.
- Configuración utilizada:

```
Runtime: .NET 8 Isolated
Template: HTTP Trigger
Authorization: Anonymous
Storage: Azurite
```

## 10 - PRIMERA AZURE FUNCTION

- Hemos creado la Function de tipo HTTP.
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

## 11 - PRUEBA DE DEVOLUCIÓN DE JSON

- Antes de conectarla a SharePoint hemos realizado una validación técnica.
- Azure Function leyó:

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

- De esta forma hemos podido acceder desde:

```
http://localhost:7280/api/devcard
```









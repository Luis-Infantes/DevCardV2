# CREACION DEL PRIMER MÉTODO DE GRAPH

## 1º - METODO DE PRUEBA

1) En primer lugar añadimos un primer método de prueba para verificar si podemos hablar con Microsoft Graph

```

    public async Task<string> TestConnectionAsync()
    {
        var sites = await _graphClient.Sites.GetAsync();

        return "Conexión con Microsoft Graph correcta";
    }
```

2) Con este método intentamos acceder a la colección de sitios de Sharepoint mediante Graph.

3) Siguiente paso sería añadir las dependencias correspondientes en el archivo program.cs

```
  //Registro de GraphService en el contenedor de dependencias de .NET
    builder.Services.AddSingleton<GraphService>();

```
4) En archivo de la Function1 modificamos el código para que se conecte con el archivo Graphservice

```
// Servicio propio encargado de comunicarse con Microsoft Graph
using DevCardFunctions.Services;

// Permite trabajar con peticiones HTTP (Request)
using Microsoft.AspNetCore.Http;

// Permite devolver respuestas HTTP (Ok, ContentResult, etc.)
using Microsoft.AspNetCore.Mvc;

// Atributos y elementos propios de Azure Functions
using Microsoft.Azure.Functions.Worker;

// Sistema de logs de Azure
using Microsoft.Extensions.Logging;

namespace DevCardFunctions;

// Clase que contiene la Azure Function
public class Function1
{
    // Servicio de logging inyectado por Azure
    private readonly ILogger<Function1> _logger;

    // Servicio que hemos creado para trabajar con Microsoft Graph
    private readonly GraphService _graphService;

    // Constructor de la clase
    // Azure inyecta automáticamente:
    // - Logger
    // - GraphService
    public Function1(
        ILogger<Function1> logger,
        GraphService graphService)
    {
        _logger = logger;
        _graphService = graphService;
    }

    // Nombre de la función dentro de Azure
    [Function("DevCard")]
    public async Task<IActionResult> Run(

        // Disparador HTTP
        // Anonymous = no requiere clave
        // "get" = admite peticiones GET
        // Route = URL personalizada
        [HttpTrigger(
            AuthorizationLevel.Anonymous,
            "get",
            Route = "devcard")]
        HttpRequest req)
    {
        // Llamamos a Microsoft Graph mediante nuestro servicio
        string result = await _graphService.TestConnectionAsync();

        // Devolvemos el resultado al navegador
        return new OkObjectResult(result);
    }
}


```

5) Guardamos y compilamos. Verificamos que no da ningún error. Ejecutamos la función  con ctrl + F5 y pegamos en el navegador la url que nos dan de esta forma vemos si el 
mensaje del método de prueba de GraphService funciona correctamente



## 2º - METODO DE PRUEBA

1) Sustituimos el código del método TestConnectionAsync por el siguiente

```

// Comprueba que podemos acceder al sitio SharePoint
public async Task<string> TestConnectionAsync()
{
    // Site ID guardado anteriormente
    string siteId = "AQUI_TU_SITE_ID";

    // Recuperamos información del sitio
    var site = await _graphClient.Sites[siteId]
        .GetAsync();

    // Devolvemos el nombre del sitio encontrado
    return $"Sitio encontrado: {site?.DisplayName}";
}


```

2) Sustituir AQUI_TU_SITE_ID por el número id del site que conseguimos anteriormente. Guardamos, compilamos y ejecutamnos para ver si funciona todo
y nos da el nombre de la lista

3) Si todo va bien pasamos al siguiente método de prueba


## 3º - METODO DE PRUEBA

1) Sustituimos nuevamente el código del método TestConnectionAsync por el siguiente

```

// Comprueba que podemos acceder a la lista DevCard
public async Task<string> TestConnectionAsync()
{
    // Id del sitio de SharePoint
    string siteId = "TU_SITE_ID";

    // Id de la lista DevCard
    string listId = "TU_LIST_ID";

    // Recuperamos información de la lista
    var list = await _graphClient
        .Sites[siteId]
        .Lists[listId]
        .GetAsync();

    // Devolvemos el nombre encontrado
    return $"Lista encontrada: {list?.DisplayName}";
}

```

2) Nos devolverá el nombre de la lista que tenemos creada en el sitio


## 4º - METODO DE PRUEBA

1) Sustituimos nuevamente el código del método TestConnectionAsync por el siguiente para verificar que la lista contiene elementos

```
// Comprueba que podemos recuperar elementos de la lista DevCard
public async Task<string> TestConnectionAsync()
{
    // Id del sitio de SharePoint
    string siteId = "TU_SITE_ID";

    // Id de la lista DevCard
    string listId = "TU_LIST_ID";

    // Recuperamos los elementos de la lista
    var items = await _graphClient
        .Sites[siteId]
        .Lists[listId]
        .Items
        .GetAsync();

    // Nos quedamos con el primer elemento encontrado
    var firstItem = items?.Value?.FirstOrDefault();

    // Devolvemos información básica del elemento
    return $"Elemento encontrado: {firstItem?.Id}";
}



```

---------------------------------

## 1º - METODO FINAL

1) Sustituimos nuevamente el código del método TestConnectionAsync por el siguiente para conseguir una lectura de los campos de cada elemento


```
// Comprueba que podemos leer los campos del elemento
public async Task<string> TestConnectionAsync()
{
    // Id del sitio SharePoint
    string siteId = "TU_SITE_ID";

    // Id de la lista DevCard
    string listId = "TU_LIST_ID";

    // Recuperamos el elemento con ID 1
    var item = await _graphClient
        .Sites[siteId]
        .Lists[listId]
        .Items["1"]
        .GetAsync(requestConfiguration =>
        {
            requestConfiguration.QueryParameters.Expand = new[] { "fields" };
        });

    // Obtenemos los campos del elemento
    var fields = item?.Fields?.AdditionalData;

    // Devolvemos el los datos en formato JSON o un mensaje de que no encontró nada
return fields?["JsonData"]?.ToString() ?? "JsonData no encontrado";
}


```

2) Si pusiste el nombre de prueba se recomienda cambiarlo por uno más cercano a su funcion

```
// Recupera el contenido JsonData almacenado en SharePoint
public async Task<string> GetDevCardAsync()

```

3) Abrimos una consola con la dirección de ruta de la function y ejecutamos el siguiente comando

```
func start --cors http://localhost:5173
```

4) La url que nos da la pegamos en una ventana y comprobamos que nos devuelva el archivo Json. Esta url será la que usemos en el archivo devcard.service.ts del "front" para conectar con la base de datos

5) Guardamos, compilamos y ejecutamos ambas consolas siempre abriendo una consola nueva, añadiendo la ruta de cada carpeta. Evitamos hacerlo desde el editor de código

6) Comando para ejecutar la function (back)

```
func start --cors http://localhost:5173
```
7) Comando para ejecutar el front

```
npm run dev
```

------------------------------------------

## NOTAS:

1) Los IDs que aparecen en el archivo GraphService de la function, se recomienda evitar ponerlos en este archivo y ponerlos junto con los demás IDs en el archivo local.settings.json
2) Todas las pruebas citadas anteriormente se pueden ahorrar y probar la final directamente pero en caso de haber algún error, se recomienda hacerlas previamente para ir sobre seguro





# CREACIÓN DEL PRIMER MÉTODO DE GRAPH

## 1º - MÉTODO DE PRUEBA

1) En primer lugar añadimos un método de prueba para verificar si podemos comunicarnos con Microsoft Graph.

```
public async Task<string> TestConnectionAsync()
{
    var sites = await _graphClient.Sites.GetAsync();

    return "Conexión con Microsoft Graph correcta";
}
```

2) Con este método intentamos acceder a la colección de sitios de SharePoint mediante Graph.

3) El siguiente paso sería añadir las dependencias correspondientes en el archivo `Program.cs`.

```
// Registro de GraphService en el contenedor de dependencias de .NET
builder.Services.AddSingleton<GraphService>();
```

4) En el archivo de la Function modificamos el código para que se conecte con el archivo `GraphService`.

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

5) Guardamos y compilamos. Verificamos que no haya errores. Ejecutamos la Function con `Ctrl + F5` y pegamos en el navegador la URL proporcionada. De esta forma comprobamos si el mensaje del método de prueba de `GraphService` funciona correctamente.

---

## 2º - MÉTODO DE PRUEBA

1) Sustituimos el código del método `TestConnectionAsync` por el siguiente:

```
// Comprueba que podemos acceder al sitio de SharePoint
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

2) Sustituimos `AQUI_TU_SITE_ID` por el identificador del sitio obtenido anteriormente. Guardamos, compilamos y ejecutamos para comprobar que todo funciona correctamente y nos devuelve el nombre del sitio.

3) Si todo funciona correctamente, pasamos al siguiente método de prueba.

---

## 3º - MÉTODO DE PRUEBA

1) Sustituimos nuevamente el código del método `TestConnectionAsync` por el siguiente:

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

2) Nos devolverá el nombre de la lista que tenemos creada en el sitio.

---

## 4º - MÉTODO DE PRUEBA

1) Sustituimos nuevamente el código del método `TestConnectionAsync` por el siguiente para verificar que la lista contiene elementos.

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

---

## MÉTODO FINAL

1) Sustituimos nuevamente el código del método `TestConnectionAsync` por el siguiente para conseguir una lectura de los campos de cada elemento.

```
// Comprueba que podemos leer los campos del elemento
public async Task<string> TestConnectionAsync()
{
    // Id del sitio de SharePoint
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

    // Devolvemos los datos en formato JSON o un mensaje indicando que no se encontró nada
    return fields?["JsonData"]?.ToString() ?? "JsonData no encontrado";
}
```

2) Si has utilizado un nombre de prueba, se recomienda cambiarlo por uno más acorde a su función.

```
// Recupera el contenido JsonData almacenado en SharePoint
public async Task<string> GetDevCardAsync()
```

3) Abrimos una consola en la ruta de la Function y ejecutamos el siguiente comando:

```
func start --cors http://localhost:5173
```

4) La URL que nos proporcione la pegamos en una ventana del navegador y comprobamos que devuelve correctamente el archivo JSON. Esta será la URL que utilizaremos en el archivo `devcard.service.ts` del Front para conectar con la base de datos.

5) Guardamos, compilamos y ejecutamos ambas consolas. Se recomienda abrir siempre una consola nueva para cada proyecto y situarse en la carpeta correspondiente. Es preferible hacerlo desde consola en lugar de ejecutarlo desde el editor de código.

6) Comando para ejecutar la Function (Back):

```
func start --cors http://localhost:5173
```

7) Comando para ejecutar el Front:

```
npm run dev
```

---

## NOTAS

1) Los identificadores utilizados en el archivo `GraphService` se recomienda almacenarlos en `local.settings.json` junto con el resto de variables de configuración, evitando así dejar valores fijos en el código.

2) Todas las pruebas anteriores pueden omitirse y probar directamente el método final. Sin embargo, en caso de error, se recomienda seguir los pasos de validación descritos para identificar el origen del problema de forma más sencilla.

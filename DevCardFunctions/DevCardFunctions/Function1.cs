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
        string result = await _graphService.GetDevCardAsync();

        // Devolvemos el resultado que es un JSON
        return new ContentResult
        {
            Content = result,
            ContentType = "application/json",
            StatusCode = 200
        };
    }
}
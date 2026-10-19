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
        //// Llamamos a Microsoft Graph mediante nuestro servicio
        //var intro = await _graphService.GetIntroAsync();
        //var skills = await _graphService.GetSkillsAsync();
        //var certifications = await _graphService.GetCertificationsAsync();
        //var projects = await _graphService.GetProjectsAsync();
        //var projectSkills = await _graphService.GetProjectSkillsAsync();
        //var professionalTrajectory = await _graphService.GetProfessionalTajectoryAsync();
        //var formalEducation = await _graphService.GetFormalEducationAsync();
        //var additionalTraining = await _graphService.GetAdditionalTrainingAsync();
        //var languages = await _graphService.GetLanguagesAsync();
        //var Networks = await _graphService.GetNetWorksAsync();

        //// Devolvemos los objetos como JSON
        //return new OkObjectResult(new
        //{
        //    intro,
        //    skills,
        //    certifications,
        //    projects,
        //    projectSkills,
        //    professionalTrajectory,
        //    formalEducation,
        //    additionalTraining,
        //    languages,
        //    Networks
        //});


        // Llamamos a Microsoft Graph mediante nuestro servicio
        var result = await _graphService.GetDevCardAsync();

        // Devolvemos el objeto completo de una manera mucho más limpia
        return new OkObjectResult(result);

    }
}
// Librería que nos permite autenticarnos contra Entra ID
using Azure.Identity;
using Microsoft.Extensions.Configuration;
using DevCardFunctions.Models;


// Cliente oficial de Microsoft Graph
using Microsoft.Graph;
using System.Text.Json;
using Microsoft.AspNetCore.Http.Features;

namespace DevCardFunctions.Services;

// Servicio encargado de comunicarse con Microsoft Graph
public class GraphService
{
    // Permite leer configuración desde local.settings.json
    private readonly IConfiguration _configuration;

    // Cliente principal que utilizaremos para hacer peticiones a Graph
    private readonly GraphServiceClient _graphClient;

    // Constructor del servicio
    public GraphService(IConfiguration configuration)
    {
        // Guardamos la configuración recibida
        _configuration = configuration;

        // Leemos el Tenant ID desde local.settings.json
        string tenantId = _configuration["TenantId"]!;

        // Leemos el Client ID desde local.settings.json
        string clientId = _configuration["ClientId"]!;

        // Leemos el Client Secret desde local.settings.json
        string clientSecret = _configuration["ClientSecret"]!;

        // Creamos las credenciales necesarias para autenticarnos
        // contra Entra ID usando:
        // - Tenant ID
        // - Client ID
        // - Client Secret
        var credential = new ClientSecretCredential(
            tenantId,
            clientId,
            clientSecret);

        // Creamos el cliente de Microsoft Graph utilizando
        // las credenciales anteriores
        _graphClient = new GraphServiceClient(credential);
    }



    // Método para obtener los datos de Intro de Sharepoint
    public async Task<Intro> GetIntroAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista Intro
        string listId = _configuration["IntroListId"]!;

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

        return new Intro
        {
            FullName = fields?["intro_fullname"]?.ToString(),
            Title = fields?["intro_title"]?.ToString(),
            Description = fields?["intro_description"]?.ToString(),
            Image = fields?["intro_image"]?.ToString(),
            Link = fields?["intro_link"]?.ToString()
        };
    }


    // Método para obtener todas las skills de Sharepoint
    public async Task<List<Skill>> GetSkillsAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista Skills
        string listId = _configuration["SkillListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos las skills recuperadas
        var skills = new List<Skill>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos una nueva Skill a la colección
            skills.Add(new Skill
            {
                Id = Convert.ToInt32(item.Id),
                Order = Convert.ToInt32(fields?["skill_order"]),
                Name = fields?["skill_name"]?.ToString(),
                Category = fields?["skill_category"]?.ToString(),
                Image = fields?["skill_image"]?.ToString()
            });
        }

        // Devolvemos la colección completa
        return skills;
    }


    // Método para obtener todos los certificados de Sharepoint
    public async Task<List<Certification>> GetCertificationsAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista certifications
        string listId = _configuration["CertificationListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos los certificados recuperados
        var certifications = new List<Certification>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos un nuevo certificado a la coleccion
            certifications.Add(new Certification
            {
                Order = Convert.ToInt32(fields?["cert_order"]),
                Title = fields?["cert_title"]?.ToString(),
                Image = fields?["cert_image"]?.ToString(),
                Date = fields?["cert_date"]?.ToString(),
                Link = fields?["cert_link"]?.ToString(),
            });
        }

        // Devolvemos la colección completa
        return certifications;
    }


    // Método para obtener todos los proyectos de Sharepoint
    public async Task<List<Project>> GetProjectsAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista projects
        string listId = _configuration["ProjectListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos los proyectos recuperados
        var projects = new List<Project>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos un nuevo proyecto a la coleccion
            projects.Add(new Project
            {
                Id = Convert.ToInt32(item.Id),
                Order = Convert.ToInt32(fields?["project_order"]),
                Title = fields?["project_title"]?.ToString(),
                Description = fields?["project_description"]?.ToString(),
                Link = fields?["project_link"]?.ToString(),
                LinkVideo = fields?["project_videolink"]?.ToString(),
                Image = fields?["project_image"]?.ToString(),


            });
        }

        // Devolvemos la colección completa
        return projects;
    }


    // Método para obtener todos los proyectos con skill asociados de Sharepoint
    public async Task<List<ProjectSkill>> GetProjectSkillsAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista projectskills
        string listId = _configuration["ProjectSkillListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos los projectskills recuperados
        var projectSkills = new List<ProjectSkill>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos un nuevo projectskill a la coleccion
            projectSkills.Add(new ProjectSkill
            {
                // Los campos Lookup de SharePoint se devuelven mediante Graph
                // con el sufijo "LookupId" en lugar del nombre original.
                // Ejemplo:
                // project_id -> project_idLookupId
                // skill_id   -> skill_idLookupId

                ProjectId = fields?["project_idLookupId"]?.ToString(),
                SkillId = fields?["skill_idLookupId"]?.ToString(),

            });
        }

        // Devolvemos la colección completa
        return projectSkills;
    }


    // Método para obtener todos los datos de professional trajectory de Sharepoint
    public async Task<List<ProfesionalTrajectory>> GetProfessionalTajectoryAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista professional trajectory
        string listId = _configuration["ProfessionalTrajectoryListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos los datos recuperados
        var professionalTajectory = new List<ProfesionalTrajectory>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos un nuevo registro a la coleccion
            professionalTajectory.Add(new ProfesionalTrajectory
            {
                Order = Convert.ToInt32(fields?["trajec_order"]),
                Image = fields?["traject_image"]?.ToString(),
                Date = fields?["traject_date"]?.ToString(),
                Description = fields?["traject_description"]?.ToString(),
            });
        }

        // Devolvemos la colección completa
        return professionalTajectory;
    }



    // Método para obtener todos los registros de formacion de Sharepoint
    public async Task<List<FormalEducation>> GetFormalEducationAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista registros de formacion
        string listId = _configuration["FormalEducationListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos los registros de formacion recuperados
        var formaleducation = new List<FormalEducation>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos un nuevo certificado a la coleccion
            formaleducation.Add(new FormalEducation
            {
                Order = Convert.ToInt32(fields?["education_order"]),
                Title = fields?["education_title"]?.ToString(),
                Description = fields?["education_description"]?.ToString(),
                Image = fields?["education_image"]?.ToString(),
                Link = fields?["education_link"]?.ToString(),
                Date = fields?["education_date"]?.ToString(),
                
            });
        }

        // Devolvemos la colección completa
        return formaleducation;
    }



    // Método para obtener todos los registros de formación adiccional de Sharepoint
    public async Task<List<AdditionalTraining>> GetAdditionalTrainingAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista registros
        string listId = _configuration["AdditionalTrainingListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos los registros recuperados
        var additionalTraining = new List<AdditionalTraining>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos un nuevo registro a la coleccion
            additionalTraining.Add(new AdditionalTraining
            {
                Order = Convert.ToInt32(fields?["training_order"]),
                Title = fields?["training_title"]?.ToString(),
                Description = fields?["training_description"]?.ToString(),
                Link = fields?["training_link"]?.ToString(),
                Image = fields?["training_image"]?.ToString(),
                Date = fields?["training_date"]?.ToString(),
                
            });
        }

        // Devolvemos la colección completa
        return additionalTraining;
    }



    // Método para obtener todos los registros la lista Lenguages de Sharepoint
    public async Task<List<Language>> GetLanguagesAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista lenguages
        string listId = _configuration["LanguageListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos los certificados recuperados
        var language = new List<Language>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos un nuevo registro a la coleccion
            language.Add(new Language
            {
                Order = Convert.ToInt32(fields?["language_order"]),
                Image = fields?["language_image"]?.ToString(),
                Title = fields?["language_title"]?.ToString(),
                Level = fields?["language_level"]?.ToString(),
                Link = fields?["language_link"]?.ToString(),
            });
        }

        // Devolvemos la colección completa
        return language;
    }




    // Método para obtener todos los registros de la lista Networks de Sharepoint
    public async Task<List<Network>> GetNetWorksAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["NewSiteId"]!;

        // Id de la lista registros
        string listId = _configuration["NetworkListId"]!;

        // Recuperamos todos los elementos de la lista
        var items = await _graphClient
            .Sites[siteId]
            .Lists[listId]
            .Items
            .GetAsync(requestConfiguration =>
            {
                requestConfiguration.QueryParameters.Expand = new[] { "fields" };
            });

        // Lista donde almacenaremos los registros recuperados
        var networks = new List<Network>();

        // Recorremos todos los registros devueltos por SharePoint
        foreach (var item in items!.Value!)
        {
            // Obtenemos las columnas del elemento actual
            var fields = item.Fields?.AdditionalData;

            // Añadimos un nuevo registro a la coleccion
            networks.Add(new Network
            {
                Order = Convert.ToInt32(fields?["network_order"]),
                Image = fields?["network_image"]?.ToString(),
                Title = fields?["network_title"]?.ToString(),
                Link = fields?["network_link"]?.ToString(),
            });
        }

        // Devolvemos la colección completa
        return networks;
    }





    //Construimos un objeto DevCard usando todos los métodos que hemos creado
    public async Task<DevCard> GetDevCardAsync()
    {
        var projects = await GetProjectsAsync();
        var projectSkills = await GetProjectSkillsAsync();
        var skills = await GetSkillsAsync();

        foreach (var project in projects)
        {
            var relatedSkills = projectSkills
                .Where(ps => ps.ProjectId == project.Id.ToString())
                .Select(ps => skills.FirstOrDefault(s => s.Id.ToString() == ps.SkillId))
                .Where(s => s != null)
                .Select(s => s!.Image!)
                .ToList();

            project.Tech = relatedSkills;
        }


        return new DevCard
        {
            Intro = await GetIntroAsync(),
            Certifications = await GetCertificationsAsync(),
            Skills = await GetSkillsAsync(),
            Projects = projects,
            //ProjectSkills = await GetProjectSkillsAsync(),
            ProfessionalTrajectory = await GetProfessionalTajectoryAsync(),
            FormalEducation = await GetFormalEducationAsync(),
            AdditionalTraining = await GetAdditionalTrainingAsync(),
            Languages = await GetLanguagesAsync(),
            Networks = await GetNetWorksAsync()
        };
    }



}

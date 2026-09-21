// Librería que nos permite autenticarnos contra Entra ID
using Azure.Identity;
using Microsoft.Extensions.Configuration;


// Cliente oficial de Microsoft Graph
using Microsoft.Graph;

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


    // Recupera el contenido JsonData almacenado en SharePoint
    public async Task<string> GetDevCardAsync()
    {
        // Id del sitio SharePoint
        string siteId = _configuration["SiteId"]!;

        // Id de la lista DevCard
        string listId = _configuration["ListId"]!;

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

}

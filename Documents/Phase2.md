# PREPARACION DE LA LLAVE DE ACCESO PARA QUE LA FUNCTION PUEDA IDENTIFICARSE

## CREACION DE UN NUEVO REGISTRO Y DAR PERMISOS

1) Entramos en la página: "entra.microsoft.com" para crear un registro de aplicaciones dentro de la sección de Entra ID.
2) Dentro de este registro nos vamos a permisos de API.
3) Agregar un nuevo permiso que sería de Microsoft Graph.
4) Seleccionamos la pestaña de permisos de la aplicacion.
5) Buscamos Sites => Sites.Read.All y agregamos permisos.
6) En el mismo sitio nos vamos a la pestaña de "Conceder consentimiento de administrador para nombre-dominio".
7) Esto nos da consentimiento por parte del admin al permiso seleccionado.
8) En el mismo sitio nos vamos a la pestaña del lateral de "Información general".
9) Copiamos el id. de aplicación (cliente) en un documento de texto para usarlo más adelante.
10) Copiamos el id. de directorio (inquilino) para lo mismo que el id de cliente.

##CREACIÓN DEL SECRETO:

1) Después necesitamos crear una credencial para que la Azure Function pueda autenticarse.
2) Nos vamos a "Certificados y secretos" y luego nos vamos a nuevo secreto de cliente.
3) Añadimos un nombre a la descripción y en expiración ponemos el máximo que son 24 meses.
4) Una vez creado debemos guardar el valor del secreto en el mismo documento de texto.

## OBTENCION DEL ID DEL SITIO DE SHAREPOINT

1) para conseguir el valor del Id del sitio de sharepoint, es a traves de la url https://NOMBREDOMINIO.sharepoint.com/sites/NOMBREDELSITIO/_api/site/id

## OBTENCION DEL ID DE LA LISTA DE SHAREPOINT

1) Podemos acceder a través de la dirección:  https://NOMBREDEDOMINIO.sharepoint.com/sites/NOMBRESITIO/_api/web/lists/GetByTitle('NOMBRELISTA')
2) En esta ocasión nos dará un código más amplio con lo cual mediante Ctrl + F y buscando ":Id", daremos con el Id que necesitamos

## Actualizar el proyecto de Azure Function

1) Abrimos el proyecto de la Azure Function e instalamos los paquetes de Microsoft.Graph y Azure Identity
2) En el archivo local.settings.json añadimos tres variables para añadir los ID del Tenant, Client y Secret anotado anteriormente
3) Después creamos una nueva carpeta llamada Services y en el interior un clase llamada GraphService donde añadimos el siguiente código

```
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
}

```

## EL PROCESO DE LO QUE HEMOS HECHO SERÍA DE LA SIGUIENTE FORMA

```
local.settings.json
        ↓
TenantId
ClientId
ClientSecret
        ↓
ClientSecretCredential
        ↓
Entra ID
        ↓
Obtiene Token
        ↓
GraphServiceClient
        ↓
Microsoft Graph
        ↓
SharePoint / Teams / Outlook / OneDrive
```

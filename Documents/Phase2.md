# PREPARACIÓN DE LA LLAVE DE ACCESO PARA QUE LA FUNCTION PUEDA IDENTIFICARSE

## CREACIÓN DE UN NUEVO REGISTRO Y ASIGNACIÓN DE PERMISOS

1) Entramos en la página `entra.microsoft.com` para crear un registro de aplicaciones dentro de la sección de Entra ID.
2) Dentro de este registro nos vamos a **Permisos de API**.
3) Agregamos un nuevo permiso de **Microsoft Graph**.
4) Seleccionamos la pestaña de permisos de la aplicación.
5) Buscamos **Sites → Sites.Read.All** y agregamos el permiso.
6) En el mismo apartado nos dirigimos a la pestaña **Conceder consentimiento de administrador para nombre-dominio**.
7) Esto nos permite obtener el consentimiento del administrador para el permiso seleccionado.
8) En el menú lateral accedemos a **Información general**.
9) Copiamos el **Id. de aplicación (cliente)** en un documento de texto para utilizarlo más adelante.
10) Copiamos el **Id. de directorio (inquilino)** para utilizarlo posteriormente.

## CREACIÓN DEL SECRETO

1) Después necesitamos crear una credencial para que la Azure Function pueda autenticarse.
2) Nos dirigimos a **Certificados y secretos** y seleccionamos **Nuevo secreto de cliente**.
3) Añadimos un nombre en la descripción y, en expiración, seleccionamos el máximo permitido, que son 24 meses.
4) Una vez creado, debemos guardar el valor del secreto en el mismo documento de texto.

## OBTENCIÓN DEL ID DEL SITIO DE SHAREPOINT

1) Para conseguir el valor del Id. del sitio de SharePoint, se puede utilizar la siguiente dirección:

```
https://NOMBREDOMINIO.sharepoint.com/sites/NOMBREDELSITIO/_api/site/id
```

## OBTENCIÓN DEL ID DE LA LISTA DE SHAREPOINT

1) Podemos acceder mediante la dirección:

```
https://NOMBREDEDOMINIO.sharepoint.com/sites/NOMBRESITIO/_api/web/lists/GetByTitle('NOMBRELISTA')
```

2) En esta ocasión se devolverá un código más amplio, por lo que mediante `Ctrl + F` y buscando `:Id`, encontraremos el identificador que necesitamos.

## ACTUALIZAR EL PROYECTO DE AZURE FUNCTION

1) Abrimos el proyecto de Azure Function e instalamos los paquetes de **Microsoft.Graph** y **Azure.Identity**.
2) En el archivo `local.settings.json` añadimos tres variables para almacenar los valores de **TenantId**, **ClientId** y **ClientSecret** obtenidos anteriormente.
3) Después creamos una nueva carpeta llamada `Services` y, en su interior, una clase llamada `GraphService`, donde añadimos el siguiente código:

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

    // Cliente principal que utilizaremos para realizar peticiones a Graph
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

## EL PROCESO DE LO QUE HEMOS HECHO SERÍA EL SIGUIENTE

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


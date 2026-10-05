# CREACIÓN DEL ARCHIVO SEED PARA ACTUALIZAR LA BASE DE DATOS

## 1º - PASO

1) Dentro del proyecto creamos una carpeta llamada **Seeder** y dentro añadimos un duplicado del archivo Seeder que usamos en la versión 01 del proyecto.
2) Lo abrimos con el editor de código y eliminamos todo lo que haga referencia a conectarse con MongoDB.
3) Además, el objeto que vamos actualizando lo metemos dentro de una constante que, en este caso, llamamos `devCard`.
4) Desde la ruta del archivo abrimos una consola y comenzamos instalando lo siguiente:

```
npm init -y
```

5) Esto creará el archivo `package.json`.

```
npm install @azure/identity @microsoft/microsoft-graph-client
```

6) Esto también requiere un archivo `.env`. En caso de que no exista, tendremos que crearlo manualmente desde el editor y añadir lo siguiente:

```
TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx

SITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
LIST_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

```
npm install --save-dev @types/node
```

7) Se encarga de instalar los tipos de TypeScript para Node.js.

```
npm install dotenv
```

8) Se encarga de instalar la librería `dotenv`, que sirve para leer variables desde un archivo.

9) Crearemos un archivo `tsconfig.json` y añadiremos:

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "strict": false,
    "skipLibCheck": true
  }
}
```

10) También se puede crear mediante el siguiente comando:

```
npx tsc --init
```

---

## 2º - PASO

1) Tendremos que añadir las importaciones manualmente:

```
import "dotenv/config";
import { ClientSecretCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
```

2) Dentro de la función añadimos el siguiente código, que deberá estar por encima de la constante `devCard`:

```
const credential = new ClientSecretCredential(
    process.env.TENANT_ID!,
    process.env.CLIENT_ID!,
    process.env.CLIENT_SECRET!
);
```

3) Acto seguido añadimos el siguiente código para verificar que obtenemos un token:

```
const token = await credential.getToken(
    "https://graph.microsoft.com/.default"
);

console.log(token?.token);
```

4) Abrimos una consola desde la carpeta del proyecto y ejecutamos el siguiente comando para comprobar que obtenemos un token:

```
npx ts-node devcard.seed.ts
```

5) Si obtenemos un token correctamente, añadimos el siguiente código para realizar una petición mediante `fetch` a Microsoft Graph:

```
const response = await fetch(
    `https://graph.microsoft.com/v1.0/sites/${process.env.SITE_ID}`,
    {
        headers: {
            Authorization: `Bearer ${token?.token}`
        }
    }
);

const site = await response.json();

console.log(site.displayName);
```

6) Nos devolverá el nombre del sitio. En caso afirmativo, sustituimos el código por el siguiente:

```
const response = await fetch(
    `https://graph.microsoft.com/v1.0/sites/${process.env.SITE_ID}/lists/${process.env.LIST_ID}`,
    {
        headers: {
            Authorization: `Bearer ${token?.token}`
        }
    }
);

const list = await response.json();

console.log(list.displayName);
```

7) Nos devolverá el nombre de la lista. Si funciona correctamente, sustituimos el código por el siguiente, que nos devolverá el identificador del elemento:

```
const response = await fetch(
    `https://graph.microsoft.com/v1.0/sites/${process.env.SITE_ID}/lists/${process.env.LIST_ID}/items/1`,
    {
        headers: {
            Authorization: `Bearer ${token?.token}`
        }
    }
);

const item = await response.json();

console.log(item.id);
```

8) Finalmente actualizamos el código por el siguiente para poder realizar actualizaciones en la base de datos de SharePoint:

```
const jsonData = JSON.stringify(devCard);

const response = await fetch(
    `https://graph.microsoft.com/v1.0/sites/${process.env.SITE_ID}/lists/${process.env.LIST_ID}/items/1/fields`,
    {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token?.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            JsonData: jsonData
        })
    }
);

console.log(response.status);
```

9) Cada vez que realicemos una actualización ejecutaremos el siguiente comando. Si todo va correctamente, obtendremos un código de respuesta `200`.

```
npx ts-node devcard.seed.ts
```

---

## DAR PERMISOS DE ESCRITURA

1) Seguramente solo habremos concedido permisos de lectura, por lo tanto tendremos que repetir el proceso para añadir permisos de escritura.
2) Accedemos a:

```
https://entra.microsoft.com
```

3) Entra ID → Aplicaciones → Registros de aplicaciones.
4) Seleccionamos **DevCardFunctions**.
5) Permisos → Permisos de API.
6) Agregar nuevo permiso.
7) Microsoft Graph → Permisos de aplicación.
8) Buscamos **Sites.ReadWrite.All** y agregamos el permiso.
9) Deberemos conceder el consentimiento mediante **Conceder consentimiento de administrador para DeveloperMad** y verificar que el permiso ha sido aplicado correctamente.
10) Tras realizar este paso, procedemos a probar la actualización de la base de datos ejecutando tres consolas simultáneamente: una para el Back, otra para el Front y otra para el Seeder.

---

# NOTAS

1) Con este archivo en funcionamiento mantenemos el uso de Node.js para la gestión del Seeder de la base de datos.
2) Node.js queda fuera de la arquitectura principal, ya que el Back se gestiona mediante una Azure Function, pero lo mantenemos para esta funcionalidad específica.

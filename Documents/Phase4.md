# CREACIÓN DEL ARCHIVO SEED PARA ACTUALIZAR LA BASE DE DATOS

## 1º - PASO

1) Dentro del proyecto creamos una carpeta llamada "Seeder" y dentro añadimos un duplicado del archivo seeder que usamos en la versión 01 del proyecto.
2) Lo abrimos con el editor de código y borramos todo lo que haga referencia a conectarse con MongoDB
3) Además el objeto que vamos actualizando, lo metemos dentro de una constante que en este caso lo llamamos devCard
4) Desde la dirección del archivo abrimos una consola y comenzamos a instalar lo siguiente

```
  npm init -y
```
5) Para crear el archivo package.json

```
  npm install @azure/identity @microsoft/microsoft-graph-client
```

6) Se encarga de crear un archivo del tipo .env . En caso de que no lo cree, tendremos que hacerlo a mano desde el editor y añadir lo siguiente

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
7) Se encarga de instalar todos los tipos de TypeScript para Node.js

```
  npm install dotenv
```

8) Se encarga de instalar la librería dotenv, que sirve para leer variables desde un archivo

9) Crearemos un archivo tsconfig.json y añadimos

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
10) también se puede crear a través del siguiente comando

```
  npx tsc --init

```

-------------------------

## 2º - PASO

1) Tendremos que añadir las importaciones a mano

```
  import "dotenv/config";
  import { ClientSecretCredential } from "@azure/identity";
  import { Client } from "@microsoft/microsoft-graph-client";
```

2) Dentro de la función añadimos los siguiente. Que deberá de estar por encima de la constante devcard

```
      const credential = new ClientSecretCredential(

        process.env.TENANT_ID!,
        process.env.CLIENT_ID!,
        process.env.CLIENT_SECRET!

    );
```

3) Acto seguido añadimos el siguiente código para verificar que nos devuelva un token

```
      const token = await credential.getToken(
        "https://graph.microsoft.com/.default"
    );

    console.log(token?.token);
```

4) Abrimos una consola desde la dirección de los archivos y ejecutamos el siguiente comando para verificar que nos devuelva un token

```
  npx ts-node devcard.seed.ts
```
5) En caso de que nos devuelva un token, añadimos el siguiente código que usaremos una petición fetch para conectar con Microsoft Graph

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

6) Nos devolverá el nombre del sitio. En caso afirmativo sustituimos el código por el siguiente

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

7) Nos devolverá el nombre de la lista. En caso afirmativo sustituimos el código por el siguiente que nos devolverá 1

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

8) Finalmente actualizamos el código por el siguiente para poder realizar una actualización en la base de datos de sharepoint

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

9) Cada vez que hagamos una actualización, ejecutamos en la consola el siguiente comando y si todo va bien nos devolverá un 200

```
  npx ts-node devcard.seed.ts
```
-------------------------------

## DAR PERMISO DE ESCRITURA

1) Seguramente habremos solo dado permisos de lectura, por lo tanto tendremos que repetir el mismo proceso para dar permisos de escritura
2) Accedemos a https://entra.microsoft.com
3) Entra ID => Aplicaciones => Registros de aplicaciones
4) Seleccionamos DevCardFunctions
5) Permisos => Permisos de API
6) Agregar nuevo permiso
7) Microsoft Grap => Permisos de aplicacion
8) Buscamos Sites.ReadWrite.All y agregamos los permisos
9) Deberemos de conceder el consentimiento a traves de Conceder consentimiento de administrador para DeveloperMad y verificamos
10) Tras realizar este paso, procedemos a hacer pruebas de actualización de la base de datos, ejecutando tres consolas a la vez. Una para el back, otra para el front y otra para el seed

----------------------

# NOTAS:

1) Con este archivo en funcionamiento mantenemos el uso de Node.js para la gestión del seeder de la base de datos
2) Node.js se sale de la arquitectura principal ya que el back se gestiona a traves de una Azure Function, pero lo mantenemos para esta funcionalidad










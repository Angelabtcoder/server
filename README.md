# server ( NewsUserApp )

## Comenzando 馃殌

Este proyecto consiste en la realizaci贸n de una aplicaci贸n de noticias construida con Angular en el Frontend y NodeJS/Express del lado del servidor (Backend). 


Contiene 3 vistas. Una muestra listado de noticias organizadas en una columna y por fecha de publicaci贸n. Cada noticia contendr谩 un bot贸n para archivarla. Otra muestra un listado con las noticias archivadas igualmente organizadas y con un bot贸n para borrado. La tercera vista consta de un formulario para la introduci贸n de la noticia y su posterior almacenamiento en la base de datos.

Todos los eventos de estos botones se ver谩n reflejados automaticamente en la base de datos.

La base de datos utilizada es Mongodb y su soporte en Mongo Atlas. Consta de dos colecciones: News y Archivednew.


## Development server

Ejecutar con  `npm run start` para desarrollo. Se ejecutar谩 en  `http://localhost:3000/`. La aplicaci贸n se recargar谩 automaticamente al actualizar el c贸digo fuente.

## Construido con 馃洜锔?

* [Nodejs]- version 16.14.2(https://nodejs.org/es/)
* Express - versi贸n 4.16.1
* Cors
 
### Instalaci贸n 馃敡

Proceder a clonar la aplicaci贸n, tanto el frontend como el backend(https://github.com/Angelabtcoder/server.git)

```
git clone https://github.com/Angelabtcoder/news-user-app.git
```

```
git clone https://github.com/Angelabtcoder/server.git
```

Implementar la carpeta /node module con las dependencias con el comando:

```
npm install
```

Ejecutar ambos proyectos mediante el comando:

```
npm run start
```
En la variable de entorno "variables.env" se encuentra la URL de la base de datos Mongodb Atlas que utilizaremos, con documentos ya registrados.


## Screenshot 馃摉

El proyecto en el frontend presenta una arquitectura t铆pica de Angular, basada en componentes, modelos, servicios, cada uno en sus respectivas carpetas
y el fichero de rutas app-routing.modules.ts.

![Image 001](https://user-images.githubusercontent.com/77165242/165515964-34c7bb99-a988-440e-a621-906a24b63a1e.jpg)

![Image 002](https://user-images.githubusercontent.com/77165242/165515975-e87d3170-5c8a-4962-94f2-5a5267f97c4b.jpg)

![Image 003](https://user-images.githubusercontent.com/77165242/165515994-3c7d0fa2-556d-49dd-92eb-cd70b4a6ffda.jpg)




## Herramientas adicionales 馃洜锔?

Para verificar el acceso a la base de datos y los end points del servidor utilizamos la herramienta Insomnia y Mongo Compass:

![Insomnia](https://user-images.githubusercontent.com/77165242/165515654-d51325ca-27fe-4f17-8f65-9c13e0ef0968.jpg)

![compass](https://user-images.githubusercontent.com/77165242/165515790-a4d3a7be-afa1-48f0-9a54-33b782051009.jpg)

![AtlasMongo](https://user-images.githubusercontent.com/77165242/165515850-767ca91a-04fa-4fd3-b4fe-1911af024b69.jpg)


## Autora 鉁掞笍

* **Angela Blanco Terry** - [Angelabtcoder](https://github.com/Angelabtcoder)

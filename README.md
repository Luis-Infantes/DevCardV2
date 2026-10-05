# DevCardStudio

## 🇬🇧 English Version

### Overview

DevCardStudio is a personal portfolio and professional showcase application designed to present professional experience, certifications, technical skills, personal projects, and career progression through a modern and responsive web interface.

This version represents a major evolution of the project, introducing a new cloud-based architecture, improving maintainability, modernizing deployment processes, and enhancing the overall user experience.

---

## What's New

### Backend Modernization

The backend has been redesigned using **Azure Functions** as the API layer.

This approach provides:

- Reduced infrastructure management.
- Better scalability.
- Simplified maintenance.
- Native integration with Microsoft cloud services.

The project still maintains a **Node.js Seeder** process used to synchronize and generate the data consumed by the Azure Function.

---

## Data Layer

The application uses a **SharePoint List** as the primary data source.

The information is stored inside a SharePoint text area field using a JSON structure.

Key characteristics:

- JSON-based data storage.
- NoSQL-style structure.
- Flexible content management.
- Easy extensibility for future sections and features.
- No dedicated database server required.

---

## Frontend Improvements

The frontend continues to be built with:

- React
- TypeScript
- Bootstrap
- Vite

This version includes several improvements:

- Enhanced responsive design.
- Improved visual hierarchy.
- Better mobile experience.
- Layout optimizations.
- Improved content organization.
- New professional sections.

---

## New Content

The platform now provides a more complete professional profile including:

- Professional trajectory.
- Technical skills.
- Certifications.
- Personal projects.
- Contact information.
- Languages and continuous learning achievements.

---

## Deployment

The project architecture is currently composed of:

```
React + TypeScript
        │
        ▼
      Vercel
        │
        ▼
 Azure Functions
        │
        ▼
 Lista de SharePoint (Almacenamiento JSON)
```

--------------------------------------------------------------------------

# DevCardStudio

## 🇪🇸 Versión en Español

### Descripción General

DevCardStudio es una aplicación web personal diseñada para presentar experiencia profesional, certificaciones, competencias técnicas, proyectos personales y trayectoria profesional mediante una interfaz moderna y adaptable a cualquier dispositivo.

Esta versión representa una evolución importante del proyecto, incorporando una nueva arquitectura basada en la nube, mejorando la mantenibilidad, modernizando los procesos de despliegue y optimizando la experiencia general del usuario.

---

## Novedades

### Modernización del Backend

El backend ha sido rediseñado utilizando **Azure Functions** como capa principal de API.

Este enfoque proporciona:

- Menor gestión de infraestructura.
- Mejor escalabilidad.
- Mantenimiento simplificado.
- Integración nativa con los servicios cloud de Microsoft.

El proyecto sigue manteniendo un proceso de **Node.js Seeder** encargado de sincronizar y generar los datos consumidos posteriormente por la Azure Function.

---

## Capa de Datos

La aplicación utiliza una **Lista de SharePoint** como fuente principal de información.

Los datos se almacenan dentro de un campo de texto de SharePoint utilizando una estructura JSON.

### Características Principales

- Almacenamiento de datos basado en JSON.
- Estructura de tipo NoSQL.
- Gestión flexible del contenido.
- Fácil ampliación para futuras secciones y funcionalidades.
- Sin necesidad de una base de datos dedicada.

---

## Mejoras en el Frontend

El frontend continúa desarrollado con:

- React
- TypeScript
- Bootstrap
- Vite

Esta versión incorpora diversas mejoras:

- Diseño responsive mejorado.
- Mayor jerarquía visual.
- Mejor experiencia en dispositivos móviles.
- Optimización de layouts.
- Mejor organización del contenido.
- Nuevas secciones profesionales.

---

## Nuevo Contenido

La plataforma ofrece ahora una visión más completa del perfil profesional incluyendo:

- Trayectoria profesional.
- Competencias técnicas.
- Certificaciones.
- Proyectos personales.
- Información de contacto.
- Idiomas y formación continua.

---

## Despliegue

La arquitectura actual del proyecto está compuesta por:

```
React + TypeScript
        │
        ▼
      Vercel
        │
        ▼
 Azure Functions
        │
        ▼
 Lista de SharePoint (Almacenamiento JSON)
```




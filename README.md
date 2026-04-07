# Around The U.S. (Alrededor de los EE.UU.)

Proyecto frontend donde una página estática se transforma en una experiencia interactiva: perfil de usuario, galería de tarjetas con fotografías y ventanas emergentes (popups) para editar/agregar contenido.

## Demo

- GitHub Pages: https://alanfabz.github.io/web_project_around_es/

## Descripción

Este repositorio implementa la interfaz “Around The U.S.” siguiendo un diseño dado, con estilos organizados bajo metodología BEM y una base de JavaScript que permite renderizar dinámicamente tarjetas desde un array de datos.

## Características principales

- Diseño responsivo basado en HTML5 + CSS3.
- Estilos modulares por bloques (BEM) e importados desde [pages/index.css](./pages/index.css).
- Galería de tarjetas renderizada con JavaScript a partir de un array inicial de datos y un `<template>` HTML.
- Ventanas emergentes (popups):
  - Edición de perfil (funcional).
  - Creación de nuevas tarjetas (funcional).
  - Vista ampliada de imagen (funcional).
- Interacciones por tarjeta:
  - Like/Unlike con cambio visual.
  - Eliminación de tarjetas del DOM.
  - Apertura de imagen ampliada en modal al hacer clic en la foto.
- Manejo de datos incompletos con valores por defecto:
  - Nombre: `"Sin título"`.
  - Imagen: `"./images/placeholder.jpg"`.
- Marcado con atributos `aria-label` en botones para mejorar accesibilidad.

## Estado actual (Sprint 6 · Etapa final)

- Las tarjetas iniciales se generan dinámicamente desde `initialCards` usando el `<template id="card-template">`.
- El HTML no contiene tarjetas hardcodeadas dentro de `.cards__list`.
- El modal “Editar perfil” abre/cierra y actualiza Nombre y Acerca de mí desde el formulario.
- El modal “Nuevo lugar” abre/cierra y agrega una tarjeta como primer elemento en el contenedor.
- El modal de imagen muestra la versión ampliada de la tarjeta seleccionada.

## Tecnologías y herramientas

- HTML5 semántico
- CSS3
- JavaScript (DOM)
- Metodología BEM
- Normalize.css (base de estilos)
- Tipografías Inter incluidas en `vendor/fonts`

## Estructura del proyecto

```
web_project_around_es/
├─ blocks/        # CSS por bloque (BEM)
├─ images/        # Imágenes e íconos
├─ pages/         # Hoja de estilos principal (importa blocks)
├─ scripts/       # JavaScript del proyecto
├─ vendor/        # Fuentes y normalize.css
└─ index.html     # Página principal
```

## Cómo ejecutar el proyecto localmente

Opciones recomendadas:

1) Servidor estático local (Python)

```bash
python3 -m http.server 8080
```

Luego abre:

```
http://localhost:8080
```

2) Extensión “Live Server” (VS Code)

- Abre la carpeta del proyecto
- Ejecuta “Go Live”

## Detalles de implementación (render de tarjetas)

El render inicial se hace:

- Declarando un array de objetos `{ name, link }`.
- Clonando una tarjeta desde un `<template>` y asignando contenido/atributos antes de insertarla en el DOM.
- Insertando las tarjetas con `prepend(...)` para que lo más reciente quede arriba.

Además:

- `getCardElement()` utiliza parámetros predeterminados para tolerar datos incompletos.
- Los listeners de like/eliminar/abrir imagen se asignan al crear cada tarjeta.

## Roadmap (siguientes mejoras)

- Persistencia de tarjetas/likes (requiere back-end).
- Validación de formularios y UX adicional (p. ej., cerrar con Escape/overlay).

## Autor

- Alan Lozano

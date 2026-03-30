# Around The U.S. (Alrededor de los EE.UU.)

Proyecto frontend donde una página estática se transforma en una experiencia interactiva: perfil de usuario, galería de tarjetas con fotografías y ventanas emergentes (popups) para editar/agregar contenido.

## Descripción

Este repositorio implementa la interfaz “Around The U.S.” siguiendo un diseño dado, con estilos organizados bajo metodología BEM y una base de JavaScript que permite renderizar dinámicamente tarjetas desde un array de datos.

## Características principales

- Diseño responsivo basado en HTML5 + CSS3.
- Estilos modulares por bloques (BEM) e importados desde [pages/index.css](./pages/index.css).
- Galería de tarjetas renderizada con JavaScript a partir de un array inicial de datos.
- Ventanas emergentes (popups) incluidas en el DOM:
  - Edición de perfil (funcional).
  - Creación de nuevas tarjetas (pendiente de JS).
  - Vista ampliada de imagen (pendiente de JS).
- Marcado con atributos `aria-label` en botones para mejorar accesibilidad.

## Estado actual (Sprint 6 · Etapa 2)

- Las tarjetas se generan dinámicamente desde `initialCards` en [scripts/index.js](./scripts/index.js).
- El HTML ya no contiene tarjetas hardcodeadas dentro de `.cards__list`, lo que facilita el mantenimiento y el escalado.
- El modal “Editar perfil” abre/cierra con sus botones y permite actualizar Nombre y Acerca de mí desde el formulario.

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
- Creando cada tarjeta con `document.createElement(...)` y asignando clases BEM.
- Insertando los elementos en el contenedor `.cards__list`.

Esto permite que la UI se construya desde datos, preparando el camino para:

- agregar nuevas tarjetas desde formularios,
- eliminar tarjetas,
- gestionar likes,
- y abrir la vista ampliada de imagen.

## Roadmap (siguientes mejoras)

- Crear nuevas tarjetas desde el formulario “Nuevo lugar”.
- Like/Unlike y eliminación de tarjetas.
- Vista ampliada de imagen al hacer clic en una tarjeta.

## Autor

- Alan Fabz

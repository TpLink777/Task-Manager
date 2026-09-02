# 📝 Task-Manager

Una aplicación de línea de comandos (CLI) desarrollada con **Node.js** para gestionar tareas utilizando un archivo JSON como sistema de almacenamiento.

El proyecto implementa las operaciones básicas de un CRUD: crear, consultar, eliminar y actualizar tareas.

## 🚀 Funcionalidades

* Crear nuevas tareas.
* Listar todas las tareas registradas.
* Completar tareas mediante su ID.
* Eliminar tareas mediante su ID.
* Generación automática de IDs.
* Persistencia de datos mediante `tareas.json`.
* Validación de IDs y estados.
* Mensajes en consola diferenciados por colores.

## 🛠️ Tecnologías utilizadas

* **Node.js**
* **JavaScript**
* **File System (`fs`)**
* **Path (`path`)**
* **Chalk**

## 📁 Estructura

```text
├── index.js
├── tareas.json
├── package.json
└── README.md
```

## ⚙️ Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Instala las dependencias:

```bash
npm install
```

## 💻 Uso

La aplicación se ejecuta desde la terminal utilizando Node.js.

### Crear una tarea

```bash
node index.js add "Aprender Node.js"
```

La aplicación asignará automáticamente un ID:

```text
Tarea agregada con éxito (ID: 1)
```

### Listar tareas

```bash
node index.js list
```

Ejemplo:

```text
┌─────────┬────┬───────────────────┬────────────────┐
│ (index) │ id │ descripcion       │ estado         │
├─────────┼────┼───────────────────┼────────────────┤
│    0    │ 1  │ 'Aprender Node.js'│ 'No completado'│
└─────────┴────┴───────────────────┴────────────────┘
```

### Completar una tarea

```bash
node index.js complete 1
```

Esto cambia el estado de la tarea a:

```text
Completado
```

### Eliminar una tarea

```bash
node index.js delete 1
```

La tarea será eliminada del archivo `tareas.json`.

## 📦 Modelo de una tarea

Cada tarea utiliza la siguiente estructura:

```json
{
  "id": 1,
  "descripcion": "Aprender Node.js",
  "estado": "No completado"
}
```

## 🧠 Conceptos practicados

Este proyecto fue desarrollado como práctica de fundamentos de JavaScript y Node.js, especialmente:

* Manipulación de arrays.
* `push()`
* `map()`
* `filter()`
* `find()`
* `some()`
* Objetos y referencias.
* Funciones.
* Condicionales.
* `switch`.
* Argumentos de línea de comandos mediante `process.argv`.
* Lectura y escritura de archivos.
* Persistencia de información en JSON.
* Manejo básico de errores y validaciones.
* Módulos de Node.js.

## 🔄 Operaciones CRUD

| Operación | Comando    | Función            |
| --------- | ---------- | ------------------ |
| Create    | `add`      | Crear una tarea    |
| Read      | `list`     | Consultar tareas   |
| Update    | `complete` | Cambiar el estado  |
| Delete    | `delete`   | Eliminar una tarea |

## 🎯 Objetivo

El objetivo del proyecto es practicar la construcción de una aplicación funcional utilizando Node.js sin frameworks, trabajando directamente con la terminal, el sistema de archivos y estructuras de datos de JavaScript.

## 🔮 Posibles mejoras

Algunas funcionalidades que podrían incorporarse posteriormente:

* Editar la descripción de una tarea.
* Agregar diferentes estados.
* Filtrar tareas por estado.
* Agregar fechas de creación y finalización.
* Mejorar el sistema de validación de argumentos.
* Separar la lógica en diferentes módulos.
* Implementar pruebas automatizadas.
* Utilizar una base de datos en lugar de un archivo JSON.

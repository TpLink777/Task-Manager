import { cwd, argv } from 'process'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

// Comandos esenciales: add, list, delete, complete
let tareas = []
const Ruta = join(cwd(), 'tareas.json')
const exist = existsSync(Ruta)


if (exist) {
    const data = readFileSync(Ruta, 'utf8')
    tareas = data ? JSON.parse(data) : []
} else {
    writeFileSync(Ruta, JSON.stringify([]))
}


const obtenerIdMayor = (arregloTareas) => {
    if (!arregloTareas || arregloTareas.length === 0) return 0
    return Math.max(...arregloTareas.map((item) => item.id))
};

const value = argv[2]

switch (value) {
    case 'add':

        if (!argv[3]) {
            console.log('Error: Debes agregar una descripción para la tarea. Ejemplo: node script.js add "Mi tarea"')
            break;
        }

        let nuevaTarea = {
            id: obtenerIdMayor(tareas) + 1,
            descripcion: argv[3],
            estado: 'No completado',
            dependencias: []
        }

        tareas.push(nuevaTarea)
        writeFileSync(Ruta, JSON.stringify(tareas, null, 2))

        console.log(`Tarea agregada con éxito (ID: ${nuevaTarea.id})`)
        break;

    case 'list':
        if (tareas.length === 0) {
            console.log('No hay tareas registradas.')
        } else {
            console.table(tareas)
        }
        break;

    case 'delete':

        const valId = Number(argv[3])

        if (!valId) {
            throw new Error('Para eliminar un elemento debes de diligenciar su ID')
        }

        let taskUpdate = tareas.filter(item => item.id !== valId)

        if (tareas.length === taskUpdate.length) {
            throw new Error("El ID no existe")
        }

        writeFileSync(Ruta, JSON.stringify(taskUpdate, null, 2));
        console.log(`Tarea eliminada con éxito (ID: ${valId})`);

        break;
    case 'complete':
        console.log('has completado algo')
        break;

    default:
        console.log('Las opciones disponibles son: add, list, delete y complete')
}
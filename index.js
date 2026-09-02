import { cwd, argv } from 'process'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import c from 'chalk';

const log = console.log;
const error = (msg) => log(c.red(msg));
const success = (msg) => log(c.green(msg));
const warn = (msg) => log(c.yellow(msg));
const info = (msg) => log(c.cyan(msg));

let tareas = []
const Ruta = join(cwd(), 'tareas.json')
const exist = existsSync(Ruta)
const valId = Number(argv[3])



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
            error('Debes agregar una descripción para la tarea. Ejemplo: node index.js add "Mi tarea"')
            break;
        }

        let nuevaTarea = {
            id: obtenerIdMayor(tareas) + 1,
            descripcion: argv[3],
            estado: 'No completado'
        }

        tareas.push(nuevaTarea)
        writeFileSync(Ruta, JSON.stringify(tareas, null, 2))

        log(`Tarea ${c.green('agregada')} con éxito (ID: ${c.magenta(nuevaTarea.id)})`)
        break;

    case 'list':
        if (tareas.length === 0) {
            warn('No hay tareas registradas.')
        } else {
            console.table(tareas)
        }
        break;

    case 'delete':

        if (!valId) {
            warn('Para eliminar un elemento debes de diligenciar su ID')
            break
        }

        let taskUpdate = tareas.filter(item => item.id !== valId)

        if (tareas.length === taskUpdate.length) {

            error("El ID diligenciado no existe")

            break
        }

        writeFileSync(Ruta, JSON.stringify(taskUpdate, null, 2));
        success(`Tarea eliminada con éxito (ID: ${valId})`);

        break
    case 'complete':

        if (!valId) {
            warn('Para completar una tarea debes de diligenciar su ID')
            break
        }

        let findId = tareas.find(i => valId === i.id)

        if (findId !== undefined) {

            if (findId.estado === 'Completado') {
                warn(`La tarea con el ID diligenciado ${valId} ya tiene su estado como "Completado"`)
                break
            }

            findId.estado = 'Completado'

            writeFileSync(Ruta, JSON.stringify(tareas, null, 2))
            info(`Has completado la tarea con el ID ${valId}`)
        } else {
            error("El ID diligenciado no existe")
            break
        }

        break;

    default:
        info('Las opciones disponibles son: add, list, delete y complete')
        break;
}
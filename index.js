import process from 'process'
import fs from 'fs'


//Gestor de tareas


//comandos esenciales
// add, list, delete, complete, --depends

//investigar
// process.argv, fs

//argumentos de las tareas

const tareas =
    `
    {
        "id": "1",
        "descripcion": "tareas de prueba # 1",
        "estado": "no completada",
        "dependencias": "[]"
    }
`



const promise = fs.writeFile('tareas.json', tareas, (err) => {
    if (err) {
        console.log('error escribiendo el archivo ', err)
    } else {
        console.log('archivo creado satisfactoriamente')
    }
})


const value = process.argv[2]

switch (value) {
    case 'add':
        console.log('vas a agregar algo')
        break;
    case 'list':
        console.log('vas a listar algo')
        break;
    case 'delete':
        console.log('vas a eliminar algo')
        break;
    case 'complete':
        console.log('has completado algo')
        break;
    default:
        console.log('las opciones disponibles estan entre add, list, delete y complete')
}



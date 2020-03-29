const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como pendiente o completado la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}
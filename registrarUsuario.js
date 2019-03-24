const {
    cursos
} = require('./informacionCursos');
const fs = require('fs');

const datosUsuario = {
    idCurso: {
        demand: true,
        alias: 'i'
    },
    nombreUsuario: {
        demand: true,
        alias: 'n'
    },
    cedulaUsuario: {
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('Inscribir', 'Inscribir usuario ', datosUsuario)
    .argv;

console.log("LOS SIGUIENTES SON LOS CURSOS OFERTADOS: ");
// console.log(cursos);

console.log("       ID      " + "       NOMBRE      " + "       DURACIÓN        " + "     VALOR");

function mostrarCursos() {
    for (let i = 0; i < cursos.length; i++) {
        (function (i) {
            setTimeout(function () {
                let item = cursos[i];
                console.log('\t' + item.id + '\t' + item.nombre + '\t' + item.duracion + '\t\t\t' + item.valor);
            }, 2000 * i);
        })(i);

    }
}

if (argv.idCurso) {
    let curso = cursos.find(item => item.id == argv.idCurso);
    if (curso) {
        texto = 'El estudiante '+argv.nombreUsuario+' con cedula '+argv.cedulaUsuario+
        ' se ha inscrito en el curso: '+ curso.nombre+ 'con una duración de '+ curso.duracion+' horas y un costo de '+ curso.valor +' pesos.';
        fs.writeFile('Inscripción.txt', texto, (err) => {
            if (err) throw (err);
            console.log('Se ha creado el archivo correctamente');
        });

    } else {
        console.log("El id ingresado no existe entre los cursos mostrados.");
        mostrarCursos();
    }
} else {
    mostrarCursos();
}


// mostrarCursos();
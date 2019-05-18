const cursos = require ('./datosCursos');
const estudiantes = require ('./opcionesInscripcion');

const argv = require ('yargs')
				.command('inscribir','Realizar proceso de inscripcion',estudiantes.opciones)
				.argv;

if (typeof(argv.nombreInteresado) !== 'undefined' ) {
	
	cursos.describirCurso(cursos.cursoPorID(argv.c));
	
	estudiantes.crearArchivoInscripcion(argv.ced,cursos.cursoPorID(argv.c));

}else{
	for (i = 1; i <= (cursos.ofertaCursos).length; i++) {
			cursos.describirCursoDelay(cursos.cursoPorID(i),function(resultado){
			console.log(resultado);
		});
	}
}
	
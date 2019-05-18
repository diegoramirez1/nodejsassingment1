const cursos = require ('./datosCursos');
const estudiantes = require ('./opcionesInscripcion');

const argv = require ('yargs')
				.command('inscribir','Realizar proceso de inscripcion',estudiantes.opciones)
				.argv;


if (typeof(argv.nombreInteresado) !== 'undefined' ) {
	
	// validando existencia del curso
	if ( typeof(cursos.cursoPorID(argv.c)) === 'undefined' ) {
		estudiantes.warningCursoInvalido(argv.c);
		cursos.todosCursos();
		process.exit();
	}
		
	// el curso existe se procede con la inscripcion
	cursos.describirCurso(cursos.cursoPorID(argv.c));
	estudiantes.crearArchivoInscripcion(argv.n,argv.ced,cursos.cursoPorID(argv.c));

}else{
	// ingreso sin proceso solo e listan los cursos
	for (i = 1; i <= (cursos.ofertaCursos).length; i++) {
			cursos.describirCursoDelay(cursos.cursoPorID(i),function(resultado){
			console.log(resultado);
		});
	}
}
	
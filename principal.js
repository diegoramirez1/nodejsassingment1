const cursos = require ('./datosCursos');

//console.log(cursos.ofertaCursos);
//console.log(cursos.cursoPorID(1));
//console.log(cursos.describirCurso(cursos.cursoPorID(1)));
//console.log(cursos.todosCursos());

for (i = 1; i <= (cursos.ofertaCursos).length; i++) {  
  cursos.describirCursoDelay(cursos.cursoPorID(i),function(resultado){
	console.log(resultado);
  });
}
let ofertaCursos = [
	  { 
		id: 1,
		nombre: 'Programacion con nodeJS',
		duracion: '40 horas',
		inversion: 100000
	},{ 
		id: 2,
		nombre: 'Conceptos de OOP',
		duracion: '20 horas',
		inversion: 50000
	},{ 
		id: 3,
		nombre: 'Programacion Reactiva',
		duracion: '40 horas',
		inversion: 100000
	},{ 
		id: 4,
		nombre: 'Sistemas Reactivos',
		duracion: '40 horas',
		inversion: 100000
	}
];

let cursoPorID = (idCurso) => ofertaCursos.find( oferta => oferta.id == idCurso);

let describirCursoDelay = (curso,callback) => {
	setTimeout(function(){
			let descripcion ='El curso solicitado se llama ' + curso.nombre +
					' su identificador unico es ' + curso.id +
					' tiene una duracion de ' + curso.duracion +
					' y un costo de '+ curso.inversion + ' pesos colombianos';
			callback(descripcion);	
		},2000 * ofertaCursos.indexOf(curso));		   
}


let describirCurso = (curso) => {
		console.log('El curso solicitado se llama ' + curso.nombre +
					' su identificador unico es ' + curso.id +
					' tiene una duracion de ' + curso.duracion +
					' y un costo de '+ curso.inversion + ' pesos colombianos'		
				   );		   
}

let todosCursos = () => {
	console.log('Estos son todos los cursos');
	ofertaCursos.forEach( curso => describirCurso(curso));
}

module.exports = {
	ofertaCursos,
	cursoPorID,
	describirCurso,
	describirCursoDelay,
	todosCursos
};
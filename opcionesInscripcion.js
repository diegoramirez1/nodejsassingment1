const fs = require ('fs');

let opciones = {
	nombreInteresado:{
		alias:'n',
		demand : true
	},
	idCurso:{
		alias:'c',
		demand : true
	},
	cedulaInteresado:{
		alias:'ced',
		demand : true
	}
};

let crearArchivoInscripcion = (cedula,curso) => {
	
	texto = ' la cedula del estudiante es ' + cedula +
			' esta interesado es incribirse en el curso ' + curso.nombre +
			' la solicitud fue realizada en fecha ' + Date.now();
	
	fs.writeFile('inscripcion-'+curso.id+'-'+cedula+'.txt',texto,(err) => {
		if (err) throw (err);
		console.log('inscripcion guardada exitosamente');
			
	});
	
}

module.exports = {
	crearArchivoInscripcion,
	opciones
};
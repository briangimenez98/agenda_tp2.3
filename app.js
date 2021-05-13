const moduloLibros = require('./modulo');

/* ¡Agrega tus libros a la base de datos!
 
** El orden de las variables es: titulo del libro, nombre, apellido, año. 

** Hay dos funcionalidades agregar y eliminar:

Ejemplo del comando agregar:

(En la consola) node app.js agregar "la metamorfosis" Franz Kafka 1915

Ejemplo del comando listar: 

(En la consola) node app.js listar

y te muestra todo lo que tenes guardado...Te arrepentiste?

Ejemplo del comando eliminar: 

(En la consola) node app.js eliminar

Ejemplo del comando filtrar: 

(En la consola) node app.js filtrar usado (o nuevo)

 */

const comando = process.argv[2]

switch (comando){
    case 'agregar':
        let titulo = process.argv[3];
        let nombre = process.argv[4];
        let apellido = process.argv[5]
        let anio = process.argv[6];
        let estado = process.argv[7]
        if(!titulo){
            console.log("Escriba el titulo de su libro, por favor");
            break;
        } else if (!nombre || !apellido){
            console.log("Escriba el nombre y el apellido del autor");
                    break;
        } else if (!anio){
            console.log("Introduzca el año de versión");
                    break;
        } else if (!estado){
            console.log("Indique algún estado, por favor");
        }
        moduloLibros.agregarLibros(titulo, nombre, apellido, anio, estado);
            break;
    case 'eliminar':
        moduloLibros.eliminarLibro();
        break;
    case 'listar' : 
        moduloLibros.listarLibro();
        break;
    case "filtrar":
        moduloLibros.filtrarPorEstado(process.argv[3]);
        break;
    case undefined : 
            console.log("Tenes que pasar una accion");
            break;
    default : console.log("Escriba algún comando, por favor.");
    
}

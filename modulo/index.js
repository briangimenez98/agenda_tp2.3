const fs = require('fs');
module.exports = {
        leerJson : function (){
            return JSON.parse(fs.readFileSync('./db/libros.json','utf-8'));
        },
        agregarLibros : function (titulo, nombre, apellido, anio, estado) {
            let nuevoLibro = {
                titulo,
                nombre,
                apellido,
                anio,
                estado
            }
            let libros = this.leerJson();
            libros.push(nuevoLibro);
            this.guardarJson(libros);
            console.log("LIBRO GUARDADO");
        },
        listarLibro : function (){
            let libros = this.leerJson()
            libros.forEach(function(libros){
                console.log(libros);
            })
        },
        eliminarLibro : function(){
            let libros = this.leerJson();
            libros.pop();
            this.guardarJson(libros);
            console.log("LIBRO ELIMINADO");
            this.listarLibro;
        },
        guardarJson : function(libros){
            fs.writeFileSync('./db/libros.json', JSON.stringify(libros), 'utf-8');
        },
        filtrarPorEstado : function (filtro){
            let libros = this.leerJson(); 
            let filtrados = libros.filter(function(libro){
                return libro.estado === filtro;
            }) 
            console.log(filtrados);
        }
        }    

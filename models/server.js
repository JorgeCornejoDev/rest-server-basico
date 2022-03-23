const express = require('express');
const cors = require('cors')

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosUrl = '/api/usuarios'

        // Middlewares - funciones que necesitamos ejecutar con la misma aplicación
        this.middlewares();


        // Generamos nuestras rutas
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );
        // Lectura y parse del body
        this.app.use( express.json() );
        // Generamos un directorio público
        this.app.use( express.static('public') );
        
    }

    routes() {

        // Usuarios
        this.app.use( this.usuariosUrl, require('../routes/usuario.routes' ));

        // Estaciones


        // Tareas


        // Normas



    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'El Diablo es Puerco', this.port ) ;
        });
    }

}

module.exports = Server;
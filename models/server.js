// Llamadas a los paquetes
const express = require('express');
const cors = require('cors');
const http = require('http')
const socket = require('socket.io');
const { socketController } = require('../sockets/controller');



class Server {

    constructor() {
        // inicializar variables
        
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io = socket(this.server);

        this.paths = { }
       

        
        // TODO middelwares
        this.middlewares();

        // TODO rutas de mi aplicacion
        this.routes();

        // TODO sockets
        this.sockets();
    }

    
    middlewares() { 
        // uso de cors para restringir las peticiones
        this.app.use( cors() );

       
        
        // directorio publico
        this.app.use(express.static('public'));

        
    }
    // Rutas o endpoints
    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth.js')); //
       
    }

    sockets(){
        this.io.on('connection', socketController);
    }

    
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto:  ${this.port}`)
        })
    }

}

module.exports = Server;

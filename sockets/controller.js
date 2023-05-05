// Controlador de toda la comunicaciones del server

const socketController = (socket) => {     
    
    console.log('Cliente conectado', socket.id);
            
    // Desconectar
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    
    });
    

    // El servidor envia un mensaje 'enviar-mensaje' al cliente
    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 123456;
        callback(id);
        socket.broadcast.emit('enviar-mensaje',payload);
    });
}

module.exports = {
    socketController
}

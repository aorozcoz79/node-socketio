const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    // Enviar un mensaje al cliente

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Mensaje desde el Servidor'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!'
        //     });
        // }
    });

});
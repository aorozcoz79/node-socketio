var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

// Enviar Información
socket.emit('enviarMensaje', {
    usuario: 'Abrahamzick',
    mensaje: 'Hola Socket'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});
// creo un servidor websocket
var io = require('socket.io').listen(2013);
// creo un servidor http
var http = require('http');

// para cada conexion entrante...
// asigno un identificador para esa conexion llamada cliente
io.sockets.on('connection', function(cliente) {

	console.log('la conexión se ha establecido...');

	// si recibo un mensaje del cliente con etiqueta 'message'...
	cliente.on('message', function(data) {
		console.log('acabo de recibir estos datos: ' + data);
		cliente.emit('messageBack', 'Hola desde el servidor');
	});

	// si el cliente cierra la conexión...
	cliente.on('disconnect', function() {
		console.log('el usuario se acaba de desconectar');
	});



});


// se crea el servidor en el puerto 3000
http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  console.log('HTTP Server running');

}).listen(3000, '172.26.0.11');

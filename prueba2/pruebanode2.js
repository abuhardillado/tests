 $(document).ready(function() {

    var websocket = io.connect('http://172.26.0.11:2013');

    $('#sendButton').click(function() {
    	console.log('he pulsado el botón. Envío mensaje al servidor');
    	websocket.emit('message', $('#messageText').val() );
    });

    websocket.on('messageBack', function(data) {
    	console.log('recibo desde el servidor: ' + data)
    	$('#areatexto').val( data );
    });


 });
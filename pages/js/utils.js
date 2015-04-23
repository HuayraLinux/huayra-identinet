var quit = function quit() {
    document.location = 'ui://close';
};

var validar = function() {
	var validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-',
		value = document.getElementById('hostname').value,
		indicador = document.getElementById('indicador');

	var result = value.length && value.split('').every(function(aChar) {
		return validChars.indexOf(aChar) != -1;
	});
	
	if(result) {
		indicador.src = 'img/pana-verde.png';
	}
	else {
		indicador.src = value.length ? 'img/pana-rojo.png' : 'img/pana-gris.png';
	}
	document.getElementById('accept').disabled = result ? '' : 'disabled';

	return result;
};
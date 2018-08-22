//gera a variavel estado_cidade
$(document).ready(function() {

	 estado_cidade = {};


	for (var i = 0; i < cidades.length-1; i++) {

		estado_cidade[cidades[i].Nome+" / "+estados[cidades[i].Estado-1].Sigla] = null;

	}
	

});
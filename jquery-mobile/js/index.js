window.onload = function() {

	var entrada_html = document.querySelector('#entrada_html'),
		entrada_js = document.querySelector('#entrada_js'),
	    saida = document.querySelector('#saida'),
	    botao = document.querySelector('#botao'),
	    botao1 = document.querySelector('#botao2'),
	    resultado;

	botao.onclick = function imprimir() {

		saida.innerHTML = entrada_html.value;

	}

	botao2.onclick = function interpretar() {

		try {

			resultado = eval(entrada_js.value)

		} catch ( e ) {

			alert ( e.toString () );
		}
	}
}
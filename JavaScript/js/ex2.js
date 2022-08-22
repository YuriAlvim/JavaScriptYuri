function criarParagrafo() {
    var cor = prompt('Escolha uma cor');
    var btn = document.createElement('button');
    var texto = document.createTextNode("Botão " + cor)
    document.body.appendChild(btn).appendChild(texto)
    btn.style.background = cor;
}

var botoes = document.querySelectorAll('button');

for(var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', criarParagrafo);
}
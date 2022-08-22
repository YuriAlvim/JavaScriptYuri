
function minhaFuncao(){
    alert('Cuidado, tem alguém escondido nessa página...') 
    }

function susto(){
    alert('BOO!!!')
}

function funDia(){
    alert('Bom Dia!!')
}
function funTarde(){
    alert('Boa Tarde!!')
}
function funNoite(){
    alert('Boa Noite!!')
}

function funCima(obj){
    obj.style.width="200px"
    obj.innerHTML="Sai de cima de mim, por favor"

}
function funSaida(obj){
    obj.style.width="20px"
    obj.innerHTML="Valeu"
}

function meuNome(obj){
    var novoNome = prompt ('Insira meu nome')
    obj.innerHTML="Isso!! Meu nome é " + novoNome + "!";
}

function mOver(obj){
    obj.innerHTML="E essa mãozinha ai hein?"  
}

function mDown(obj)
{
    obj.style.backgroundColor="#D94A38";
    obj.style.cursor="grabbing";
    obj.innerHTML="AAAI AAAI PARA TA DOENDO AAAAH!!"
}

function mUp(obj)
{
    obj.style.backgroundColor="#53d938";
    obj.style.cursor="grab";
    obj.innerHTML="Não faz isso de novo, por favor"
}

var i = 0;
var botao = document.querySelector('button');
var quantidade = document.querySelector('quant');

botao.onclick = function() {
    i = i + 1;
    quantidade.innerHTML = 'Quantidade de cliques: ' + i;
    botao.innerHTML = 'Cliques: ' + i;
}
        
  
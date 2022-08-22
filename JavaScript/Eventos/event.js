function minhaFuncao(){
    alert('Parabéns, você foi influenciado(a) por uma página de navegador');
    }

function executarAcao(acao){
    if(acao === 'change'){
        document.getElementById("caixa").style.backgroundColor = "lightgreen";
        alert("A caixa de texto foi modificada!");
    }
    
}

function desfoque(){
    alert('Clica lá de novo vai >:(');
}

function foco(){
    alert('Achei isso legal :)');
}

function mOver(obj){
    obj.style.backgroundColor = "red";
    obj.innerHTML = ":(";
}

function mOut(obj){
    obj.style.backgroundColor = "#53d938";
    obj.innerHTML = ":)";
}

function load(){
    alert('A pagina foi compretamente carregada');
}

function unload(){
    document.write('tchau tchau');
}
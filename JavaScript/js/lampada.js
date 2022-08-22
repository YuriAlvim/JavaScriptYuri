var lampAcesa = document.querySelector('div');
var body = document.querySelector('body');

lampAcesa.addEventListener('click', apaga);

function apaga(){
    lampAcesa.style.background = "#000"
    lampAcesa.style.border = "5px solid #fff"

}
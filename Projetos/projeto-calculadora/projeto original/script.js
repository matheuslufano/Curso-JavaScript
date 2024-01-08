let runningTotal = 0;
let buffer = '0';
let previousOperator;

var screen = document.getElementById('res');
function botão(num){
    let numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function refazer(){
    document.getElementById('res').innerHTML = '';
}

function apagar(){
    let resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    let res = document.getElementById('res').innerHTML;
    if (res) {
        document.getElementById('res').innerHTML = eval(res);
    } else {
        document.getElementById('res').innerHTML = 'Nada p calcular'
    }
}
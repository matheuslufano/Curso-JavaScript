/*
Fazer um programa que mostre uma seguencia de número que parte
do número informado ao fim do numero
*/
function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passos')
    let res = document.getElementById('res')

        //incio.valor.comprimento (quantos simbulos tem)
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossivel contar! \u{1F972}`
        res.style.color = 'black'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Cotando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considere passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crecente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{27A1}\u{FE0F} `
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            } 
        }
        res.innerHTML += `\u{1F6A9}`
        res.style.color = 'black'
    }
}
    // }
    // for(inicio; inicio < fim; inicio += passo){
    //     res.innerHTML += ` ${inicio} 👉 `
    // }
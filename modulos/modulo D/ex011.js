/*  
    Condições (parte2) aula 12

    Para mostradar uma variavel do navegador se usar o comando 
    window.document....
    para mostrar no terminal se usa o comando:
    console.log()

    var idade = 22
    if (idade < 16) {
        console.log('Não vota')
    } else {
        if (idade >= 16 && idade < 18) {
            console.log('Voto opcional')
        }
    }
*/

var idade = 68
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}



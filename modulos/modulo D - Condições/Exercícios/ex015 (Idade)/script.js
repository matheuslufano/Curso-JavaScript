function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//FullYear fornece o valor do ano com 4 numeros
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                gênero = 'menino'
                img.setAttribute('src', 'imagens/menino.png')
            } else if(idade < 21){
                gênero = 'garoto'
                img.setAttribute('src', 'imagens/garoto.png')
            } else if(idade < 51){
                gênero = 'homem'
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                gênero = 'idoso'
                img.setAttribute('src', 'imagens/velho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                gênero = 'menina'
                img.setAttribute('src', 'imagens/menina.png')
            } else if(idade < 21){
                gênero = 'garota'
                img.setAttribute('src', 'imagens/garota.png')
            } else if(idade < 51){
                gênero = 'mulher'
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                gênero = 'idosa'
                img.setAttribute('src', 'imagens/velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        img.style.padding = '10px'
    }

}
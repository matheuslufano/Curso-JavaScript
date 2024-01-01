function carregar(){
    var dia = window.document.getElementById('dia')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#8adbf3'
        dia.innerHTML = 'Bom dia'
    } else if (hora >= 12 && hora <17){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#db566a'
        dia.innerHTML = 'Boa Tarde'
    } else if (hora >=17 && hora <20){
        //BOM FIM DE TARDE
        img.src = 'fotoentardecer.png'
        document.body.style.background = '#f6b245'
        dia.innerHTML = 'Bom Entardecer'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#826891'
        dia.innerHTML = 'Boa Noite'
    }
    }
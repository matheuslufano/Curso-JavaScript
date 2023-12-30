var agora = new Date() //new Date() é um comando que informa as horas.
var hora = agora.getHours()// ".get..." extenção do comando new Date
console.log(`Agora são extamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom Dia!`)
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}

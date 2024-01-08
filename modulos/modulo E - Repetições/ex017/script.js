//Gerar uma tabuada 
function tabuada(){
    let texto = document.getElementsByClassName('texto')
    let num = document.getElementById('txtn')
    let tab = document.getElementById('vezes')
    let divi = document.getElementById('divisão')
    let adi = document.getElementById('adição')
    let sub = document.getElementById('subtração')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        divi.innerHTML = ''
        adi.innerHTML = ''
        sub.innerHTML = ''
        while(c <= 10) {
            let item1 = document.createElement('option')
            let item2 = document.createElement('option')
            let item3 = document.createElement('option')
            let item4 = document.createElement('option')

            item1.text = `${n} x ${c} = ${n*c}` 
            item2.text = `${n} ÷ ${c} = ${(n/c).toFixed(2)}` 
            item3.text = `${n} + ${c} = ${n+c}` 
            item4.text = `${n} + ${c} = ${n-c}` 

            tab.appendChild(item1)//adicionar um elemento filho
            divi.appendChild(item2)
            adi.appendChild(item3)
            sub.appendChild(item4)
            c++
        }
    }
}
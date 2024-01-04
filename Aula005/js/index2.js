/*
var n1 = Number.parseFloat(window.prompt('Digite um Numéro'))
var n2 = Number.parseFloat(window.prompt('Digite um Numéro Denovo'))

var n3 = (n1 + n2);

window.alert(`Calculadora: ${n1} + ${n2} = ${n3}`)
*/
    /*
    
    n1.toString() {vai transformar o valor em String}
    String(n1) {vai transformar o valor em String}

    Para usar placeholder nas String's use `---` e coloque ${var} para obter os valores




    */


var s1 = 'Marcelo'
a = ['a', 'e', 'o'];

document.write(`Seu nome: ${s1} <br>`)
document.write(`Ele Possui ${s1.length} letras <br>`)
document.write(`Com tudo em maiusculas fica ${s1.toUpperCase()} <br>`)
document.write(`Com tudo em minusculo fica ${s1.toLowerCase()} <br>`)
document.write(`Sem Vogais fica: ${s1.replace(a, '')}`)


var n1 = 1545.5

document.write(`Numero: ${n1} <br>`)
document.write(`Numero: ${n1.toFixed(2)} <br>`)
document.write(`Numero: ${n1.toFixed(2).replace('.', ',')} <br>`)
document.write(`Numero: ${n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <br>`)


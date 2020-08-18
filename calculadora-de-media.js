const input = require("readline-sync");

console.log('  Digite suas notas abaixo! ')

const port = parseFloat(input.question('Nota Portugues:'))
const mat = parseFloat(input.question('Nota Matematica:'))
const geo = parseFloat(input.question('Nota Geografia:'))
const hist = parseFloat(input.question('Nota Historia:'))
const cien = parseFloat(input.question('Nota Ciencias:'))
const ing = parseFloat(input.question('Nota Ingles:'))

const total = (port+mat+geo+hist+cien+ing)/6

console.log('  Sua média é ' + total.toFixed(2))

if (total >= 7){
    console.log('Parabéns, você foi aprovada!')    
} else if (total < 5){
    console.log('Reprovada, estude mais!')
} else if (total >= 5 || total < 7) {
    console.log('Nos vemos na recuperação :(')
} else {
    console.log('Digite corretamente!')
}
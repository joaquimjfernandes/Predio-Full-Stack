const num = [9, 5, 10]
const soma = (num[0] + num[1] + num[2]) / 2
//for (let pos = 0; pos < num.length; pos++)
//num.sort()
for (let pos in num){
    console.log(`A Nota ${pos} têm o Valor ${num[pos]}`)
}
if (soma >= 0 && soma <= 6) {
    console.log(`Com a Média de ${soma}, Você está Reprovado`)
} else if(soma <= 9){
    console.log(`Com a Média de ${soma}, Você está em Recuperação`)
} else {
    console.log(`Com a Média de ${soma}, Você está Aprovado!!!`)
}
//console.log(num, soma)
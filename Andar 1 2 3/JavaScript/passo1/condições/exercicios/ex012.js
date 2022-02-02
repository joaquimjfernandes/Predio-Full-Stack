let agora = new Date()
let hora = agora.getHours()
let segundo = agora.getMinutes()
console.log(`Agora são exatamnete ${hora}:${segundo}`)
if (hora < 12){
    console.log(`Bom Dia!`)
} else if (hora <= 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}
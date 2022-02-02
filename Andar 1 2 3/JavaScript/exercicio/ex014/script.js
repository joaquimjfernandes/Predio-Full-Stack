function carregar(){ 
    // Inicializando a Função
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} Minutos.`
    //Inicializando as Condições
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src ='fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if ( hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    } else{
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
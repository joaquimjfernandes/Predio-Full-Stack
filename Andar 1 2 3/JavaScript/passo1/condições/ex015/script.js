function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os Dados Novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else{
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else{
                //Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}

function verificar() {
     var data = new Date()   
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                    //kid
                    img.setAttribute('src', 'imagens/kid-male.png')
                } else if (idade < 21) {
                    //teen
                    img.setAttribute('src', 'imagens/teen-male.png')
                } else if (idade < 50) {
                    //adult
                    img.setAttribute('src', 'imagens/adult-male.png')
                } else {
                    //old
                    img.setAttribute('src', 'imagens/old-male.png')
                } 
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    //kid
                    img.setAttribute('src', 'imagens/kid-female.png')
                } else if (idade < 21) {
                    //teen
                    img.setAttribute('src', 'imagens/teen-female.png')
                } else if (idade < 50) {
                    //adult
                    img.setAttribute('src', 'imagens/adult-female.png')
                } else {
                    //old
                    img.setAttribute('src', 'imagens/old-female.png')
                } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`   
        res.appendChild(img) 
    }
}

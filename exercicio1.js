
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var txt = document.getElementById('txt')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        txt.innerHTML = 'Bom Dia!'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        txt.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'fotonoite.jpg'
        txt.innerHTML = 'Boa Noite!'
        document.body.style.background = '#515154'
    }
}






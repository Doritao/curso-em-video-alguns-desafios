function carregar() {
    var img = document.getElementById('imagem')
    var msg = document.getElementById('msg')
    var data = new Date()
     var hora = data.getHours()
   // var hora = 19
    var minutos = data.getMinutes()
    var hora_completa = hora + `:` + minutos
    msg.innerHTML = `Agora são ${hora} horas`


    if (hora > 12 && hora < 18) {
        //tarde
        msg.innerHTML += ` <br>Boa tarde`
        img.src = `aftermoon_f.jpg`
        document.body.style.backgroundColor = `#e4723c`


    } else {
        if (hora >= 17) {
            msg.innerHTML += ` <br>Boa noite`
            img.src = `evening_f.jpg`
            document.body.style.backgroundColor = `#413354`
            //noite
        }
    } if (hora < 5) {
        msg.innerHTML += ` <br>Boa madrugada`
        img.src = `madrugada_f.jpg`
        document.body.style.backgroundColor = '#00094a'
        //madrygada
    } else if (hora >= 5 && hora < 13) {
        msg.innerHTML += ` <br> Bom dia!`
        document.body.style.backgroundColor = '#f1d5b0'
        //  img.src += `morning_f.jpg`
        //manha
    }


}
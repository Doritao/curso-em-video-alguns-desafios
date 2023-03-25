function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var FormAno = document.getElementById('txtano')
    var res = document.querySelector('div#result')
    if(FormAno == 0 || FormAno > ano) {
        window.alert(`Verifique os dados e tente novamente.`)
    } else {
        var idade = ano - Number(FormAno.value)
        var sexo = document.getElementsByName('radsex')
        var genero
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked) {
            genero = 'masculino'
            if(idade >= 0 && idade <=3) {
                img.setAttribute('src', 'BABY-MALE.jpg')
            } else {
                if(idade > 3 && idade < 18) {
                    img.setAttribute('src', 'CHILD-BOY.jpg')
                } else {
                    if(idade >= 18 && idade < 60) {
                        img.setAttribute('src', 'MAN.jpg')
                    } else {
                        img.setAttribute('src', 'OLD-MAN.jpg')
                    }
                }
            }
        } else {
            if(sexo[1].checked) {
                genero = 'feminino'
                if(idade >= 0 && idade <= 3) {
                    //KID WOMAN
                    img.setAttribute('src', 'baby-fermale.jpg')
                    img.style
                } else {
                    if(idade >= 4 && idade < 18) {
                        //TOUNG WOMAN KID
                        img.setAttribute('src', 'CHILD-GIRL.jpg')
                    } else {
                        if(idade >=18 && idade < 60) {
                            //adulto WOMAN
                            img.setAttribute('src', 'WOMAN.jpg')
                        } else {
                            if(idade >=60) {
                                img.setAttribute('src', 'OLD_WOMAN.jpg')
                            }
                        }
                    }
                }
            } else {
                window.alert(`error tente novamente`)
            }
        }
        
        res.innerHTML = `sexo da pessoa é ${genero} e sua idade é ${idade} anos`
        res.appendChild(img)
    }
}
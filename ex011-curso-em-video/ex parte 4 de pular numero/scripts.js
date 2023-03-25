function contar() {
    var inicio = Number(document.getElementById(`numero-inicio`).value)
    var fim = Number(document.getElementById('numero-fim').value)
    var passos = Number(document.getElementById(`passos-numero`).value)
    var resultado = document.getElementById('contando')

    if(passos == 0) {
        window.alert(`Passo zero é inválido, o minimo que você precisa colocar é 1`)
    }
    for (var i = inicio; i <= fim; i += passos) {
        console.log(`start`)
        resultado.innerHTML += `👉 ${i}`
        console.log(i)
    }
    resultado.innerHTML += ` 🏁`

}
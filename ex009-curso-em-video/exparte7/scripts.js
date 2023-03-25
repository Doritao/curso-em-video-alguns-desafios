let lista = []

function isNumero(n) {
    return !isNaN(parseFloat(n)) && n >= 1 && n <= 100;
}

function inLista(n, l) {
    return l.indexOf(n) !== -1;
}

function adicionar() {
    const res = document.getElementById('resultado')
    const num = document.getElementById('number-add').value
    if (!isNumero(num)) {
        window.alert('Valor inválido')
    } else if (inLista(num, lista)) {
        window.alert('Valor já encontrado na lista')
    } else if (!num) {
        window.alert('Digite um valor')
    } else {
        lista.push(num)
        const item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        document.getElementById('tab-numeros').appendChild(item)
    }
    document.getElementById('number-add').value = ''
    document.getElementById('number-add').focus()
}

function finalizar() {
    if (lista.length === 0) {
        window.alert('Adicione valores antes de continuar')
    } else {
        const res = document.getElementById('resultado')
        const total = lista.length
        const soma = lista.reduce((acc, curr) => acc + parseInt(curr), 0)
        const media = soma / total
        lista.sort((a, b) => a - b)
        const vbaixo = lista[0]
        const valto = lista[total - 1]

        res.innerHTML = `<p>Ao todo temos ${total} valores</p>`
        res.innerHTML += `<p>O maior valor informado é ${valto}</p>`
        res.innerHTML += `<p>O menor valor informado é ${vbaixo}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}

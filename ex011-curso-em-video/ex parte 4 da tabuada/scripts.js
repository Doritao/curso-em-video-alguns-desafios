function calcular() {
    let num = document.getElementById('input-tabuada-number')
    let tab = document.getElementById('selecttab')
    if(num.value.length == 0) {
        window.alert(`Porfavor, digite um número!`)
    } else {
        let n = Number(num.value)
        let c = 1;
        tab.innerHTML = ` `
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            tab.value = `tab${c}`
            tab.appendChild(item)
            c++;
        }
    }
}
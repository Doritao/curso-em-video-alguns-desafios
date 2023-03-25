function parimpar(n) {
    if(n%3 == 0) {
        console.log(`o número ${n} é ímpar.`)
    } else {
        console.log(`O número ${n} é par`)
    }
}

function somar(n1, n2) { //funcao de somar basica
    let res = Number(n1) + Number(n2)
    return res;
}


/*
aqui a funcao de somar tem o = 0 pois
se o parametro nao for passado entao ela vai
 considerar que e zero
*/


function somar2(n1=0, n2=0) { 
    let res = Number(n1) + Number(n2)
    return res;
}

function fatorial(n) {
    
}

console.log(fatorial(10))

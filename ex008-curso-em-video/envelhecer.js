let humano = {
    nome: "Joao",
    idade: 20,
    peso: 65.5,
    envelhecer(id=0) {
        console.log(`envelheceu`)
        this.idade+=id
    }
}
humano.envelhecer(2)
console.log(`nome é ${humano.nome}, ele tem ${humano.idade}`)
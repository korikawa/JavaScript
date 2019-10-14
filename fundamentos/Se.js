Number.prototype.entre = function(inicio,fim) {
    return this >= inicio && this <=fim
}

const resultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log("Congrats")    
    } else if(nota.entre(8,7)){
        console.log("Fudeu")

    }else if(nota.entre(6,7)){
        console.log("Agora fudeu devez")
    }else{
        console.log("Deu merda em tudo")
    }
}

resultado(10)
resultado(6)
resultado(5)
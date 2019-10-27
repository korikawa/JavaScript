let soma = function (x,y) {
    return x+y
    
}
const impresultado = function (a,b ,operacao = soma) {
    console.log(operacao(a,b))
    
}

impresultado(5,5)
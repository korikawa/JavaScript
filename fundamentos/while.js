function inteiro(min,max) {
    const valor=Math.random()* (max-min) +min
}

let opcao = 0

while (opcao != -1) {
    opcao = inteiro(-1,10)
    console.log(`opcao foi : $(opcao)`)
}
console.log(' solta : ')
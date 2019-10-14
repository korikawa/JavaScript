const valores = [6.0,4.3,4.5,3.2]
console.log(valores[0], valores[1])
console.log(valores[4])
valores[4] =10
console.log(valores.length)

valores.push({id:3},false,null,'teste')
console.log(valores)

delete valores[3]
console.log(valores)


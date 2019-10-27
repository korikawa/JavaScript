function pessoa(){
    this.idade = 0
}
const self = this
setInterval(function () {
    this.idade++
    console.log(this.idade)
    
}.bind(this),100)

new pessoa
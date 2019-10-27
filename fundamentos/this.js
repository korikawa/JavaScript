const pessoa = {
    saudacao : ' goodmornig',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()
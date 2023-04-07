class Usuario{
    constructor(nome, senha){
        this._nome = nome;
        this._senha = senha;

    }

    getNome(){
        return this._nome;
    }

    getSenha(){
        return this._senha;
    }

    setSenha(senha){
        this._senha = senha;
    }

    setNome(nome){
        this._nome = nome;
    }

    toString(){
        return `Nome: ${this.getNome()} \n
Senha: ${this.getSenha()}`
    }


}
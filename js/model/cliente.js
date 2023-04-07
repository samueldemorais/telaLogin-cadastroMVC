class Cliente {
    constructor(nome, matricula, telefone, endereco, qtdFilhos, rendaFamiliar) {
        this._nome = nome;
        this._matricula = matricula;
        this._endereco = endereco;
        this._qtdFilhos = qtdFilhos;
        this._rendaFamiliar = rendaFamiliar;
        this._tefelone = telefone;
    }
    get telfelone() {
        return this._tefelone;
    }
    set telfelone(novotelefone) {
        this._tefelone = novotelefone;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get matricula() {
        return this._matricula;
    }

    set matricula(matricula) {
        this._matricula = matricula;
    }
    get endereco() {
        return this._endereco;
    }

    set endereco(novoendereco) {
        this._endereco = novoendereco;
    }

    get qtdFilhos() {
        return this._qtdFilhos;
    }

    set qtdFilhos(novoqtdFilhos) {
        this._qtdFilhos = novoqtdFilhos;
    }

    get rendaFamiliar() {
        return this._rendaFamiliar;
    }

    set rendaFamiliar(novorendaFamiliar) {
        this._rendaFamiliar = novorendaFamiliar;
    }
}

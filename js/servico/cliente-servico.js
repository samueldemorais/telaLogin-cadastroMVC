class ClienteServico {
    constructor() {
        this.repositorio = new ClientesRepositorio();
    }

    inserir(nome, matricula, endereco, qtdFilhos, rendaFamiliar) {
        const cliente = new Cliente(nome, matricula, endereco, qtdFilhos, rendaFamiliar);
        return this.repositorio.inserir(cliente);
    
    }

    remover(nome) {
        this.repositorio.remover(nome);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorNome(nome) {
        return this.repositorio.buscarPorNome(nome);
    }
    exportarCSV(){
        return this.repositorio.exportarCSV();
    }
}

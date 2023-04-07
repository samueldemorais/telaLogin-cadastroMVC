class ClientesRepositorio {
    constructor() {
        this._clientes = [];
    }

    inserir(cliente) {
        this._clientes.push(cliente);
        return cliente;
    }

    remover(nome) {
        const indxRemocao = this._clientes.indexOf(cliente => cliente.nome === nome);
        this._clientes.splice(indxRemocao, 1);
    }

    listar() {
        return this._clientes;
    }

    buscarPorNome(nome) {
        return this._clientes.filter(cliente => cliente.nome === nome);
    }

    
    exportarCSV() {
        const cabecalho = 'Nome;Matricula;Telefone;Endereco;Quantidade de Filhos;Renda Familiar';

        // Cria uma string CSV com a linha de cabeçalho
        let csv = cabecalho + '\n';
    
        // Cria uma linha para cada cliente com o valor de cada atributo em uma coluna separada
        this._clientes.forEach((cliente) => {
          csv += `${cliente.nome};${cliente.matricula};${cliente.telefone};${cliente.endereco};${cliente.qtdFilhos};${cliente.rendaFamiliar}\n`;
        });
    
        // Cria um objeto Blob com os dados CSV
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    
        // Cria um objeto URL para o Blob
        const url = URL.createObjectURL(blob);
    
        // Cria um link para download do arquivo CSV
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'clientes.csv');
        link.click();
      }
    
}

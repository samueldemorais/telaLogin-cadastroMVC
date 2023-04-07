class Controlador {
    constructor() {
        this.clienteServico = new ClienteServico();
        this.UsuarioServico = new UsuarioServico();

    }
    ocultarLogin(){
        document.getElementById("login").hidden=true;
    }
    AparecerLogin(){
        document.getElementById("login").hidden=false;
    }
    ocultarCadastro(){
        document.getElementById("cadastroCliente").hidden=true;
    }
    aparecerCadastro(){
        document.getElementById("cadastroCliente").hidden=false;
    }
    inserirUsuario(){
        const nomeUsuario = document.querySelector("#nomeUsuario").value;
        const idadeUsuario = document.querySelector("#idadeUsuario").value;
        this.UsuarioServico.cadastrar(nomeUsuario, idadeUsuario);
    }

    verificarUsuario(){
        const nomeUsuario = document.querySelector("#nomeUsuario").value;
        const idadeUsuario = document.querySelector("#idadeUsuario").value;
        const verificar = this.UsuarioServico.logar(nomeUsuario, idadeUsuario);
        
    }

    inserirCliente() {
        const nomeCliente = document.querySelector("#nome").value;
        const matriculaCliente = Number(document.querySelector("#matricula").value);
        const fone = document.querySelector("#fone").value;
        const rua = document.querySelector("#rua").value;
        const numero = document.querySelector("#numero").value;
        const bairro = document.querySelector("#bairro").value;
        const cidade = document.querySelector("#cidade").value;
        const estado = document.querySelector("#estado").value;
        const qtdfilhos = document.querySelector("#numeroFilhos").value;
        const rendaFamiliar = document.querySelector("#rendaFamiliar").value;

        const complemento = this.clienteServico.inserir(nomeCliente, matriculaCliente, fone, [fone, rua, numero, bairro, cidade, estado], qtdfilhos, rendaFamiliar);

        // if (aluno) {
        //     this.mostrarAlunoNoHTML(nomeAluno, idadeAluno);
        //     alert('Aluno inserido com sucesso!');
        // } else {
        //     alert('Aluno menor de idade não permitido!');
        // }
    }

    

    exportarCSV(){
        return this.clienteServico.exportarCSV()
    }

}

//
//
//
// for (let aluno of alunos) {
//     // colocar no html nome - idade
//     mostrarAlunoNoHTML(aluno.nome, aluno.idade);
// }
//
// function inserirAluno() {
// }
//
//


class UsuarioServico{
    constructor(){
         this._usuariorepositorio = new UsuarioRepositorio();
    }

    cadastrar(nome, senha){
        let usuario = new Usuario(nome, senha)
        this._usuariorepositorio.cadastrar(usuario);
    }

    listar(){
       this._usuariorepositorio.listar();
    }
    
    logar(email, senha){
      this._usuariorepositorio.logar(email, senha);
      
    }

    remover (usuario){
        this._usuariorepositorio.remover(usuario);
    };

}
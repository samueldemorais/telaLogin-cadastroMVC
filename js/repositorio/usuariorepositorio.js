class UsuarioRepositorio{
    constructor(){
        this._contascadastradas = [];
    }

    cadastrar(usuario){
        this._contascadastradas.push(usuario);

    }

    listar(){
        return this._contascadastradas;
    }
    
    logar(email, senha){
      
        let capturado;
        for(let i = 0; i < this._contascadastradas.length; i++){
            let usuariox = this._contascadastradas[i];

            if(email == usuariox._nome && senha == usuariox._senha){
                capturado = usuariox;
                console.log(capturado)
                window.location.href = "cadastro.html";
        
                
            }


        }  
        console.log('ou aq')
        return undefined;
    }

    remover (usuario){
        let index = this._contascadastradas.indexOf(usuario);
        this._contascadastradas.splice(index, 1);
    };
 
}
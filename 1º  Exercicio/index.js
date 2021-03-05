class Usuario {
    
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return false;
    }

}

class Admin extends Usuario{
    
    constructor(email, senha, ehAdmin){
        super(email, senha);
        this.admin = ehAdmin;
    }

    isAdmin(){
        return this.admin
    }

}

const User1 = new Usuario('Iarlyson.santana@gmail.com', 'senha123456');
const Admin1 = new Admin('Iarlyson.santana@gmail.com', 'senha123456', true);

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
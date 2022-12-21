class Contato{
    
    constructor(nome, idade, ddd, telefone, email){
        this.nome = nome
        this.idade = idade
        this.email = email
        this.numero = "("+ ddd + ")" + telefone
    }
    
    getId(){
        console.log("Nome: " + this.nome), console.log("Idade: " + this.idade)
    }
    
    getContato(){
        console.log("Número: " + this.numero),
        console.log("E-mail: " + this.email)
    }
    
}   

const Eduardo = new Contato("Eduardo Vieira", 22, 21,982705996, "evieira43@gmail.com")

Eduardo.getId()
Eduardo.getContato()

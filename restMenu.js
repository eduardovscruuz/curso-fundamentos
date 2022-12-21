class Menu{
    
    constructor(restaurante, endereco, pratos){
        this.nome_restaurante = restaurante
        this.endereco = endereco
        this.pratos = pratos
    }
    getRestaurante(){
        return this.restaurante}

    getEndereco(){
        return this.endereco}
        
    getPratos(){
        return this.pratos}
}

class Prato{
    constructor(nome, descricao, imagem, valor){
        this.nome = nome
        this.descricao = descricao
        this.imagem = imagem
        this.valor = valor
    }
    apresentar(){
        console.log("Nome: " + this.getNome())
        console.log("Descrição: " + this.getDescricao())
        console.log("Valor: R$" + this.getValor())
    }
    getNome(){
        return this.nome}
        
    getDescricao(){
        return this.descricao}
        
    getValor(){
        return this.valor}
}

const lasanha = new Prato("Lasanha", "Lasanha (lasagna em italiano) é um prato feito com camadas alternadas de massa, queijo e molho de carne ou outros.", "", 86.90)

const parmegiana = new Prato("Parmegiana", "Prato brasileiro composto por um pedaço de carne fatiado, empanado com farinha de trigo e ovos, coberto com queijo do tipo parmesão, presunto e bastante molho de tomate.", "", 129.90)

const menu = new Menu("Bistrô", "Rua Governador Reis, 150", [lasanha, parmegiana])

menu.getPratos()[0].apresentar()
menu.getPratos()[1].apresentar()

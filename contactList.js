class Contact{
    
    constructor(name, age, ddd, phone, email){
        this.name = name
        this.age = age
        this.email = email
        this.phoneNumber = "("+ ddd + ")" + phone
    }
    
    getId(){
        console.log("Name: " + this.name), console.log("Age: " + this.age)
    }
    
    getContact(){
        console.log("Phone Number: " + this.phoneNumber),
        console.log("E-mail: " + this.email)
    }
    
}   

const Eduardo = new Contact("Eduardo Vieira", 22, 21,982705996, "evieira43@gmail.com")

Eduardo.getId()
Eduardo.getContact()

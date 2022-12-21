function votar(idade){
    
    if (idade>=18 && idade<=70){
        console.log("obrigatorio votar")
        
    }
    else if (idade>=16 ){
        console.log("opcional votar")
        
    }
    else{
        console.log("Não pode votar")
        
    }
}

votar(18)



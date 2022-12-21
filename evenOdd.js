function listaDeNum(arrayNum){

    let pares = 0
    let impares = 0
    
        for(let i = 0; i < arrayNum.length; i++){
            
            if(arrayNum[i] < 0){
                console.log("ALERT: Número negativo!");
                break
                
            }else if (arrayNum[i] % 2 == 0){
                pares+=1;
                console.log("Número par")
                
            }else if(arrayNum[i] % 2 == 1){
            impares+=1;
            console.log("Número ímpar")
            }
        }
        
    }
    
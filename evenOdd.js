function evenOdd(arrayNum){

    let even = 0 //pares
    let odd = 0 //ímpares
    
        for(let i = 0; i < arrayNum.length; i++){
            
            if(arrayNum[i] < 0){
                console.log("STOP: Negative number!");
                break
                
            }else if (arrayNum[i] % 2 == 0){
                even+=1;
                console.log("Even")
                
            }else if(arrayNum[i] % 2 == 1){
            odd+=1;
            console.log("Odd")
            }
        }
    console.log(even + " Even numbers in total")
    console.log(odd + " Odd numbers in total")
}
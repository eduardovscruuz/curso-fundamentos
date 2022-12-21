function elementRep(arr){
    
    let repetidos = 0
    
        for(let i = 0; i < arr.length; i++){
            if (arr.indexOf(arr[i]) != i){
                repetidos = repetidos+1
            }
        }
            
    if(repetidos>0){
        return true
    }else{
        return false
    }
    
}

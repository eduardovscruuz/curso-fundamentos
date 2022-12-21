function repElement(arr){
    
    let repeated = 0
    
        for(let i = 0; i < arr.length; i++){
            if (arr.indexOf(arr[i]) != i){
                repeated = repeated+1
            }
        }
            
    if(repeated>0){
        return true
    }else{
        return false
    }
    
}

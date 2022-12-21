function numPrimo(n) {
    var divisores = 0 
    for(i=1; i<=n; i++){
        if(n%i==0){
            divisores++;
            }
        
    } if(divisores==2){
        console.log("é primo")
        
    } else {
        console.log("Não é primo")
        
    }
}

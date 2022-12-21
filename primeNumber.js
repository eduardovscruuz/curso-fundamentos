function primeNumber(n) {
    var dividers = 0 
    for(i=1; i<=n; i++){
        if(n%i==0){
            dividers++;
            }
        
    } if(dividers==2){
        console.log("It's prime")
        
    } else {
        console.log("It's not prime")
        
    }
}

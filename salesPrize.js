function salesPrize(name,salary,sales){
    
    let prize
    
    if (sales >= 1000 && sales < 5000){
        prize = 500}
        
    else if (sales >= 5000 && sales < 7500){
        prize = 700}
        
    else if (sales >= 7500){
        prize = 1000}
        
    else {
        prize=0}
    
    console.log(name +"'s salary this mounth will be $" + (salary + prize))
}

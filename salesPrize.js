function premiacao(nome,salario,vendas){
    
    let premio
    
    if (vendas >= 1000 && vendas < 5000){
        premio = 500}
        
    else if (vendas >= 5000 && vendas < 7500){
        premio = 700}
        
    else if (vendas >= 7500){
        premio = 1000}
        
    else {
        premio=0}
    
    console.log("O salário de " + nome + " neste mês será de R$" + (salario + premio))
}

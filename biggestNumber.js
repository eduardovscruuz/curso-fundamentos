function maiorNum(array) {    

    var maior = array[0];

    for (let i = 0; i < array.length; i++) {
        var atual = array[i];
        if( atual > maior)
        maior = atual;
    }
    console.log(maior)
}
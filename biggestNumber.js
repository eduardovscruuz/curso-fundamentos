function biggestNumber(array) {    

    var biggest = array[0];

    for (let i = 0; i < array.length; i++) {
        var current = array[i];
        if( current > biggest)
        biggest = current;
    }
    console.log(biggest)
}
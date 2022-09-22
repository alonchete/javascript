var numbers = [1, 6, 3, 2, 9];

function map(xs, f) {
    var ys = [];
    for (var i = 0; i < xs.length; i++) {
        ys.push(f(xs[i]));
    }
    return ys;
}

function isPair(number) {
    return number % 2 == 0;
}

var inc = number => number++;

function double(number) {
    return number * 2;
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function incAll(numbers) {
    return map(numbers, inc);
}

function pares(numbers){
     var p = []
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
             p.push(numbers[i]);
        }
    }
    return p
}

function greatThanThree(numbers){
    var p = [];
     if(numbers > 3){
        p.push(numbers)
    } 
    return p;

}


console.log(map(["peter", "ann", "rose"], capitalize));
console.log(["peter", "ann", "rose"].map(capitalize));
console.log(map(numbers, isPair));
console.log(incAll(numbers));
console.log(numbers.map(inc));
console.log(map(numbers, number => number * 3));
console.log(map(numbers, greatThanThree))
console.log(greatThanThree(numbers))

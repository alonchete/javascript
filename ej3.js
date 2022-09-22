numbers = [1,2,3,2,31,12];
names = ["Peter", "Ann", "Rose", "Louise"]


function sum(numbers){
    var s = 0;
    for(var i = 0; i<numbers.length; i++){
        s+=numbers[i];
    }
    return s;

}

function max(numbers){
    var m = 0;
    for(var i = 0; i<numbers.length; i++){
        if(m < numbers[i]){
            m = numbers[i];
        };
    }
    return m;
}

function acronymize(names){
    var acro = "" ;
    for(var i = 0; i<names.length; i++){
        acro = acro + names[i].substr(0,1);
    }
    return acro;
}



console.log(sum(numbers));
console.log(max(numbers));
console.log(acronymize(names));
//block of code
//var-global level/functional
//let- global level/block level{}
//const - 
var greet1= "Evening"

function add(a,b){
    return a+b
}

let sum = add(2,3)
console.log(sum)
console.log(greet1)
// do not have name => anonymous function-- function expressions
let sumofINT= function(c,d)
{
    return c+d
}


let sumofnumbers = (c,d) => c+d;
console.log(sumofnumbers(33,33))





function add (a, b){
    return parseInt(a) + parseInt(b)
}

function subtract (x, y){
    return parseInt(x) - parseInt(y)
}
// Might need to fix multiply and divide
function multiply (...params){
    let sum = 1
    for (x of params){
        sum *= parseInt(x)
    }
    return sum
}

function divide (...params){
    let sum = 1
    for(x of params){
        sum /= parseInt(x)
    }
    return sum
}


function calculate (x, y, obj){
    //if obj = '+' add x and y
    //else if obj = '-' subtract x and y
    // ...
    switch (obj){
        case '+':
            return add(x,y);
            break;
        case '-':
            return subtract(x,y);
            break;
        case '*':
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
        default:
            console.log('idk')        
    }
}


//Variables and Operators
let num1 = 0
let num2 = 0
let operatorObj = [{
    '+': function(x, y){ return parseInt(x) + parseInt(y)},
    '-': ((x, y)=> x - y),
    '*': ((x, y)=> x * y),
    '/': ((x, y)=> x / y),
}]



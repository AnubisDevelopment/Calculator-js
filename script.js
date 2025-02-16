


function add (x, y){
    return parseInt(x) - parseInt(y)
}

function subtract (x, y){
    return parseInt(x) - parseInt(y)
}

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
    
    for(i of obj){
        if(obj.includes(i)){
            return i
        } else {
            return 'idk'
        }
    }
    
    /*if(operatorObj.includes(z)){
        return z
    } else {
        return 'idk'
    }
        */
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




function calculate (x, y, op){
    let sum 
    let first = Number(x)
    let second = Number(y)
    if (second==0){
        console.log('hey')
    }
    switch (op){
        case '+':
            sum = first + second;
            sum = Math.round(sum * 100000)/100000
            break;
        case '-':
            sum = first - second;
            sum = Math.round(sum * 100000)/100000
            break;
        case '*':
            sum = first * second;
            sum = Math.round(sum * 100000)/100000
            break;
        case '/':
            sum = first / second;
            sum = Math.round(sum * 100000)/100000
            break;
        default:
            return 'idk'
    } return sum
}
//Dom manipulation
//reference button query selector
let myButton = document.querySelectorAll('button')
let myNums = document.querySelectorAll('.nums')
let myOps = document.querySelectorAll('.ops')
let myEqual = document.querySelectorAll('.equal')
let myClear = document.querySelector('.clear')
let myDisplay = document.querySelector('.calculations')

let firstNum =  ''
let secondNum = ''
let firstArray = []
let secondArray = []
let operator = ''
let operatorArray = []
let errorMsg = 'Who do you think you are?'


//when nums pressed w/o operator, push el.value to first Array, firstNum = firstArray.join('')
//when op pressed w/o operator, push el.value to operatorArray, let operator = operatorArr.length-1?
//when num pressed w/op present, push el.value to secondArr, secondNum = secondArr.join('')

//when op pressed w/op present && secondArr present, push el.value to opArr, then
//firstNum = calculate(firstNum, secondNum, opArr.length-2), then display firstNum
//? might need to clear some vars but will try this ^^ for now

function numListeners (x){
    x.forEach(el => el.addEventListener('click', function(){
        if (el.value == '.' && firstArray[firstArray.length-1] === '.'){
            return
        } else if(operator == '' && firstArray.length < 5){
            firstArray.push(el.value)
            console.log(firstArray)
            firstNum = firstArray.join('')
            displayContent(firstNum)
            
        } else if (operator !== '' && secondArray.length < 5){
            secondArray.push(el.value);
            secondNum = secondArray.join('')
            console.log(secondNum)
            displayContent(secondNum)
        }
        
    }))
}

function operatorListeners (x){
    x.forEach(el => el.addEventListener('click', function(){
        if (operator == ''){
            operatorArray.push(el.value);
            //operator cannot be clicked multiple times and operator is defined as most recent op
            operator = operatorArray[operatorArray.length-1]
            console.log(operator)
            displayContent(firstNum + operator)
        } else if (operator !== '' && secondNum === 0){
            operatorArray.push(el.value);
            //operator cannot be clicked multiple times and operator is defined as most recent op
            operator = operatorArray[operatorArray.length-1]
            displayContent('whatcha doin there?')
        } else if (operator !== '' && secondNum !== ''){
            operatorArray.push(el.value)
            operator = operatorArray[operatorArray.length-1]
            firstNum = calculate(firstNum,secondNum,operatorArray[operatorArray.length-2])
            console.log(firstNum)
            secondNum = ''
            secondArray = []
            console.log(firstNum)   
            displayContent(firstNum + operator)
        }

    }))
}

function equalListeners (x){
    x.forEach(el => el.addEventListener('click', function(){
        if (firstNum == '' || operator == ''){
            displayContent('Need to input values')
        } else if (operator !== '' && secondNum == 0){
            displayContent('wtf')
        }else {
            clearDisplay()
            displayContent(calculate(firstNum,secondNum,operator))
            firstNum = ''
            secondNum = ''
            firstArray = []
            secondArray = []
            operator = ''
            operatorArray = []
        }
    }))
}

function clearListener (x){
    x.addEventListener('click', function(){
        myDisplay.textContent = ''
        firstNum = ''
        secondNum = ''
        firstArray = []
        secondArray = []
        operator = ''
        operatorArray = []
    })
}

function clearDisplay (){
    myDisplay.textContent = ''
}

function displayContent (x){
    myDisplay.textContent = x
}

//Call functions
numListeners(myNums)
operatorListeners(myOps)
equalListeners(myEqual)
clearListener(myClear)

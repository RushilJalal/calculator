function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    result = a / b;
    return Math.round((result + Number.EPSILON) * 100) / 100;
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum)
        case '-':
            return subtract(firstNum, secondNum)
        case '*':
            return multiply(firstNum, secondNum)
        case '/':
            return divide(firstNum, secondNum)
        default:
            console.log('Invalid operator');
            break;
    }
}
const operators = ['+', '-', '*', '/']
const screen = document.querySelector(".screen")
let screenContent, first, second;
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        screen.textContent += e.currentTarget.value;
        screenContent = screen.textContent;
        operators.includes(e.currentTarget.id) ? operator = e.currentTarget.id : '';
        console.log(operator);
        if (e.currentTarget.value === '=') {
            parts = screenContent.split(/[+\-*/=]/)
            console.log(parts);
            first = Number(parts[0]);
            second = Number(parts[1]);
            screen.textContent = operate(first, second, operator)
        }
    })
})

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    screen.textContent = '';
})

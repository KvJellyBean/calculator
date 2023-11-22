const buttons = document.querySelector('.buttons');
const output = document.querySelector('#output');

function add(operand1, operand2) {
    return operand1 + operand2;
}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function multiply(operand1, operand2) {
    return operand1 * operand2;
}

function divide(operand1, operand2) {
    return operand1 / operand2;
}

function operate(operand1, operator, operand2) {
    switch (operator) {
        case '+': return add(+operand1, +operand2); break;
        case '-': return subtract(+operand1, +operand2); break;
        case '*': return multiply(+operand1, +operand2); break;
        case '/': return divide(+operand1, +operand2); break;
    }
}

buttons.addEventListener('click', (e) => {
    output.innerText += e.target.value;

    // const length = 3;
    // if (e.target.tagName == 'BUTTON' && output.innerText.length < length) {
    //     output.innerText += e.target.value;
    // }
    // else {
    //     const operand1 = +output.innerText.substr(0, 1);
    //     const operator = output.innerText.substr(1, 1);
    //     const operand2 = +output.innerText.substr(2, 1);
    //     output.innerText = '';
    //     output.innerText += `${operand1 + operand2}${e.target.value}`
    // }
});
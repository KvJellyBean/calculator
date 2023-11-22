const buttons = document.querySelector('.buttons');
const output = document.querySelector('#output');

function add(operator1, operator2) {
    return operator1 + operator2;
}

function subtract(operator1, operator2) {
    return operator1 - operator2;
}

function multiply(operator1, operator2) {
    return operator1 * operator2;
}

function divide(operator1, operator2) {
    return operator1 * operator2;
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
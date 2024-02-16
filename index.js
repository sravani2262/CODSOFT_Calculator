let screen = document.getElementById('screen');

function insert(num) {
    screen.value += num;
}

function clearScreen() {
    screen.value = '';
}

function backspace() {
    let currentExpression = screen.value;
    screen.value = currentExpression.substring(0, currentExpression.length - 1);
}

function calculate() {
    let currentExpression = screen.value;
    if (currentExpression) {
        screen.value = eval(currentExpression);
    }
}
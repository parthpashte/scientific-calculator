const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateScientific(func) {
    try {
        const value = eval(display.value);
        switch (func) {
            case 'sqrt':
                display.value = Math.sqrt(value);
                break;
            case 'sin':
                display.value = Math.sin(value * Math.PI / 180); // convert to radians
                break;
            case 'cos':
                display.value = Math.cos(value * Math.PI / 180); // convert to radians
                break;
            case 'tan':
                display.value = Math.tan(value * Math.PI / 180); // convert to radians
                break;
            case 'log':
                display.value = Math.log10(value);
                break;
            case 'ln':
                display.value = Math.log(value);
                break;
            case 'pow':
                display.value += '**';
                break;
            case 'pi':
                display.value += Math.PI;
                break;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

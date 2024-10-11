function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    try {
        var expression = document.getElementById("result").value;
        var result = eval(expression);
        if (result === Infinity) {
            alert("Cannot divide by zero");
            clearScreen();
        } else {
            document.getElementById("result").value = result;
        }
    } catch (error) {
        alert("Invalid expression");
        clearScreen();
    }
}
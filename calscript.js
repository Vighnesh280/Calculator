// Appends the value of the button clicked to the input
function appendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
}

// Clears the input field
function clearResult() {
    document.getElementById("result").value = "";
}

// Evaluates the expression and shows the result
function calculateResult() {
    const resultField = document.getElementById("result");
    try {
        // Evaluate the input string as a mathematical expression
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}

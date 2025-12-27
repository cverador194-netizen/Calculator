// Get reference to the display input element
let display = document.getElementById("display");

// Append the clicked button's value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display content
function clearDisplay() {
    display.value = "";
}

// Calculate the result of the expression shown in the display
function calculateResult() {
    try {
        // Use eval to compute the expression - caution: eval can be risky if input is uncontrolled
        display.value = eval(display.value);
    } catch {
        // If evaluation fails, show an error message
        display.value = "Error";
    }
}

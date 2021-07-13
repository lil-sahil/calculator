const screen = document.querySelector(".calculator-screen");
const clear = document.querySelector('.clear');
const posNeg = document.querySelector('.pos-neg');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');
const answerH1 = document.querySelector('.answer');



let currentScreenValue = "";
let previousScreenValue = "";
let operation = "";

// show on screen
function display(){
    screen.childNodes[1].textContent = currentScreenValue; 
}


// Display pushed buttons on screen
function writeOnScreen() {    
    
    document.querySelectorAll(".display").forEach( (event) => {
    event.addEventListener('click', (e) => { 
        
        answerH1.style.display = 'none';
        
        // Max number of digits is 27
        
        if (screen.childNodes[1].textContent.length === 27){
            return false;
        }
        
        // Check if decimal was already entered and if it is chosen again.
        if (decimalEntered(e)){
            return 1;
        }

        screen.childNodes[1].textContent += e.target.innerText;
        });
    });
}
writeOnScreen();

// Check if decimal has already been entered, then do not enter again.
function decimalEntered(e){
    if ( (screen.childNodes[1].textContent).includes(".") && (e.target.innerText === '.')){
        return true;
    }
}


// Clear screen whenever clear button or any of the operation buttons are pressed.
// Also store the value from screen.

function storeValues() {
    document.querySelectorAll('.operation-btn').forEach( (btn) => {
        btn.addEventListener('click', () => {

            if (previousScreenValue === ""){
                previousScreenValue = screen.childNodes[1].textContent;
                screen.childNodes[1].textContent = '';
            } else {
                currentScreenValue = screen.childNodes[1].textContent;
                
                // Prevent NAN when selecting another operation.
                if (currentScreenValue === ""){
                    return 1;
                }else{
                    operate(operation, currentScreenValue, previousScreenValue);
                }
                
            }

        })
    });
}

storeValues();

// Clear data
let clearData = () => clear.addEventListener('click', () => {
    screen.childNodes[1].textContent = "";
    previousScreenValue = "";
    currentScreenValue = "";
    answerH1.style.display = 'none';
    operation = "";
})

clearData()

// get operator

function getOperator(){
    document.querySelectorAll('.operation-btn').forEach( btn => {
        btn.addEventListener('click', (e) => {
            operation = e.target.textContent;
        });
    });
}

getOperator();



// Caculator Operation
function operate(operationSelected, currentVal, prevVal){
    
    switch (operationSelected){
        case '+':
            addNumbers(prevVal, currentVal); 
            break;
        case 'x':
            multiplyNumbers(prevVal, currentVal);
            break;
        case '-':
            subtractNumbers(prevVal, currentVal);
            break;
        case '÷':
            divideNumbers(prevVal, currentVal);
            break;
        case '+/-':
            makeNegative(currentVal);
            break;
        case "=":
            showAnswer();
            break;

    }

}

operate();

// Add
function addNumbers(val1, val2){

    answerH1.textContent = parseFloat(val1) + parseFloat(val2);
    previousScreenValue = parseFloat(answerH1.textContent);
    answerH1.style.display = "block";
    screen.childNodes[1].textContent = "";
}

// Multiply
function multiplyNumbers(val1, val2){

    answerH1.textContent = parseFloat(val1) * parseFloat(val2);
    previousScreenValue = parseFloat(answerH1.textContent);
    answerH1.style.display = "block";
    screen.childNodes[1].textContent = "";

}

// Subtract
function subtractNumbers(val1, val2){

    answerH1.textContent = parseFloat(val1) - parseFloat(val2);
    previousScreenValue = parseFloat(answerH1.textContent);
    answerH1.style.display = "block";
    screen.childNodes[1].textContent = "";
}

// Divide
function divideNumbers(val1, val2){

    answerH1.textContent = parseFloat(val1) / parseFloat(val2);
    previousScreenValue = parseFloat(answerH1.textContent);
    answerH1.style.display = "block";
    screen.childNodes[1].textContent = "";
}

function showAnswer(){
    answerH1.style.display = "block";
}

// Negative or Positive

function makeNegative(val2){

    answerH1.textContent = val2 * -1;
    previousScreenValue = answerH1.textContent;
    answerH1.style.display = 'block';
    screen.childNodes[1].textContent = "";
}







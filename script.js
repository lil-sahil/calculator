const screen = document.querySelector(".calculator-screen");
const clear = document.querySelector('.clear');
const posNeg = document.querySelector('.pos-neg');
const percentage = document.querySelector('.percentage');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal');
const multi = document.querySelector('.multi');
const divide = document.querySelector('.divide');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const equal = document.querySelector('.equal');
const answerH1 = document.querySelector('.answer');



let currentScreenValue = "";
let previousScreenValue = "";

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

        screen.childNodes[1].textContent += e.target.innerText;
        });
    });
}

writeOnScreen();


// Clear screen whenever clear button or any of the operation buttons are pressed.
// Also store the value from screen.

function storeValues() {
    document.querySelectorAll('.operation-btn').forEach( (btn) => {
        btn.addEventListener('click', () => {
            
            if (previousScreenValue === ""){

                previousScreenValue = screen.childNodes[1].textContent;
            } else {
                currentScreenValue = screen.childNodes[1].textContent;
            }

            
            screen.childNodes[1].textContent = '';
        })
    });
}

storeValues();

// Clear data
let clearData = () => clear.addEventListener('click', () => {
    screen.childNodes[1].textContent = "";
    previousScreenValue = "";
    currentScreenValue = "";
})
clearData()


// Caculator Operation
function operate(){

    // Display current value on screen

    display();

    document.querySelectorAll('.operation-btn').forEach( btn => {
        btn.addEventListener('click', (e) => {
            
            if( (previousScreenValue === "") || (currentScreenValue === "") ){
                screen.childNodes[1].textContent = "";
                return false;
            }
            switch (e.target.textContent){
                case '+':
                    addNumbers(previousScreenValue, currentScreenValue);  
                    break;
                case 'x':
                    multiplyNumbers(previousScreenValue, currentScreenValue);
                    break;
                case '-':
                    subtractNumbers(previousScreenValue, currentScreenValue);
                    break;
                case '÷':
                    divideNumers(previousScreenValue, currentScreenValue);
                    break;
            }
        });
    });
}

operate();

// Add
function addNumbers(val1, val2){

    answerH1.textContent = parseFloat(val1) + parseFloat(val2);
    answerH1.style.display = "block";
    screen.childNodes[1].textContent = "";
    
    previousScreenValue = parseFloat(val1) + parseFloat(val2);

}





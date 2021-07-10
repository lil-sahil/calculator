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


let screenValue = 0;

// Display pushed buttons on screen
function displayOnScreen() {
    document.querySelectorAll(".display").forEach( (event) => {
    event.addEventListener('click', (e) => {
        
        // Max number of digits is 27
        if (screen.childNodes.length === 27){
            return false;
        }

        let tempDisp = document.createElement('h1');
        screen.appendChild(tempDisp).textContent = e.target.innerText
        });
    });
}

displayOnScreen();


// Clear screen whenever clear button or any of the operation buttons are pressed.
// Also store the value from screen.

function clearScreen() {
    document.querySelectorAll('.operation-btn').forEach( (btn) => {
        btn.addEventListener('click', () => {
            getScreenValue();
            Array.from(screen.childNodes).forEach(n => n.remove());
        })
    });
}


// Get the values stored in the H1 tags on the screen,

function getScreenValue(){
    return -1;
}




// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = Number(value1) + Number(value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});

const multiplyInput1 = document.getElementById('multiply-input-1');
console.log('multiplyInput1');

const multiplyInput2 = document.getElementById('multiply-input-2');
console.log('multiplyInput2');

const multiplyButton = document.getElementById('multiply-button');
console.log('multiplyButton');

const multiplySpan = document.getElementById('multiply-result');
console.log('multiplySpan');

//set the event handler to the multiply button
multiplyButton.addEventListener('click', () => {
    const mvalue1 = multiplyInput1.value;
    console.log(mvalue1);
    const mvalue2 = multiplyInput2.value;
    console.log(mvalue2);
    const result = Number(mvalue1) * Number(mvalue2);
    multiplySpan.textContent = result;
});


const divisionInput1 = document.getElementById('division-input-1');
console.log('DivisionInput1');

const divisionInput2 = document.getElementById('division-input-2');
console.log('DivisionInput2');

const divisionButton = document.getElementById('division-button');
console.log('divisionButton');

const divisionResult = document.getElementById('division-result');
console.log('divisionResult');

divisionButton.addEventListener('click', () => {
    const dvalue1 = divisionInput1.value;
    console.log(dvalue1);
    const dvalue2 = divisionInput2.value;
    console.log(dvalue2);
    const result = Number(dvalue1) / Number(dvalue2);
    divisionResult.textContent = result;

});

const subtractionInput1 = document.getElementById('subtraction-input-1');
console.log(subtractionInput1);

const subtractionInput2 = document.getElementById('subtraction-input-2');
console.log(subtractionInput2);

const subtractionButton = document.getElementById('subtraction-button');
console.log(subtractionButton);

const subtractionResult = document.getElementById('subtraction-result');
console.log(subtractionResult);

subtractionButton.addEventListener('click', () => {
    const svalue1 = subtractionInput1.value;
    console.log(svalue1);
    const svalue2 = subtractionInput2.value;
    console.log(svalue2);
    const result = Number(svalue1) - Number(svalue2);
    subtractionResult.textContent = result;
});

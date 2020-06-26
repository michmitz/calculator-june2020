// IMPORT MODULES under test here:
import { add, multiply, divide, subtract } from '../utils.js';
// import example from '../example.js';

const test = QUnit.test;

test('should return 8 when passed 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 5;
    const num2 = 3;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 10 when passed 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 5;
    const num2 = 5;
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 12 when passed 8 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 8;
    const num2 = 4;
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//MULTIPLY SECTION




test('should return 15 when passed 3 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 3;
    const num2 = 5;
    const expected = 15;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 12 when passed 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 3;
    const num2 = 4;
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 16 when passed 4 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 4;
    const num2 = 4;
    const expected = 16;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//DIVIDE SECTION



test('should return 4 when passed 16 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 16;
    const num2 = 4;
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should return 3 when passed 12 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 12;
    const num2 = 4;
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 6 when passed 24 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 24;
    const num2 = 4;
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//SUBTRACT SECTION

test('should return 6 when passed 10 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 10;
    const num2 = 4;
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 2 when passed 10 and 8', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 10;
    const num2 = 8;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return 7 when passed 10 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 10;
    const num2 = 3;
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
/*1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.*/

function sum(arr) {
    return arr.reduce((total, currentValue) => {
        return currentValue > 20 ? total + currentValue : total;
    }, 0);
}

// Example usage:
const myArray = [15, 25, 30, 10, 5, 40];
console.log(sum(myArray)); 

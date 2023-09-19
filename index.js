function product(num1, num2){
    return num1 * num2;
}

const num1 = 31;
const num2 = 2;
const multiply = product (num1, num2);
console.log(multiply);


function number(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.max(random, 1);
  }
  const random = number(1, 100);
  console.log(random);


function modulus(num3, num4){
return (num3 % num4);
}
const num3 = 54;
const num4 = 5;
const mod = modulus(num3, num4);
console.log(mod);



let numbers = [1, 2, 15, 20, 18];
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let max = findMax(numbers);
console.log(max);
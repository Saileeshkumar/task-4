const sumOfNumbers = arr => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const numbersArray = [1, 2, 3, 4, 5];
console.log("Sum of numbers:", sumOfNumbers(numbersArray));
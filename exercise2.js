function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

console.log(createArrayOfNumbers(4, 10));
console.log(createArrayOfNumbers(34, 40));
console.log(createArrayOfNumbers(82, 90));

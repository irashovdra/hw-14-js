function filterArray(numbers, value) {
  for (const number of numbers) {
    if (number > value) {
      console.log(number);
    }
  }
}
filterArray([43, 65, 23, 2, 5, 76, 8], 25);

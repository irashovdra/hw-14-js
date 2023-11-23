// Було

function logItems(items) {
  let message = "";
  let fruitNumber = fruit.indexOf(prompt("enter fruit")) + 1;

  for (const fruit of items) {
    message = `${fruitNumber} - ${fruit}`;
  }
  console.log(message);
  return message;
}

console.log((logItems = ["Mango", "Apple", "Banana"]));

// Стало

const logItems = (items) => {
  let message = "";
  let fruitNumber = fruit.indexOf(prompt("enter fruit")) + 1;

  for (const fruit of items) {
    message = `${fruitNumber} - ${fruit}`;
  }
  console.log(message);
  return message;
};

console.log((logItems = ["Mango", "Apple", "Banana"]));

// Було

function calculateEngravingPrice(message, pricePerWord) {
  message = "I am studying JavaScript";
  const newArray = message.split(" ");
  const totalPrice = newArray.length * pricePerWord;
  return totalPrice;
}

console.log(calculateEngravingPrice("I am studying JavaScript", 10));

// Стало

const calculateEngravingPrice = (message, pricePerWord) => {
  message = "I am studying JavaScript";
  const newArray = message.split(" ");
  const totalPrice = newArray.length * pricePerWord;
  return totalPrice;
};

console.log(calculateEngravingPrice("I am studying JavaScript", 10));

// Було

function findLongestWord(string) {
  let array = string.split(" ");
  console.log(array);
  let longestWord = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("I am studying JavaScript"));

// Стало

const findLongestWord = (string) => {
  let array = string.split(" ");
  let longestWord = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("I am studying JavaScript"));

// Було

// const formatString = function (string) {
//   if (string.length > 40) {
//     string = string.slice(0, 40);
//   }
//   console.log(string.length);
//   return string;
// };
// console.log(
//   formatString(
//     "I started studying English seven years ago. I started studying English seven years ago."
//   )
// );

// Стало

const formatString = (string) => {
  string.length > 40 ? (string = string.slice(0, 40)) : console.log(string);
  return string;
};
console.log(
  formatString(
    "I started studying English seven years ago. I started studying English seven years ago."
  )
);

// Було

// const checkForSpam = function (message) {
//   if (message.indexOf("spam") || message.indexOf("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkForSpam("No spam in this chat!"));

// Стало

const checkForSpam = (message) => {
  message.indexOf("spam") || message.indexOf("sale") ? true : false;
};

console.log(checkForSpam("No spam in this chat!"));

function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length < maxLength) {
    console.log(newArray);
  } else {
    console.log(newArray.slice(0, maxLength));
  }
  return newArray;
}

makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
makeArray(
  ["Earth", "Jupiter"],
  ["Neptune", "Uranus", "Venus"],
  Math.random() * (10 - 3) + 3
);

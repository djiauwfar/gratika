const sortingFunction = (array) => {
  let numberArray = [];
  let alphabetArray = [];

  array.forEach(element => {
    if (typeof element == "number") {
      numberArray.push(element);
    } else if (typeof element == "string") {
      alphabetArray.push(element);
    };
  });

  numberArray.sort((a, b) => {
    return a - b;
  }); alphabetArray.sort();

  return alphabetArray.concat(numberArray);
}

console.log(sortingFunction([12, 9, 30, "A", "M", 99, 82, "J", "N", "B"]));
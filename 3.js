const countAlphabet = (word) => {
  let obj = {};
  let objResult = {}

  for (let i = 0; i < word.length; i++) {
    if (word[i] == " ") continue;
    obj[word[i]] = !obj[word[i]] ? 1 : obj[word[i]] + 1;
  };

  let sortable = [];
  for (var key in obj) {
    sortable.push([key, obj[key]]);
  }

  sortable.sort(function (a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
  });

  sortable.forEach((element) => {
    objResult[element[0]] = element[1]
  });

  return objResult;
};

console.log(countAlphabet('Hello World'));
console.log(countAlphabet('Bismillah'));
console.log(countAlphabet('MasyaAllah'));
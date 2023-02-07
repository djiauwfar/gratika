const checkPattern = (word, pattern) => {
  let founded = 0;

  if (pattern == "") return founded;

  const recurrence = (index, counter) => {
    if (pattern[counter] === undefined) {
      founded++
      return;
    } else if (word[index + counter] == pattern[counter]) {
      recurrence(index, counter + 1);
    };
  };

  for (let i = 0; i < word.length - 1; i++) {
    recurrence(i, 0);
  }

  return founded;
};

console.log(checkPattern("palindrom", "ind"));
console.log(checkPattern("abakadabra", "ab"));
console.log(checkPattern("hello", ""));
console.log(checkPattern("ababab", "aba"));
console.log(checkPattern("aaaaaa", "aa"));
console.log(checkPattern("hell", "hello"));
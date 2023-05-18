const digitToLetters = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
  "0": "0",
  "1": "1",
};

function letterCombinations(input_digit) {
  if (input_digit === "") {
    return [];
  }

  const result = [];

  function backtrack(combination, digits) {
    if (digits.length === 0) {
      result.push(combination);
      return;
    }

    const digit = digits[0];
    const letters = digitToLetters[digit];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(combination + letter, digits.slice(1));
    }
  }

  backtrack("", input_digit);

  return result.sort();
}

module.exports = letterCombinations;

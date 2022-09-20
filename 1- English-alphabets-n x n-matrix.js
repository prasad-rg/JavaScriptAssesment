// Given an input number ’n’, print the English alphabets in n x n matrix in the following format:

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const displayMatrix = (array) => {
  string = "";
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      string += array[i][j].toString() + " ";
    }
    string += "\n";
  }
  return string;
};

const getMatrixOfAlphabets = (num) => {
  let alphabetCount = 0;
  let resultantMatrix = new Array(num);
  for (let i = 0; i < num; i++) {
    resultantMatrix[i] = Array(3).fill("", 0);
  }
  for (let j = 0; j < num; j++) {
    for (let i = num - 1; i >= 0; i--) {
      resultantMatrix[i][j] = ALPHABETS[alphabetCount];
      alphabetCount++;
      if (alphabetCount >= 26) {
        alphabetCount = 0;
      }
    }
  }
  return displayMatrix(resultantMatrix);
};

// console.log(getMatrixOfAlphabets(6))
console.log(getMatrixOfAlphabets(3));

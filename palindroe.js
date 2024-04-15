const getPalindromes = arr => {
  return arr.filter(word => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
};

const palindromeStrings = ["radar", "level", "hello", "world", "noon"];
console.log("Palindromes:");
console.log(getPalindromes(palindromeStrings));
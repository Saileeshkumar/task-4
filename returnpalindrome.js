(function() {
  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

  function getPalindromes(arr) {
    return arr.filter(word => isPalindrome(word));
  }

  const strings = ["radar", "level", "hello", "world", "noon"];
  console.log("Palindromes:");
  console.log(getPalindromes(strings));
})();

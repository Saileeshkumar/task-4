(function() {
  function convertToTitleCaps(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }

  const strings = ["hello", "hai", "how r u ", "thank you"];
  console.log("Title caps:");
  console.log(convertToTitleCaps(strings));
})();

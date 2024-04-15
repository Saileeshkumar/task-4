const convertToTitleCaps = arr => {
  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

const strings = ["hello", "world", "javascript", "programming"];
console.log("Title caps:");
console.log(convertToTitleCaps(strings));

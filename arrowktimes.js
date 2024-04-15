(function() {
  function rotateArray(arr, k) {
    const n = arr.length;
    k %= n;
    const rotated = [...arr.slice(n - k), ...arr.slice(0, n - k)];
    return rotated;
  }

  const array = [1, 2, 3, 4, 5];
  const k = 2;
  console.log("Rotated array:", rotateArray(array, k));
})();

(function() {
  function findMedianSortedArrays(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = merged.length;
    const middle = Math.floor(length / 2);
    if (length % 2 === 0) {
      return (merged[middle - 1] + merged[middle]) / 2;
    } else {
      return merged[middle];
    }
  }

  const nums1 = [1, 3, 5];
  const nums2 = [2, 4, 6];
  console.log("Median:", findMedianSortedArrays(nums1, nums2));
})();

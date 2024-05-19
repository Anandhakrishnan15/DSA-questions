class Solution {
  duplicates(a, n) {
    const duplicatesSet = new Set();
    let zeroCount = 0; // Counter for occurrences of 0

    // Iterate through the array
    for (let i = 0; i < n; i++) {
      let index = Math.abs(a[i]);

      // Special handling for 0
      if (index === 0) {
        if (zeroCount === 1) {
          duplicatesSet.add(index);
        }
        zeroCount++;
      }

      // If the element at index is negative, it's a duplicate
      else if (a[index] < 0 && !duplicatesSet.has(index)) {
        duplicatesSet.add(index);
      } else {
        // Mark the element at index as negative to indicate occurrence
        a[index] = -a[index];
      }
    }

    // If no duplicates found, return [-1]
    if (duplicatesSet.size === 0 && zeroCount < 2) {
      return [-1];
    }

    // If 0 appears more than once, add it to the duplicates
    if (zeroCount > 1) {
      duplicatesSet.add(0);
    }

    // Sort and return the duplicates in ascending order
    return Array.from(duplicatesSet).sort((a, b) => a - b);
  }
}

// Example usage:
const solution = new Solution();
const a = [0, 5, 4,2, 2, 0, 3, 0];
const n = a.length;
console.log(solution.duplicates(a, n)); // Output: [0]

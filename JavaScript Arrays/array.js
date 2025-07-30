// 3. Second Max Element from Array
// Brief: Find the second largest element in an array. Detailed:
// Write a program to find the second maximum element in an array.
// Keep track of both maximum and second maximum values while traversing the array.
// Handle cases where all elements are same or array has duplicates.
// Example: Input: [3, 7, 1, 9, 2] → Output: 7

// let arr = [20,30,60,7,4,90]
// let max = arr[0], secondMax = arr[1]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i]>max) {
//         secondMax = max;
//         max=arr[i]
//     }
// }
// console.log(max, secondMax);

//6. All Zeroes to Left and All Ones to Right
// Brief: Segregate 0s and 1s in a binary array. Detailed: Rearrange an array containing only 0s and 1s such that all 0s appear before all 1s. Use two-pointer technique or counting approach to separate them efficiently. Example: Input: [1, 0, 1, 0, 1, 0] → Output: [0, 0, 0, 1, 1, 1]

// let arr=[1,0,1,0,1,0]
// let i=0, j=0

// for(;i<arr.length;){
//     if (arr[i]==0){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++
// }
// console.log(arr);

// 9. Array Left Rotation by K Elements (Brute Force)
// Brief: Rotate array left by K positions using simple approach. Detailed: Perform left rotation by 1 position K times. This is the simplest but least efficient method with O(n*k) time complexity. For each rotation, store first element and shift all elements left by one position. Example: Input: [1, 2, 3, 4, 5], K=2 → Output: [3, 4, 5, 1, 2]

// let arr = [1, 2, 3, 4, 5];
// let k = 4;
// let n = arr.length;

// for (let i = 0; i < k; i++) {
//   let first = arr[0]; // Store first element
//   for (let j = 0; j < n - 1; j++) {
//     arr[j] = arr[j + 1]; // Shift elements left
//   }
//   arr[n - 1] = first; // Place first at the end
// }

// console.log(arr); // Output: [ 5, 1, 2,3,4]


// 12. Array Left Rotation by K Elements (Block Swap Reverse Algorithm)

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let n = arr.length;

// for (let i = 0; i < k; i++) {
//   let first = arr[0]; 
//   for (let j = 0; j < n - 1; j++) {
//     arr[j] = arr[j + 1]; 
//   }
//   arr[n - 1] = first;
// }

// console.log(arr); // Output: [ 5, 1, 2,3,4]

// 15. Find Largest Element in an Array
// Brief: Identify the maximum element in an array. Detailed: Traverse through the array and keep track of the largest element encountered so far. Initialize with first element and compare with each subsequent element, updating maximum when a larger element is found. Example: Input: [3, 7, 1, 9, 2] → Output: 9

// let arr = [3,7,1,9,2];
// let max=arr[0];
// for(i=1;i<arr.length;i++){
//     if(arr[i]>max){
//     max=arr[i]

//     }
// }
// console.log(max);

// 18. Find Second Smallest Element in an Array
// Brief: Find the second minimum element in an array. Detailed: Keep track of both smallest and second smallest elements while traversing. Handle edge cases like duplicate elements and arrays with less than 2 unique elements. Ensure second smallest is not equal to smallest. Example: Input: [3, 7, 1, 9, 2] → Output: 2

// let arr = [20,30,60,7,4,90]
// let min= arr[0], secondMin = arr[1]
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i]>max) {
//         secondMax = max;
//         max=arr[i]
//     }
// }
// console.log(max, secondMax);



// 21. Sort the Elements of an Array
// Brief: Arrange array elements in ascending order. Detailed: Implement sorting algorithm (bubble sort, selection sort, merge sort, or quick sort) to arrange elements in ascending order. Choose appropriate algorithm based on requirements for time and space complexity. Example: Input: [4, 2, 8, 1, 9] → Output: [1, 2, 4, 8, 9]

// let arr=[4,2,8,1,9]

// arr.sort((a, b) => a - b);
// console.log(arr);

// 25. Counting Distinct Elements in an Array
// Brief: Count number of unique elements in array. Detailed: Count how many unique/distinct elements are present in the array. Use hash set to store unique elements or sort array first and count distinct elements. Handle duplicate elements properly. Example: Input: [1, 2, 2, 3, 3, 3] → Output: 3 distinct elements

// let arr = [1, 2, 2, 3, 3, 3];
// function countDistinctElements(arr) {
//   let unique = [];

//   for (let i = 0; i < arr.length; i++) {
//     let found = 0;
//     for (let j = 0; j < unique.length; j++) {
//       if (arr[i] === unique[j]) {
//         found = 1;
//       }
//     }
//     if (found === 0) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique.length;
// }
// console.log("Distinct count:", countDistinctElements(arr));
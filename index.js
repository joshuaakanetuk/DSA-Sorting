function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  console.log(left, right);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    console.log(leftIndex, rightIndex);
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  console.log(j);
  return j;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

// 1. Understanding merge sort
const LIST_OF_NUMBERS = [
  21,
  1,
  26,
  45,
  29,
  28,
  2,
  9,
  16,
  49,
  39,
  27,
  43,
  34,
  46,
  40,
];
// a. [ 21, 1 ] [ 26, 45 ]
// b. [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]
// c. [ 21, 1, 26, 45, 29, 28, 2, 9 ] [ 16, 49, 39, 27, 43, 34, 46, 40 ]
// d. [ 29 ] [ 28 ]

// console.log(mergeSort(LIST_OF_NUMBERS))

// 2. Understanding quicksort
// console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12], 0, 14))
// console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12], 0, 12))
//  a. Answer is b. because the numbers are next to each other in the array if sorted a < b
//  b.
//      1. 0,6,4,2,1,3,5,7,8,10,9,11
//      2. 0,6,4,2,1,3,5,7,8,10,9,11,12,13
const ANOTHER_DATASET = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
];
// 3, 4
// console.log(quickSort(ANOTHER_DATASET))
// console.log(mergeSort(ANOTHER_DATASET))
//  5.
//  6. Bucket sort
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bucketSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + array.length]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bucketSort(array);
    }
    return array;
};
function randy(array) {
    let swaps = 0;
    let ran = Math.floor((Math.random() * array.length -1)+ 1);
    for (let i = 0; i < array.length - 1; i++) {
        swap(array, i, ran);
        swaps++;
    }

    if (swaps > 0) {
        return bucketSort(array);
    }
    return array;
};

console.log(bucketSort([4, 2, 9, 1, 5]));
// 7. 
console.log(randy([4, 2, 9, 1, 5]));
// 8. 
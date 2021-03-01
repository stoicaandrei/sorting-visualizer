import { SortingFunction } from './types';

const selectionSort: SortingFunction = function* (inputArr) {
  const n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }

      yield { array: inputArr, points: [{ position: i }] };
    }

    if (min != i) {
      // Swapping the elements
      const tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
};

export default selectionSort;

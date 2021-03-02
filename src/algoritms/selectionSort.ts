import { SortingFunction } from 'types';

const selectionSort: SortingFunction = function* (array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[min]) {
        min = j;
      }

      yield { i, j };
    }

    if (min != i) {
      // Swapping the elements
      const tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
  }
};

export default selectionSort;

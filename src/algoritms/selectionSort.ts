import { SortingFunction } from 'types';

import { pointsToColorMap as points } from 'utils';

const selectionSort: SortingFunction = function* (arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }

      yield points([i, j]);
    }

    if (min != i) {
      // Swapping the elements
      const tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
};

export default selectionSort;

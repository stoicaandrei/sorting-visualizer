import { SortingFunction } from 'types';

import { pointsToColorMap as points } from 'utils';

const bubbleSort: SortingFunction = function* (arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swapping the elements
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }

      yield points({ red: i, green: [j, j + 1] });
    }

    if (swapped == false) break;
  }
};

export default bubbleSort;

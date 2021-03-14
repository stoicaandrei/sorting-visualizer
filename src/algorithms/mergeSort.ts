import { ColorMapGenerator, SortingFunction } from '../types';

function* mergeArray(
  arr: number[],
  start: number,
  mid: number,
  end: number
): ColorMapGenerator {
  let start2 = mid + 1;

  // If the direct merge is already sorted
  if (arr[mid] <= arr[start2]) {
    return;
  }

  // Two pointers to maintain start
  // of both arrays to merge
  while (start <= mid && start2 <= end) {
    // If element 1 is in right place
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      const value = arr[start2];
      let index = start2;

      // Shift all the elements between element 1
      // element 2, right by 1.
      while (index != start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;

      // Update all the pointers
      start++;
      mid++;
      start2++;
      yield { start, mid };
    }
  }
}

function* sort(arr: number[], l: number, r: number): ColorMapGenerator {
  if (l < r) {
    const m = Math.floor(l + (r - l) / 2);

    yield* sort(arr, l, m);
    yield* sort(arr, m + 1, r);

    yield* mergeArray(arr, l, m, r);
  }
}

const mergeSort: SortingFunction = function* (arr) {
  yield* sort(arr, 0, arr.length - 1);
};

export default mergeSort;

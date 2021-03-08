import { ColorMapGenerator, SortingFunction } from '../types';
import { pointsToColorMap as points } from 'utils';

function* mergeArray(
  arr: number[],
  l: number,
  m: number,
  r: number
): ColorMapGenerator {
  let k = l;
  let a1 = l;
  let a2 = m + 1;

  const b = Array(arr.length);

  while (a1 <= m && a2 <= r) {
    if (arr[a1] <= arr[a2]) {
      b[k] = arr[a1];
      a1++;
    } else {
      b[k] = arr[a2];
      a2++;
    }
    k++;
    yield points([a1, a2]);
  }

  while (a1 <= m) {
    b[k] = arr[a1];
    a1++;
    k++;
    yield points([a1, a2]);
  }

  while (a2 <= r) {
    b[k] = arr[a2];
    a2++;
    k++;
    yield points([a1, a2]);
  }

  for (let i = l; i <= r; i++) arr[i] = b[i];
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

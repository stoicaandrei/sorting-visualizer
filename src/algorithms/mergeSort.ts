const mergeSort = `
function* mergeArray(arr, start, mid, end) {
  let start2 = mid + 1;

  if (arr[mid] <= arr[start2]) {
    return;
  }

  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      const value = arr[start2];
      let index = start2;

      while (index != start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;

      start++;
      mid++;
      start2++;
      yield { start, mid };
    }
  }
}

function* sort(arr, l, r) {
  if (l < r) {
    const m = Math.floor(l + (r - l) / 2);

    yield* sort(arr, l, m);
    yield* sort(arr, m + 1, r);

    yield* mergeArray(arr, l, m, r);
  }
}

sortingAlgorithm = function* (arr) {
  yield* sort(arr, 0, arr.length - 1);
};
`;

export default mergeSort;

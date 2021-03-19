const selectionSort = `
sortingAlgorithm = function* (arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }

      yield { i, j };
    }

    if (min != i) {
      const tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
};
`;

export default selectionSort;

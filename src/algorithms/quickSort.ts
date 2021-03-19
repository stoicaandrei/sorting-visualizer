const quickSort = `
function* partition(arr, left, right) {
    const pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        yield {i, j};
    }
    return i;
}

function* quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = yield * partition(arr, left, right);
        if (left < index - 1) {
            yield* quickSort(arr, left, index - 1);
        }
        if (index < right) {
            yield* quickSort(arr, index, right);
        }
    }
}

sortingAlgorithm = function* (arr) {
  yield* quickSort(arr, 0, arr.length - 1);
};
`;

export default quickSort;

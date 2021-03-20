const heapSort = `
function* max_heapify(arr,i,n){
    let left = 2 * i;
    let right = 2 * i + 1;
    let maximum;
    if (right < n) {
        if (arr[left] >= arr[right]) {
            maximum = left;
        }
        else{
            maximum = right;
        }
    }
    else if (left < n) {
        maximum = left;
    }
    else return;
    if (arr[i] < arr[maximum]) {
        const temp = arr[i];
        arr[i] = arr[maximum];
        arr[maximum] = temp;
        yield {i, maximum};
        yield* max_heapify(arr, maximum, n);
    }
    return;
}

sortingAlgorithm = function* (arr) {
  let n = arr.length;
  for(let i = Math.floor(n/2)-1; i >= 0; i--){
      yield* max_heapify(arr,i,n);
  }
  for(let i = n-1;i>=0;i--){
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      yield { i };
      yield* max_heapify(arr,0,i);
  }
};
`;

export default heapSort;

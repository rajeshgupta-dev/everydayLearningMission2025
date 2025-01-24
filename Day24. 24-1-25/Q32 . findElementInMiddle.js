// Q. Find the middle Element that right side all elemnet should be grter and left side small  <Elemtn> 
function elementInMiddle(arr) {
    let N = arr.length;
    for (let i = 1; i < N - 1; i++) {
        let l = true;
        let r = true;

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                l = false;
                break;
            }
        }

        for (let j = i + 1; j < N; j++) {
            if (arr[j] < arr[i]) {
                r = false;
                break;
            }
        }
        if (l === true && r === true) {
            console.log(arr[i]);
            return;
        }
    }
    console.log(-1);
}
elementInMiddle([1, 2, 3, 4, 5]);  // 2
elementInMiddle([2, 3, 6, 9]) // 3
elementInMiddle([2, 3, 4, 6, 7, 4]) // 3
elementInMiddle([2, 7, 10, 18, 26, 20, 5]) // -1
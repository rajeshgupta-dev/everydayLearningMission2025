// find stock span for each day 

function financialProblem(arr) {
    let N = arr.length;

    let span = new Array(N).fill(1);
    let stack = [];
    for (let i = 0; i < N; i++) {
        while (stack.length >= 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            span[i] = i + 1;
        } else {
            span[i] = i - stack[stack.length - 1];
        }
        stack.push(i);
    }

    console.log(span.join(' '))

}
let stocks = [100,60, 70, 65, 80, 85]
financialProblem(stocks);   //1 1 2 1 4 5

let stocks1 = [100, 80, 60, 70, 75, 85];
financialProblem(stocks1); // 1 1 1 2 3 5
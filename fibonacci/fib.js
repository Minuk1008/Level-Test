function fibonacci(n) {
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    // [0,1]
    for(i = 2; i <= n; i++) {
        fib.push(fib[i-1] + fib[i-2])
    }

    return fib[fib.length-1];
}

console.log(fibonacci(10));


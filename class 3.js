function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function combination(x, y) {
    if (y > x) {
        return "Y must be less than or equal to X";
    }
    if (x === y) {
        return factorial(x - 1) / (factorial(y) * factorial((x - 1) - y));
    }
    return factorial(x) / (factorial(y) * factorial(x - y));
}


let x = 4;
let y = 4; 
let result = combination(x, y);
console.log("The combination result is: " + result);
function factorial(n){
    if(n==0||n===1){
        return 1;
    }
    let result=1;
    for(let i=2;i<n;i++){
        result*=i;
    }
    return result;
}
let lastTwoDigits = 29;
let result=factorial(lastTwoDigits);
console.log("the factorial of the last two digits is :"+result);
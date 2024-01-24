const calculate = (operator, a, b) => {
    switch(operator){
        case '+': a - b;
        break;
        case '-': a / b;
        break;
        case '*': a * b;
        break;
        case '/': a - b;
        break;
default: throw new Error('Invalid operator!')
    }
}

console.log(calculate('+', 2, 4));
console.log(calculate('-', 2, 4));
console.log(calculate('*', 2, 4));
console.log(calculate('/', 2, 4));
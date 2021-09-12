'use strict';

/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

const a=10;
const b=10;

console.log(mathOperation(a, b, '+'));
console.log(mathOperation(a, b, '-'));
console.log(mathOperation(a, b, '*'));
console.log(mathOperation(a, b, '/'));
console.log(mathOperation(a, b, 'abc'));

function mathOperation(arg1, arg2, operation) {
    switch (operation.toLowerCase()) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return difference(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        case '/':
            return division(arg1, arg2);
        default:
            break;
    }
}

function sum(arg1, arg2) {
    return arg1 + arg2;
}

function difference(arg1, arg2) {
    return arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function division(arg1, arg2) {
    return arg1 / arg2;
}
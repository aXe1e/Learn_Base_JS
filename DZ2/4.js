'use strict';

/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/
const a=10;
const b=10;

console.log(sum(a,b));
console.log(difference(a,b));
console.log(multiplication(a,b));
console.log(division(a,b));

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
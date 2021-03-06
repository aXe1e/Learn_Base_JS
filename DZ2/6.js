'use strict';

/*(Это задание не является частью курса, можете его не делать, оно для тех кому мало обычных заданий, 
    требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет положить на счет в банке. 
Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
*/

const sumRubInBank = parseInt(prompt('Введите кол-во рублей, которые хотите положить на счет в банке:'));
alert(phraseRubInBank(sumRubInBank));

function phraseRubInBank(sumRubInBank) {
    if (isNaN(sumRubInBank)){
        throw new Error('Вы ввели не корректное значение!');
        return;
    }
    
    let stringRub = 'рубл';
    const stringSumRubInBank = sumRubInBank.toString();
    switch (stringSumRubInBank[stringSumRubInBank.length-1]) {
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            stringRub = stringRub + 'ей';
            break;
        case '1':
            stringRub = stringRub + 'ь';
            break;
        case '2':
        case '3':
        case '4':
            stringRub = stringRub + 'я';
            break;
        default:
            break;
    }
    return `Ваша сумма в ${stringSumRubInBank} ${stringRub} успешно зачислена.`
}
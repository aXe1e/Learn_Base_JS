'use strict';

const numberBeforeConvert = 945;
console.log(Convert2Obj(numberBeforeConvert));

/**
 * Функция преобразует число в объект
 * @param {number} numParam Целочисленный параметр из диапазона [0,999]
 * @returns Объект , в котором в соответствующих свойствах описаны разряды числа:
 *          - единицы (в свойстве units)
 *          - десятки (в свойстве tens)
 *          - сотни (в свойстве hundreds)
 */
function Convert2Obj(numParam){
    if (isNaN(numParam) || !Number.isInteger(numParam) || numParam < 0 || numParam > 999){
        console.log('Должно быть целое число из диапазона [0,999]!');
        return {};
    }
    
    return {units: numParam % 10,
            tens: Math.floor(numParam / 10) % 10,
            hundreds: Math.floor(numParam / 100),
    };    
}
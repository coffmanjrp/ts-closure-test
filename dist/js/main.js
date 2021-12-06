"use strict";
function calcFactory(def) {
    var result = def;
    var plus = function (num) {
        console.log('plus Before ', result);
        result += num;
        console.log('plus After ', result);
    };
    var minus = function (num) {
        console.log('minus Before ', result);
        result -= num;
        console.log('minus After ', result);
    };
    var multiply = function (num) {
        console.log('multiply Before ', result);
        result *= num;
        console.log('multiply After ', result);
    };
    var divide = function (num) {
        console.log('divide Before ', result);
        result /= num;
        console.log('divide After ', result);
    };
    return { plus: plus, minus: minus, multiply: multiply, divide: divide };
}
var calc = calcFactory(10);
calc.plus(3);
calc.minus(5);
calc.multiply(8);
calc.divide(4);
console.log('--------------------------------------');
var calc2 = calcFactory(20);
calc2.plus(3);
calc2.minus(5);
calc2.multiply(8);
calc2.divide(4);

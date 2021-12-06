function calcFactory(def: number) {
  let result: number = def;

  const plus = (num: number) => {
    console.log('plus Before ', result);
    result += num;
    console.log('plus After ', result);
  };
  const minus = (num: number) => {
    console.log('minus Before ', result);
    result -= num;
    console.log('minus After ', result);
  };
  const multiply = (num: number) => {
    console.log('multiply Before ', result);
    result *= num;
    console.log('multiply After ', result);
  };
  const divide = (num: number) => {
    console.log('divide Before ', result);
    result /= num;
    console.log('divide After ', result);
  };

  return { plus, minus, multiply, divide };
}

const calc = calcFactory(10);
calc.plus(3);
calc.minus(5);
calc.multiply(8);
calc.divide(4);

console.log('--------------------------------------');

const calc2 = calcFactory(20);
calc2.plus(3);
calc2.minus(5);
calc2.multiply(8);
calc2.divide(4);

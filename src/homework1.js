/* 1.В переменных a и b хранятся числа. Написать
программу, которая выводит в консоль произведение
и сумму этих чисел. */

export function printSumAndProduction(a, b) {
  console.log(`${a}+${b}=${a + b}; ${a}*${b}=${a * b}`);
}

/* 2.В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обоих строках. */

export function printTotalLengthOfStrings(str1, str2) {
  console.log(`total=${str1.length + str2.length}`);
}

/* 3.Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа. */

export function printSumOfNumbersFromInput() {
  const number = window.prompt("Введите трехзначное число");
  if (number > 99 && number < 1000) {
    const lastDigit = number % 10;
    const middleDigit = ((number % 100) - lastDigit) / 10;
    const firstDigit = (number - (number % 100)) / 100;

    console.log(lastDigit + middleDigit + firstDigit);
  } else {
    console.log(`Неверный ввод:${number}`);
  }
}

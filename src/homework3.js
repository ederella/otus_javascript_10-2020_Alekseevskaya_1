/* 1.Вывести в консоль сумму всех целых чисел от 50 до 100. */

export function printSumOfIntegerBetween50And100() {
  let sum = 0;
  for (let i = 50; i < 101; i++) {
    sum += i;
  }
  console.log(sum);
}

/* 2.Вывести в консоль таблицу умножения на 7. */

export function printMultiplicationTable() {
  for (let i = 0; i <= 10; i++) {
    console.log(`7*${i}=${  7 * i}`);
  }
}

/* Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N */

export function printAverageOfPositiveOddNumsLessThanInput() {
  const number = window.prompt("Введите число");
  let oddNumSum = 0;
  let oddNumCount = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 > 0) {
      oddNumSum += i;
      oddNumCount += 1;
    }
  }
  console.log(oddNumSum / oddNumCount);
}

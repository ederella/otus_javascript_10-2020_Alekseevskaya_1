/*
1.Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим.
2.Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких.
*Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x. */

export function diff(num1, num2) {
  return Math.abs(num1 - num2);
}
export function isWord(text) {
  const trimmedText = text.trim();
  return trimmedText.length > 0 && trimmedText.split(/,\s+|\s+|,/).length === 1;
}
export function pow(a, x) {
  return a ** x;
}

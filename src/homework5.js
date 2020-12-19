/* Создайте массив целых чисел из 10 элементов.
1.Выведите в консоль сумму всех элементов массива.
2.Создайте новый массив на основе исходного, в
котором каждый элемент будет вдвое больше
элемента исходного массива с таким же индексом.
(a[1] = 3, b[1] = 6, где a — исходный массив, 
b — новый массив).
3.*Найдите и выведите в консоль наибольший и
наименьший элементы исходного массива. */

export function getSimpleArray() {
  const numbersArr = [];
  for (let i = 0; i < 10; i++) {
    numbersArr.push(i);
  }
  return numbersArr;
}
export function printSumOfArrayElements(numbersArr) {
  const result = numbersArr.reduce((sum, current) => sum + current, 0);
  console.log(result);
}
export function getDoubleNumbersArray(numbersArr) {
  const doubleNumbersArr = [];
  numbersArr.forEach((item) => {
    doubleNumbersArr.push(item * 2);
  });
  return doubleNumbersArr;
}
export function printMaxElement(numbersArr) {
  const maxElement = numbersArr.reduce((max, current) => {
    if (max > current) {
      return max;
    } 
      return current;
    
  });
  console.log(maxElement);
}
export function printMinElement(numbersArr) {
  const minElement = numbersArr.reduce((min, current) => {
    if (min < current) {
      return min;
    } 
      return current;
    
  });
  console.log(minElement);
}

/// / Задание 9
/* 1.Даны длины трёх сторон треугольника. Определить,
является ли треугольник прямоугольным. */

export function RightTriangle(hip, leg1, leg2) {
  this.hip = hip;
  this.leg1 = leg1;
  this.leg2 = leg2;
  this.isRight = function checkIfRight() {
    if (hip ** 2 === leg1 ** 2 + leg2 ** 2) {
      return true;
    }
    return false;
  };
}
export function defineTriangle(a, b, c) {
  if (a > b && a > c) {
    return new RightTriangle(a, b, c).isRight();
  }
  if (b > a && b > c) {
    return new RightTriangle(b, a, c).isRight();
  }
  return new RightTriangle(c, a, b).isRight();
}

/* 2.Пользователь вводит число R. Написать программу,
которая выведет в консоль длину окружности и
площадь круга с радиусом R. */

export function printCircleInfo() {
  const r = window.prompt("Enter radius");
  console.log(`Circle length: ${(2 * Math.PI * r).toFixed(2)}`);
  console.log(`Circle square: ${(Math.PI * r ** 2).toFixed(2)}`);
}
/* Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c. */

export function solveEquation() {
  const [a, b, c] = window.prompt("Enter coefficients: a b c").split(" ");

  const d = b ** 2 - 4 * a * c;
  if (d >= 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(`${a}x^2 + ${b}x + ${c} = 0; x1 = ${x1}, x2 = ${x2}`);
  } else {
    console.log(
      `${a}x^2 + ${b}x + ${c} = 0; no solution in the set of real numbers`
    );
  }
}

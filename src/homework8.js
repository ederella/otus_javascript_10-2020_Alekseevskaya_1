/// / Задание 8
/* 1.Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате. */
export function getDayName(day) {
  switch (day) {
    case 1:
      return "понедельник";
    case 2:
      return "вторник";
    case 3:
      return "среда";
    case 4:
      return "четверг";
    case 5:
      return "пятница";
    case 6:
      return "суббота";
    case 0:
      return "воскресенье";
    default:
      return "некорректный ввод";
  }
}
export function printDayNameByDateFromInput() {
  const input = window.prompt("Введите дату DD.MM.YYYY");
  const [day, month, year] = input.split(".");
  const inputDate = new Date(`${year}-${month}-${day}`);

  console.log(getDayName(inputDate.getDay()));
}

/* 2.Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня. */
export function printMinutesFromStartOfToday() {
  const dt = new global.Date();
  console.log(dt.getHours() * 60 + dt.getMinutes());
}
/* 3.*В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя */
export function getUserDate(user) {
  const [day, month, year] = user.split(".");
  return new Date(`${year}-${month}-${day}`);
}
export function getYongestUser(user1, user2) {
  return getUserDate(user1) - getUserDate(user2) > 0 ? user1 : user2;
}

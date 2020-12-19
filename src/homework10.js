/// / Задание 10
/* Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
1.Датой.
2.Адресом электронной почты.
3.*Номером телефона. */

export function getStringTypeByInput() {
  const text = window.prompt("enter text");
  const regDate = /(0[1-9]|[12][0-9]|3[01]){1,2}[./-](0[1-9]|1[012]){1,2}[./-]\d{4}/;
  const regEmail = /[a-zA-z_.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
  const regPhone = /\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}/;

  if (regDate.test(text)) {
    return "date";
  } if (regEmail.test(text)) {
    return "email";
  } if (regPhone.test(text)) {
    return "phone";
  } 
    return "not found";
  
}

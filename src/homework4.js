/*
Создайте объект user, содержащий поле name со
значением ‘John’.
1.Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.
2.Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
admin
Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей */

export function createUserAndSetAgeFromInput() {
  const user = { name: "John" };
  const enteredAge = window.prompt("Enter age");
  user.age = enteredAge;
  return user;
}

export function createAdmin(user) {
  const admin = {};
  Object.assign(admin, user);
  admin.role = "admin";
  return admin;
}

export function createVariablesFromFields(admin) {
  const { name, age, role } = admin;
  console.log(name);
  console.log(age);
  console.log(role);
}

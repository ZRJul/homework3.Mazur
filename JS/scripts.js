/*Напишіть скрипт, який рахує кількість секунд за годину.

Запросити у користувача кількість годин
Порахувати скільки секунд у цій кількості годин
Записати обчислене значення у змінну
Вивести цю змінну користувачу в alert */

let hours = +prompt('How many hours?', ' ');
let seconds = hours * 3600;
alert(`number of seconds ${seconds}`);
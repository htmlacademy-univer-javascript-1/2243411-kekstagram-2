//Функция, возвращающая случайное целое число из переданного диапазона включительно
const randomNumber = function (firstNumber, lastNumber) {
  if (firstNumber >= lastNumber) {
    const message = 'Ошибка!Неправильно указан диапазон';
    return message;
  }
  if (firstNumber < 0) {
    const message = 'Ошибка!Число не может быть меньше нуля';
    return message;
  }
  const number = firstNumber + Math.random() * (lastNumber + 1 - firstNumber); //источник-learn.javascript.ru/task/random-int-min-max
  return Math.floor(number);
};
randomNumber(2,3);

//Функция для проверки максимальной длины строки
const lineLimit = function (textString, maxLength) {
  const string = textString.length;
  if (string > maxLength) {
    return false;
  }
  return true;
};
lineLimit('hello', 140);

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
  let number = firstNumber + Math.random() * (lastNumber + 1 - firstNumber); //источник-learn.javascript.ru/task/random-int-min-max
  return Math.floor(number);
};

//Функция для проверки максимальной длины строки
const lineLimit = function (textString, maxLength) {
  let string = textString.length;
  if (string > maxLength) {
    return false;
  }
  return true;
};

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

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const outcome = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(outcome);
};

function getRandomNoRepeat(min, max) {
  const arr = [];
  for(let i = min; i <= max; i++) {
    arr.push(i);
  }
  arr.sort(() => 0.5 - Math.random());
  return [...new Set(arr)];

}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomPositiveInteger, getRandomArrayElement, getRandomNoRepeat, isEscapeKey};

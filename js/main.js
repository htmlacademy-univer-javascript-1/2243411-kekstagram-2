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

const NAMES = [
  'Магомед',
  'Александра',
  'Евгения',
  'Артем',
  'Варвара',
  'Илья',
];

const DESCRIPTION = [
  'Красивое описание фотографии',
  'Минимум вложений и максимум пользы. Если что, на фото моя собака',
  'Мое утро',
  'Как говорится, без кота и жизнь не та',
];

const COMMENTS_COUNT_MAX = 6;
const COMMENTS_COUNT_MIN = 2;
const result = [];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

function getRandomNoRepeat(min, max) {
  const arr = [];
  for(let i = min; i <= max; i++) {
    arr.push(i);
  }
  arr.sort(() => 0.5 - Math.random());
  return [...new Set(arr)];

}

getRandomNoRepeat(1, 25).forEach((id) => {
  result.push ({
    id,
    url: `photos/${id}.jpg1`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX)}, (_, index) => getComment(index + 1))
  });
});

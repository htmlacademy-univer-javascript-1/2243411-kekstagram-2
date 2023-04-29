import {getRandomPositiveInteger, getRandomArrayElement, getRandomNoRepeat} from './util.js';
import {result, COMMENTS, NAMES, DESCRIPTION, COMMENTS_COUNT_MAX, COMMENTS_COUNT_MIN} from './consts.js';

const getComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPosts = function () {
  getRandomNoRepeat (1, 25).forEach((id) => {
    result.push ({
      id,
      url: `photos/${id}.jpg1`,
      description: getRandomArrayElement(DESCRIPTION),
      likes: getRandomPositiveInteger(15, 200),
      comments: Array.from({length: getRandomPositiveInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX)}, (_, index) => getComment(index + 1))
    });
  });
};

export {getComment, createPosts};

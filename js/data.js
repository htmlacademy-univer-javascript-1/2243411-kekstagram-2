import {getRandomPositiveInteger, getRandomArrayElement, getRandomNoRepeat} from './utils.js';
import {result, COMMENTS, NAMES, DESCRIPTION, COMMENTS_COUNT_MAX, COMMENTS_COUNT_MIN, MIN_LIKES, MAX_LIKES, NUMBER_IMG, NEED_MASSIV} from './consts.js';

const getComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, NUMBER_IMG)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPosts = function () {
  getRandomNoRepeat (1, NEED_MASSIV).forEach((id) => {
    result.push ({
      id,
      url: `photos/${id}.jpg1`,
      description: getRandomArrayElement(DESCRIPTION),
      likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
      comments: Array.from({length: getRandomPositiveInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX)}, (_, index) => getComment(index + 1))
    });
  });
};

const photos = () => Array.from({NEED_MASSIV}, createPosts);

export {getComment, createPosts, photos};

import {COLORS} from '../const';

const DescriptionItems = [
  'Buy new sneakers',
  'Go to a workout',
  'Execute the project',
];

const DefaultRepeatingDays = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};

const getRandomIntegerNumber = (min, max, includeLastNumber = 0) => (
  min + Math.floor(Math.random() * (max - min + includeLastNumber))
);

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const generateRepeatingDays = () => (
  Object.assign({}, DefaultRepeatingDays, {
    'mo': Math.random() > 0.5,
  })
);

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    //Math.random() > 0.5 ? new Date() : null,
    color: getRandomArrayItem(COLORS),
    //repeatingDays: Object.assign({}, DefaultRepeatingDays, {"mo": Math.random() > 0.5}),
    isArchive: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
  };
};

const generateTasks = (count) => (
  new Array(count)
    .fill('')
    .map(generateTask)
);

export {generateTask, generateTasks};

const castTimeFormat = (value) => (
  value < 10 ? `0${value}` : String(value)
);

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};





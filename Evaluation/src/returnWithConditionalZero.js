export const returnWithConditionalZero = (time) => {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
};
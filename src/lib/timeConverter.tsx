export const timeConverter = (second: number): string => {
  const timeM = ('0' + Math.floor(second / 60)).slice(-2);
  const timeS = ('0' + Math.floor(second % 60)).slice(-2);
  const timeString = timeM + ':' + timeS;

  return timeString;
};

export const minuteConverter = (second: number): string => {
  const timeM = ('0' + Math.floor(second / 60)).slice(-2);
  return timeM;
};
export const secondConverter = (second: number): string => {
  const timeS = ('0' + Math.floor(second % 60)).slice(-2);
  return timeS;
};

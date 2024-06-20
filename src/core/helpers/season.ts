const getSeason = () => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) {
    return "spring";
  } else if (month >= 5 && month <= 7) {
    return "summer";
  } else if (month >= 8 && month <= 10) {
    return "fall";
  } else {
    return "winter";
  }
};

export const getSeasonMessage = () => {
  const month = new Date().getMonth();

  if (month >= 2 && month <= 4) {
    return "Happy spring! Enjoy the blooming flowers and the fresh start as you tour the resume.";
  } else if (month >= 5 && month <= 7) {
    return "Happy summer! Bask in the warmth and sunshine while exploring the resume.";
  } else if (month >= 8 && month <= 10) {
    return "Happy fall! Embrace the vibrant colors and crisp air as you journey through the resume.";
  } else {
    return "Happy winter! Please stay warm and enjoy the tour of the resume.";
  }
};
export default getSeason;

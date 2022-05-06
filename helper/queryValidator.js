// function for checking query parameters and send back error message if invalid
const queryValidator = (names, sortBy, direction) => {
  const validSortBy = ["id", "retweet_count", "like_count", "reply_count"];
  const validDirection = ["desc", "asc"];

  if (!names) {
    return { error: 'names parameter is required' };
  }

  if (sortBy && !validSortBy.includes(sortBy)) {
    return { error: 'sortBy parameter is invalid' };
  }

  if (direction && !validDirection.includes(direction)) {
    return { error: 'direction parameter is invalid' };
  }

  return null;
};

module.exports = queryValidator;
// function for checking query parameters and send back error message if invalid
const queryValidator = (tags, sortBy, direction) => {
  const validSortBy = ["id", "reads", "likes", "popularity"];
  const validDirection = ["desc", "asc"];

  if (!tags) {
    return { error: 'Tags parameter is required' };
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
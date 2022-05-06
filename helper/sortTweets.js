const sortPosts = (sortBy, direction, tweets) => {

  // default sorting criteria is base on id in ascending direction
  const sortField = sortBy ? sortBy : 'id';
  const sortDirection = direction ? direction : 'desc';

  if (sortDirection === 'desc') {
    return tweets.sort((tweetA, tweetB) => tweetA[sortField] - tweetB[sortField]);
  } else {
    return tweets.sort((tweetA, tweetB) => tweetB[sortField] - tweetA[sortField]);
  }
};

module.exports = sortPosts;
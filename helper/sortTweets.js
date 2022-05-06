const sortTweets = (sortBy, direction, tweets) => {
  // default sorting direction is descending
  const sortDirection = direction ? direction : 'desc';
  
  if (sortBy && sortBy !== 'id') {
    if (sortDirection === 'desc') {
      return tweets.sort((tweetA, tweetB) => tweetB.public_metrics[sortBy] - tweetA.public_metrics[sortBy]);
    } else {
      return tweets.sort((tweetA, tweetB) => tweetA.public_metrics[sortBy] - tweetB.public_metrics[sortBy]);
    }
  }
  
  // default sorting criteria is base on id in descending direction
  if (sortDirection === 'desc') {
    return tweets.sort((tweetA, tweetB) => tweetB.id - tweetA.id);
  } else {
    return tweets.sort((tweetA, tweetB) => tweetA.id - tweetB.id);
  }
  
};

module.exports = sortTweets;
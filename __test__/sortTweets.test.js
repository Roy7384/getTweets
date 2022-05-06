const sortTweets = require('../helper/sortTweets');

describe('Test tweets sorting helper function', () => {

  test('It should sort tweets based on field and direction', () => {
    const tweets = [{ id: 2 }, { id: 1 }, { id: 3 }];
    const sortedtweets = [{ id: 3 }, { id: 2 }, { id: 1 }];

    const tweetsBylikes = [{ public_metrics: {likes: 2}, id: 1 }, { public_metrics: {likes: 1}, id: 2 }, { public_metrics: {likes: 3}, id: 3 }];
    const descSortedtweets = [{ public_metrics: {likes: 3}, id: 3 }, { public_metrics: {likes: 2}, id: 1 }, { public_metrics: {likes: 1}, id: 2 }];

    expect(sortTweets(null, null, tweets)).toEqual(sortedtweets);
    expect(sortTweets('id', 'desc', tweets)).toEqual(sortedtweets);
    expect(sortTweets('likes', null, tweetsBylikes)).toEqual(descSortedtweets);
  });
});
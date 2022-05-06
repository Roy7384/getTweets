const sortTweets = require('../helper/sortTweets');

describe('Test tweets sorting helper function', () => {

  test('It should sort tweets based on field and direction', () => {
    const tweets = [{ id: 2 }, { id: 1 }, { id: 3 }];
    const sortedtweets = [{ id: 3 }, { id: 2 }, { id: 1 }];

    const tweetsBylikes = [{ likes: 2, id: 1 }, { likes: 1, id: 2 }, { likes: 3, id: 3 }];
    const descSortedtweets = [{ likes: 3, id: 3 }, { likes: 2, id: 1 }, { likes: 1, id: 2 }];

    expect(sortTweets(null, null, tweets)).toEqual(sortedtweets);
    expect(sortTweets('id', 'desc', tweets)).toEqual(sortedtweets);
    expect(sortTweets('likes', null, tweetsBylikes)).toEqual(descSortedtweets);
  });
});
const sortPosts = require('../helper/sortPosts');

describe('Test posts sorting helper function', () => {

  test('It should sort posts based on field and direction', () => {
    const posts = [{ id: 2 }, { id: 1 }, { id: 3 }];
    const sortedPosts = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const postsByRate = [{ rate: 2, id: 1 }, { rate: 1, id: 2 }, { rate: 3, id: 3 }];
    const descSortedPosts = [{ rate: 3, id: 3 }, { rate: 2, id: 1 }, { rate: 1, id: 2 }];

    expect(sortPosts(null, null, posts)).toEqual(sortedPosts);
    expect(sortPosts('id', 'asc', posts)).toEqual(sortedPosts);
    expect(sortPosts('rate', 'desc', postsByRate)).toEqual(descSortedPosts);
  });
});
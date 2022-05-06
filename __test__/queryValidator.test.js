const queryValidator = require('../helper/queryValidator');

describe('Test query validation helper function', () => {

  test('It should return error when no names are provided', () => {
    expect(queryValidator().error).toBe('names parameter is required');
  });

  test('It should return error when invalid sortBy paramter is provided', () => {
    expect(queryValidator('names', 'author').error).toBe('sortBy parameter is invalid');
  });

  test('It should return error when invalid direction paramter is provided', () => {
    expect(queryValidator('names', 'id', 'ascd').error).toBe('direction parameter is invalid');
  });

  test('It should return null when all parameters are valid', () => {
    expect(queryValidator('names')).toBe(null);
    expect(queryValidator('names', 'id', 'asc')).toBe(null);
  });
});
const getTwitterId = require("../helper/getTwitterId");

describe("Test getting twitter id from usernames", () => {
  test("It should return correct twitter ids", done => {
    getTwitterId(["elonmusk", "vitalikbuterin"], {}).then(result => {
      expect(result).toEqual(["44196397", "295218901"]);
      done();
    });
  });
});

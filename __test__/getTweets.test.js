const getTweets = require("../helper/getTweets");
const getTwitterId = require("../helper/getTwitterId");
const axios = require("axios");

jest.mock("axios");
axios.get.mockResolvedValue({ data: { data: [{ id: 1 }] } });

jest.mock("../helper/getTwitterId");
getTwitterId.mockResolvedValue({ roy: 1 });

describe("Test getTweets function with mock api call", () => {
  test("It should return mock result", done => {
    getTweets(["roy"], {}).then(result => {
      expect(result).toEqual([{ id: 1 }]);
      done();
    });
  });

  test("It should not call api if result already in cached result", done => {
    getTweets(['elon'], {'elon': [{id: 1}]}).then(result => {
      expect(result).toEqual([{ id: 1 }]);
      expect(axios.mock.calls.length).toBe(0);
      done();
    });
  });
});

const Twit = require("../../database/models/twitter");
const { createTwit } = require("./twitterController");

jest.mock("../../database/models/twitter");

describe("Given a createTwits function", () => {
  describe("When it receives a request ", () => {
    test("Then it should return a response with the new twit", async () => {
      const res = {
        json: jest.fn(),
      };
      const twit = {
        text: "Hola hola",
        likes: 2,
        date: new Date(2021, 4, 1),
      };

      const req = { body: twit };
      Twit.create = jest.fn().mockResolvedValue(twit);

      await createTwit(req, res, null);

      expect(Twit.create).toHaveBeenCalledWith(twit);
      expect(res.json).toHaveBeenCalledWith(twit);
    });
  });
});

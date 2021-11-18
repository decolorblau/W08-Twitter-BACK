require("dotenv").config();
const mongoose = require("mongoose");
const supertest = require("supertest");
const bcrypt = require("bcrypt");
const { app, initializeServer } = require("../index");
const initializeMongoDB = require("../../database/index");
const Twit = require("../../database/models/twitter");

const request = supertest(app);
let server;

beforeAll(async () => {
  await initializeMongoDB(process.env.DB_STRING_TEST);
  server = await initializeServer(process.env.SERVER_PORT_TEST);
});

beforeEach(async () => {
  await Twit.deleteMany();
  await Twit.create({
    date: "2021-11-18T18:30:21.764Z",
    _id: "61969bbd605684dcf8d48adf",
    text: "Welcome",
    likes: 3,
  });
  await Twit.create({
    date: "2021-11-18T18:30:21.764Z",
    _id: "61969bbd605684dcf8d48ada",
    text: "hello",
    likes: 2,
  });
});

afterAll((done) => {
  server.close(async () => {
    await mongoose.connection.close();
    done();
  });
});

describe("Given a /twits router", () => {
  describe("When a Get request to /twits/ arrives", () => {
    test.only("Then it should respond with an array of twits and a 200 status", async () => {
      const {
        body: [arr1, arr2],
      } = await request.get("/twits/").expect(200);

      expect(arr1).toEqual({
        date: "2021-11-18T18:30:21.764Z",
        id: "61969bbd605684dcf8d48adf",
        text: "Welcome",
        likes: 3,
      });
      expect(arr2).toEqual({
        date: "2021-11-18T18:30:21.764Z",
        id: "61969bbd605684dcf8d48ada",
        text: "hello",
        likes: 2,
      });
    });
  });
});

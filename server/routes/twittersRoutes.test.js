/* require("dotenv").config();
const mongoose = require("mongoose");
const supertest = require("supertest");
const bcrypt = require("bcrypt");
const { app, initializeServer } = require("../index");
const initializeMongoDB = require("../../database/index");
const Twit = require("../../database/models/twitter");

const request = supertest(app);
let server;
let token;

beforeAll(async () => {
  await initializeMongoDB(process.env.DB_STRING_TEST);
  server = await initializeServer(process.env.SERVER_PORT_TEST);
});

beforeEach(async () => {
  await Twit.deleteMany();
  await Twit.create({
    text: "Welcome",
    likes: 3,
  });
  await Twit.create({
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
    test("Then it should respond with an array of twits and a 200 status", async () => {
      const { body } = await request.get("/twits/").expect(200);

      expect(body).toHaveLength(2);
      expect(body).toContainEqual({ text: "Welcome", likes: 3 });
      expect(body).toContainEqual({ text: "hello", likes: 2 });
    });
  });
  describe("When a POST request to /twits/ with a twit", () => {
    test("then it should respond with the new twit and a status 201", async () => {
      const { body } = await request
        .post("/twits/")
        .send({ text: "bona nit", likes: 10 })
        .expect(201);

      expect(body).toHaveProperty("text" && "likes");
      expect(body).toHaveProperty("likes", 10);
    });
  });
}); */

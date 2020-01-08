const express = require('express');

const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

const server = express();


server.get('/', async (req, res) => {
  try {
    const messageOfTheDay = process.env.MOTD || 'Hello World!';
    res.status(200).json({ motd: messageOfTheDay, shoutouts });
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve MOTD' });
  }
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url}`
  );

  next();
}

server.use(express.json());
server.use(logger);
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

module.exports = server;

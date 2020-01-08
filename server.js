const express = require('express');

const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

const server = express();

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

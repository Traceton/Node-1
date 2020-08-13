require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const server = express();
const database = mongoose.connection;
const contactFormsRouter = require("./routes/contactForms");
const blogPostsRouter = require("./routes/blogPosts");
const usersRouter = require("./routes/users");
const gameSessionsRouter = require("./routes/gameSessions");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
database.on("error", (error) => {
  console.log(error);
});
database.once("open", () => {
  console.log("connected to database");
});

server.use(express.json());

server.use("/contactForms", contactFormsRouter);
server.use("/blogPosts", blogPostsRouter);
server.use("/users", usersRouter);
server.use("/gameSessions", gameSessionsRouter);

server.listen(process.env.PORT, () => {
  console.log(`running at http://localhost:${process.env.PORT}`);
});

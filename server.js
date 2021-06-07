const express = require("express");
const path = require("path");
const cookeParser = require("cookie-parser");
const app = express();
const http = require("http").createServer(app);
const config = require("./config/dev");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookeParser());
app.use("/api/user", require("./routes/user.js"));

const port = 5000;
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connecting...");
    http.listen(port, function () {
      console.log("listening on port");
      //Http listening here
    });
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/client/build/index.html"));
});

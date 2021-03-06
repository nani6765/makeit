const express = require("express");
const path = require("path");
const cookeParser = require("cookie-parser");
const app = express();
const http = require("http").createServer(app);
const config = require("./server/config/key");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookeParser());

app.use("/api/main", require("./server/routes/main.js"));
app.use("/api/user", require("./server/routes/user.js"));
app.use("/api/community", require("./server/routes/community.js"));
app.use("/api/chat", require("./server/routes/chat.js"));
app.use("/api/alarm", require("./server/routes/alarms.js"));
app.use("/api/making", require("./server/routes/making.js"));
app.use("/api/participate", require("./server/routes/participate.js"));
app.use("/api/portfolio", require("./server/routes/portfolio.js"));
app.use("/api/util", require("./server/routes/util.js"));


const port = process.env.PORT || 5000;

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
      console.log("listening on", port);
    });
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

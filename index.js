const express = require("express");
const path = require("path");
const cookeParser = require("cookie-parser");
const app = express();
const http = require("http").createServer(app);
const config = require("./config/key");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookeParser());

app.use("/api/main", require("./routes/main.js"));
app.use("/api/user", require("./routes/user.js"));
app.use("/api/community", require("./routes/community.js"));
app.use("/api/chat", require("./routes/chat.js"));
app.use("/api/alarm", require("./routes/alarms.js"));
app.use("/api/making", require("./routes/making.js"));

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
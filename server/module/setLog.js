const { User, Log } = require("../model/User.js");

async function setLog(uid, type, url) {
  let log = {
    type: type,
    url: url,
  };
  const LogDoc = new Log(log);
  await LogDoc.save()
    .then((doc) => {
       User.findOneAndUpdate({ uid: uid }, { $push: { logs: doc._id } })
        .exec()
        .then((result) => {
          console.log("Log Saved...");
          return true;
        });
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

module.exports = setLog;

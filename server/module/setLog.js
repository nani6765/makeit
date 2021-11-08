import { User, Log } from "../model/User.js";

function setLog(uid, type, url) {
  let log = {
    type: type,
    url: url,
  };
  const LogDoc = new Log(log);
  LogDoc.then((doc) => {
    User.findOneAndUpdate({ uid: uid }, { $push: { logs: doc._id } })
      .exec()
      .then((err, result) => {
        if (err) {
          console.log(err);
          return false;
        } else {
          return true;
        }
      });
  });
}

module.exports = setLog;

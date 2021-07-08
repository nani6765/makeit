var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function RealTime() {
  let time = moment().format("YY-MM-DD[ ]HH:mm");
  return time;
}

module.exports = RealTime;

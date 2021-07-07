var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function RealTime() {   
  return moment().format("YY-MM-DD[ ]HH:mm");
}

module.exports = RealTime;
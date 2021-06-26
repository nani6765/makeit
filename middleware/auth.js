const { User } = require("../model/User");

let auth = (req, res, next) => {
  let token = req.cookies.friends;
  // 토큰을 복호화 한후  유저를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    //user.error = false;
    next();
  });
};

module.exports = { auth };

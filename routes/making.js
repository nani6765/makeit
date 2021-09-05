var router = require("express").Router();

router.post("/proucer/youtube", (req, res) => {
  console.log(req.body);
  router.get("https://www.googleapis.com/youtube/v3/search");
});

module.exports = router;

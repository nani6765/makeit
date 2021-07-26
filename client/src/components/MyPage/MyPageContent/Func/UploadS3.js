const AWS = require("aws-sdk");

const endpoint = new AWS.Endpoint("https://kr.object.ncloudstorage.com");
const region = "kr-standard";
const config = require("../../../../config/key.js");

const S3 = new AWS.S3({
  endpoint,
  region,
  credentials: {
    accessKeyId: config.access_key,
    secretAccessKey: config.secret_key,
  },
});

export default S3;

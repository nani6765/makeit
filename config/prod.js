module.exports = {
  mongoURI: process.env.MONGO_URI,
  access_key: process.env.S3_KEY,
  secret_key: process.env.S3_SECRET,
  smtpServerURL: process.env.MAIL_SMTP_URL,
  authUser: process.env.MAIL_AUTHUSER,
  authPass: process.env.MAIL_AUTHPASS,
  port: process.env.MAIL_PORT,
};

require("dotenv").config();
const {app} = require("./app.js");
const {testRouter, authRouter} = require("./routes");

app.use("/auth", authRouter);
app.use("/test", testRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server Started at ${port}`));


/*
  -- CREATE JWT_SECRET_KEY --

  1. open node terminal
  2. require("crypto").randomBytes(64).toString("hex")
*/

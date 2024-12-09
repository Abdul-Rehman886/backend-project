const express = require("express");

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const morgan = require("morgan");

const userRouter = require("./routes/userRouter");

const vendorRouter = require("./routes/vendorRouter");

const productRouter = require("./routes/productRouter");

const authRouter = require("./routes/authRouter");

const { db } = require("./models/index");

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/user", userRouter);

app.use("/vendor", vendorRouter);

app.use("/product", productRouter);

app.use("/auth", authRouter);

// app.use((req, res, next)=>{
// next (createError(404))
// });

// app.listen(port , ()=>{
//     console.log(`App listening on port ${port}`);

// })

db.connection
  .sync({ alter: true, logging: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);

    console.log("Unable to connect to Database");
  });

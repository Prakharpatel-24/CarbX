const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const foodRoutes = require("./routes/food-routes");
const userRoutes = require("./routes/user-routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded());

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/api/food", foodRoutes);
app.use("/api/user", userRoutes);

app.use(function (error, req, res, next) {
  if (req.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred." });
});

const uri =
  "mongodb+srv://abhinav:abhinavmnnit@cluster0.eoai2.mongodb.net/carbx";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(5000, () => {
      console.log("ok");
    })
  )
  .catch((err) => console.log(err));

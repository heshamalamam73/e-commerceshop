import express from "express";
import config from "./config.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
const mongodbUrl = config.MONGODB_URL;
import userRoute from "./routes/userRoute.js";
import producRoute from "./routes/productRoute.js";
import bodyParser from "body-parser";
import { seedDb } from "./seeds/index.js";
import flash from "connect-flash";
import session from "express-session";
import User from "./models/userModel.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
var passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
import path from "path";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sessionConfig = {
  secret: "heepkkkspfks[fks ",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24,
    maxAge: 1000 * 60 * 60 * 24,
  },
};
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((error) => console.log(error));
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/api/users", userRoute);
app.use("/api/products", producRoute);

if (process.env.NODE_ENV) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// seedDb();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

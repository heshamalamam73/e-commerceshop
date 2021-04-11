import express from "express";
import User from "../models/userModel.js";
import { getToken, getRefreshToken } from "../util.js";
import passport from "passport";
const router = express.Router();
let refreshTokens = [];
import jwt from "jsonwebtoken";
import config from "../config.js";

router.post("/register", async function (req, res) {
  try {
    const { email, password, username } = req.body;
    const user = new User({ email, username });
    await User.register(user, req.body.password, function (err, user) {
      if (user) {
        const token = getToken(user);
        res.json({
          success: true,
          message: "logged in successfully",
          token: token,
          username: user.username,
          isAdmin: user.isAdmin,
          image: user.image,
          email: user.email,
        });
      }
      res.json(err);
    });
  } catch (err) {
    res.json(err);
  }
});

router.post("/login", (req, res) => {
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else {
    if (!req.body.password) {
      res.json({ success: false, message: "Password was not given" });
    } else {
      passport.authenticate("local", function (err, user, info) {
        if (err) {
          res.json({ success: false, message: err.message });
        } else {
          if (!user) {
            res.json({
              success: false,
              message: "username or password incorrect",
            });
          } else {
            req.login(user, function (err) {
              if (err) {
                res.json({ success: false, message: err.message });
              } else {
                const token = getToken(user);
                const refrechToken = getRefreshToken(user);
                refreshTokens.push(refrechToken);
                res.json({
                  success: true,
                  message: "Authentication  successful",
                  token: token,
                  refrechToken: refrechToken,
                  username: user.username,
                  isAdmin: user.isAdmin,
                  image: user.image,
                  email: user.email,
                });
              }
            });
          }
        }
      })(req, res);
    }
  }
});
// refresh token func
router.post("/refresh", async function (req, res) {
  try {
    const refreshToken = req.body.refresh;
    console.log(refreshToken);
    console.log(refreshTokens);
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
      return res.json({ message: "Refresh token not found, login again" });
    }
    jwt.verify(refreshToken, config.JWT_SECRET_KEY, (err, user) => {
      if (!err) {
        const token = getToken(user);
        const refrechToken = getRefreshToken(user);
        return res.json({
          success: true,
          token: token,
          refrechToken: refrechToken,
          message: "Refresh Token  successfuly ! ",
        });
      }
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/logout", async (req, res) => {
  req.logout();
  res.json({ message: "logout successful" });
});
export default router;

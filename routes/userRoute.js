import express from "express";
import User from "../models/userModel.js";
import { getToken } from "../util.js";
import passport from "passport";

const router = express.Router();

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

                res.json({
                  success: true,
                  message: "Authentication  successful",
                  token: token,
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

router.get("/logout", async (req, res) => {
  req.logout();
  res.json({ message: "logout successful" });
});
export default router;

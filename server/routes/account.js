const express = require("express");
const User = require("../models/User");
const UserSession = require("../models/UserSession");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  const { body } = req;
  //   console.log("body", body);
  const { firstName, lastName, email, password } = body;
  // should we do validation checking server side?
  if (!firstName) {
    return res.status(400).send({
      success: false,
      message: "Error: First name cannot be blank.",
    });
  }
  User.find(
    {
      email: email,
    },
    (err, previousUsers) => {
      if (err) {
        return res.status(400).send({
          success: false,
          message: "Error: Server Error.",
        });
      } else if (previousUsers.length > 0) {
        return res.status(400).send({
          //   success: false,
          message: "Error: Account already exists, please sign in.",
        });
      }
      const newUser = new User();

      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = newUser.generateHash(password);
      newUser.email = email;
      newUser.save((err, user) => {
        if (err) {
          console.log("err here");
          return res.send({
            success: false,
            message: "Error: Server error",
          });
        }
        return res.status(200).send({
          success: true,
          message: "Signed Up!",
        });
      });
    }
  );
});

router.post("/signin", (req, res, next) => {
  const { body } = req;
  // console.log("body", body);
  const { email, password } = body;

  User.find({
    email: email,
  })
    .then((user) => {
      console.log(user[0]);
      if (user.length == 1 && user[0].validPassword(password)) {
        // user[0]
        const userSession = new UserSession();
        userSession.userId = user[0]._id;
        return userSession
          .save()
          .then(() =>
            res.send({
              success: true,
              message: "Valid sign in",
              token: user[0]._id,
            })
          )
          .catch(console.log);
      } else if (user.length == 0) {
        return res.send({
          success: false,
          message: "Error: User does not exist",
        });
      } else if (!user[0].validPassword(password)) {
        return res.send({
          success: false,
          message: "Error: Invalid Password",
        });
      }
    })
    .catch((res) => {
      console.log(res);
      return res.send({
        success: false,
        message: "Error: An error ocurred please try again",
      });
    });
});

router.get("/verify", (req, res, next) => {
  const { query } = req;
  const { token } = query;

  UserSession.find({
    _id: token,
    isDeleted: false,
  })
    .then((session) => {
      if (session.length != 1) {
        return res.send({
          success: false,
          message: "Error: Please login in",
        });
      }
      return res.send({
        success: true,
        message: "Success",
      });
    })
    .catch(() =>
      res.send({
        success: false,
        message: "Error: Invalid token",
      })
    );
});

router.get("/logout", (req, res, next) => {
  const { query } = req;
  const { token } = query;

  // delete db entry instead?
  UserSession.findOneAndUpdate(
    {
      _id: token,
      isDeleted: false,
    },
    { $set: { isDeleted: true } },
    { useFindAndModify: false }
  )
    .then(() => {
      return res.send({
        success: true,
        message: "Successfully logged out",
      });
    })
    .catch(() =>
      res.send({
        success: false,
        message: "Error: Invalid token",
      })
    );
});
// router.get("/:param1", (req, res, next) => {
//   const params = req.params;
//   res.status(200).json([params]);
//   next();
// });

// router.get("/:param1/:param2", (req, res, next) => {
//   const params = req.params;
//   res.status(200).json([params]);
//   next();
// });

module.exports = router;

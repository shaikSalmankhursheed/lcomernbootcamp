var express = require("express")
var router = express.Router()
const { check } = require("express-validator")
const { signout, signup, signin, isSignedIn } = require("../controllers/auth")

router.post(
  "/signup",
  [
    check("name", "name should be atleast 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 3 char").isLength({ min: 3 }), //.withMessage('must be at least 5 chars long')
  ],
  signup
)

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 }), //.withMessage('must be at least 5 chars long')
  ],
  signin
)

router.get("/signout", signout)

module.exports = router

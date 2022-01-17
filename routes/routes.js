const express = require("express");
const router = express.Router();
const controlRouter = require("../controllers/controlRoutes");

router.get("/", controlRouter.client);
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/register",
  express.urlencoded({ extended: true }),
  controlRouter.register
);
router.post(
  "/login",
  express.urlencoded({ extended: true }),
  controlRouter.login
);

module.exports = router;

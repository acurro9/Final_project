const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/aboutMe", (req, res) => {
  res.render("aboutMe");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/projects", (req, res) => {
  res.render("projects");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/logout", (req, res) => {
  res.render("logout");
});
router.get("/admin", (req, res) => {
  res.render("admin");
});
router.get("/cookiesNotice", (req, res) => {
  res.render("cookiesNotice");
});
router.get("/preferences", (req, res) => {
  res.render("preferences");
});
router.get("/question", (req, res) => {
  res.render("question");
});
router.get("/player", (req, res) => {
  res.render("player");
});

module.exports = router;

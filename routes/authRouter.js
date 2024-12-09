const routes = require("express").Router();

const { Login } = require("../controllers/authController");

routes.post("/login", Login);

module.exports = routes;

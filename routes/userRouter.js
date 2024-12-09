const  routes = require("express").Router();

const {createUserSchema , updateUserSchema , getDeleteUserSchema} = require ("../validators/userValidator");

const {Create , getAllUsers, getOneUser , Update , Delete} = require ("../controllers/userController");

routes.post("/create" , createUserSchema , Create);
routes.get("/get-all-users" , getDeleteUserSchema , getAllUsers);
routes.get("/get-one-user" , getDeleteUserSchema , getOneUser);
routes.patch("/update" , updateUserSchema , Update);
routes.delete("/delete" , getDeleteUserSchema , Delete);


module.exports = routes;
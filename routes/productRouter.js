const routes = require("express").Router();
const { middleWare } = require("../middleWare");

const {
  Create,
  getAllProducts,
  getOneProduct,
  Update,
  Delete,
} = require("../controllers/productController");

routes.post("/create", middleWare, Create);
routes.get("/get-all-products", middleWare, getAllProducts);
routes.get("/get-one-product", middleWare, getOneProduct);
routes.patch("/update", middleWare, Update);
routes.delete("/delete", middleWare, Delete);

module.exports = routes;

const routes = require("express").Router();

const {
  Create,
  getAllVendors,
  getOneVendor,
  Update,
  Delete,
} = require("../controllers/vendorController");

routes.post("/create", Create);
routes.get("/get-all-vendors", getAllVendors);
routes.get("/get-one-vendor", getOneVendor);
routes.patch("/update", Update);
routes.delete("/delete", Delete);

module.exports = routes;

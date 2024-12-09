const responseHandler = require("../responseHandler");

const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../models/productModel");

module.exports = {
  Create: async (req, res) => {
    try {
      const response = await createProduct(req.body);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const user = req.user;
      console.log(user);

      vendorId = "2f3e245f-e8ed-4619-90b8-89bd67330626";

      const response = await getAllProducts(vendorId);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  getOneProduct: async (req, res) => {
    try {
      const response = await getOneProduct(req.query);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  Update: async (req, res) => {
    try {
      const response = await updateProduct(req.body);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  Delete: async (req, res) => {
    try {
      const response = await deleteProduct(req.query);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
};

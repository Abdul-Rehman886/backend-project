const responseHandler = require("../responseHandler");

const {
  createVendor,
  getAllVendors,
  getOneVendor,
  updateVendor,
  deleteVendor,
} = require("../models/vendorModel");

module.exports = {
  Create: async (req, res) => {
    try {
      const response = await createVendor(req.body);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  getAllVendors: async (req, res) => {
    try {
      const response = await getAllVendors();

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  getOneVendor: async (req, res) => {
    try {
      const response = await getOneVendor(req.query);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  Update: async (req, res) => {
    try {
      const response = await updateVendor(req.body);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  Delete: async (req, res) => {
    try {
      const response = await deleteVendor(req.query);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
};

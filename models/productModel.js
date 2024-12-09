// const { attributes, vendors } = require("./definitions/index");
const { models } = require("./index");

module.exports = {
  createProduct: async (body) => {
    try {
      const product = await models.products.create({ ...body });

      return {
        response: product,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },

  getAllProducts: async (vendorId) => {
    try {
      const product = await models.products.findAll({
        where: { vendorId: vendorId },

        paranoid: false,

        attributes: ["productId", "productName", "description"],

        include: [
          {
            model: models.vendors,
            as: "vendors",
            attributes: ["vendorId", "username"],
          },
        ],
      });

      return {
        response: product,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getOneProduct: async ({ productName }) => {
    try {
      const product = await models.products.findOne({
        paranoid: false,

        where: {
          productName: productName,
        },

        attributes: ["productId", "productName", "description"],

        include: [
          {
            model: models.vendors,
            as: "vendors",
            attributes: ["vendorId", "username"],
          },
        ],
      });

      return {
        response: product,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateProduct: async ({ productName, ...body }) => {
    try {
      const product = await models.products.update(
        {
          ...body,
        },
        {
          where: {
            productName: productName,
          },
        }
      );

      return {
        response: product,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteProduct: async ({ productName }) => {
    try {
      const product = await models.products.destroy({
        where: {
          productName: productName,
        },
      });

      return {
        response: product,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};

const { DataTypes, Model } = require("sequelize");

const connection = require("../../dbConnection");

const products = require("./products");

const { v4: uuid } = require("uuid");

class productVariations extends Model {}

productVariations.init(
  {
    productVariationId: {
      primaryKey: true,
      type: DataTypes.STRING(60),
    },

    variationName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    quantity: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    price: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    productId: {
      type: DataTypes.STRING(60),
      allowNull: false,
      references: {
        model: products,
        key: "productId",
      },
    },
  },
  {
    name: "productVariations",
    paranoid: true,
    timestamps: true,
    sequelize: connection,
  }
);

productVariations.beforeCreate(async (productVariation) => {
  productVariation.productVariationId = uuid();
});

module.exports = productVariations;

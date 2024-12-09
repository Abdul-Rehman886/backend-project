const { DataTypes, Model } = require("sequelize");

const connection = require("../../dbConnection");

const vendors = require("./vendors");

const { v4: uuid } = require("uuid");

class products extends Model {}

products.init(
  {
    productId: {
      primaryKey: true,
      type: DataTypes.STRING(60),
    },

    productName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    vendorId: {
      type: DataTypes.STRING(60),
      allowNull: false,

      references: {
        model: vendors,
        key: "vendorId",
      },
    },
  },
  {
    name: "products",
    paranoid: true,
    timestamps: true,
    sequelize: connection,
  }
);

products.beforeCreate(async (product) => {
  product.productId = uuid();
});

module.exports = products;

const { DataTypes, Model } = require("sequelize");

const connection = require("../../dbConnection");

const { v4: uuid } = require("uuid");

const { hash } = require("bcryptjs");

class vendors extends Model {}

vendors.init(
  {
    vendorId: {
      primaryKey: true,
      type: DataTypes.STRING(60),
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  {
    name: "vendors",
    paranoid: true,
    timestamps: true,
    sequelize: connection,
  }
);

vendors.beforeCreate(async (vendor) => {
  vendor.vendorId = uuid();
  vendor.password = await hash(vendor.password, 5);
});

module.exports = vendors;

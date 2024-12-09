const { DataTypes, Model } = require("sequelize");

const connection = require("../../dbConnection");

const productVariations = require("./productVariations");

const attributes = require("./attributes");

const { v4: uuid } = require("uuid");

class variationHasAttribute extends Model {}

variationHasAttribute.init(
  {
    variationHasAttributeId: {
      primaryKey: true,
      type: DataTypes.STRING(60),
    },

    productVariationId: {
      type: DataTypes.STRING(60),
      allowNull: false,

      references: {
        model: productVariations,
        key: "productVariationId",
      },
    },

    attributeId: {
      type: DataTypes.STRING(60),
      allowNull: false,

      references: {
        model: attributes,
        key: "attributeId",
      },
    },
  },
  {
    name: "variationHasAttribute",
    paranoid: true,
    timestamps: true,
    sequelize: connection,
  }
);

variationHasAttribute.beforeCreate(async (variationHasAttribute) => {
  variationHasAttribute.variationHasAttributeId = uuid();
});

module.exports = variationHasAttribute;

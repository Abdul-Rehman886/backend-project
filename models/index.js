const connection = require("../dbConnection");

const {
  users,
  customers,
  admins,
  vendors,
  products,
  productVariations,
  attributes,
  variationsHasAttribute,
} = require("./definitions/index");

const models = {
  users,
  customers,
  admins,
  vendors,
  products,
  productVariations,
  attributes,
  variationsHasAttribute,
};

vendors.hasMany(products, { foreignKey: "vendorId", as: "products" });
products.belongsTo(vendors, { foreignKey: "vendorId", as: "vendors" });

products.hasMany(productVariations, {
  foreignKey: "productId ",
  as: "productVariations",
});
productVariations.belongsTo(products, {
  foreignKey: "productId",
  as: "products",
});

productVariations.hasMany(variationsHasAttribute, {
  foreignKey: "productVariationId ",
  as: "variationsHasAttribute",
});
variationsHasAttribute.belongsTo(productVariations, {
  foreignKey: "productVariationId",
  as: "productVariations",
});

attributes.hasMany(variationsHasAttribute, {
  foreignKey: "attributeId ",
  as: "variationsHasAttribute",
});
variationsHasAttribute.belongsTo(attributes, {
  foreignKey: "attributeId",
  as: "attributes",
});

const db = {};

db.connection = connection;

connection.models = models;

module.exports = { db, models };

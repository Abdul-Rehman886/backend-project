const {DataTypes , Model} = require ("sequelize");

const connection = require ("../../dbConnection");

const {v4 : uuid} = require("uuid");

class customers extends Model{};

customers.init({

    customerId : {
primaryKey : true,
type : DataTypes.STRING(60),
    },

} , {

    name : "customers",
    paranoid : true,
    timestamps : true,
    sequelize : connection,
});

customers.beforeCreate(async (customer) => {
    customer.customerId =  uuid();

});

module.exports = customers;

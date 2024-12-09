const {DataTypes , Model} = require ("sequelize");

const connection = require ("../../dbConnection");

const {v4 : uuid} = require("uuid");

class admins extends Model{};

admins.init({

    adminId : {
primaryKey : true,
type : DataTypes.STRING(60),
    },

} , {

    name : "admins",
    paranoid : true,
    timestamps : true,
    sequelize : connection,
});

admins.beforeCreate(async (admin) => {
    admin.adminId =  uuid();

});

module.exports = admins;

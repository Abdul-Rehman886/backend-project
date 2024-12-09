const {DataTypes , Model} = require ("sequelize");

const connection = require ("../../dbConnection");

const {v4 : uuid} = require("uuid");

class attributes extends Model{};

attributes.init({
    attributeId : {
        primaryKey : true,
        type : DataTypes.STRING(60),
            },

            name : {

type : DataTypes.STRING(60),

    },

    value : {
        type : DataTypes.STRING(60),

            },
            
} , {

    name : "attributes",
    paranoid : true,
    timestamps : true,
    sequelize : connection,
});

attributes.beforeCreate(async (attribute) => {
    attribute.attributeId =  uuid();

});

module.exports = attributes;

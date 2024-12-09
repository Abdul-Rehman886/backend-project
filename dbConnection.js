require ("dotenv").config();

const {Sequelize} = require ("sequelize");

const connection = new Sequelize ({
    host : process.env.DBHOST,
    port : process.env.DBPORT,
    database : process.env.DBNAME,
    username : process.env.DBUSERNAME,
    password : process.env.DBPASSWORD,
    dialect : process.env.DBDIALECT,
});

connection.authenticate().then(()=>{
    console.log("Connected to Database");
    
}).catch((error)=>{
    console.log(error);
    
    console.log("Unable to connect to Database");
    
});

module.exports= connection;
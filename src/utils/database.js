const {Sequelize} = require('sequelize')

const db = new Sequelize({

    username: "postgres",
    password: "root",
    port: 5432,
    database: "sequelize",
    host: "localhost",
    dialect: "postgres"
    })
    
    module.exports= db;
    
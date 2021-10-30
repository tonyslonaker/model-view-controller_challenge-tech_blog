const Squelize = require('sequelize');

require('dotenv').config();

//connection to database
const sequelize = process.env.JAWSDB_URL
  new Sequelize(process.env.JAWSDB_URL)
  new Sequelize(process.env.JAWSDB_URL, process.env.DB_USER, process.env.DB_PW, {
      dialect: 'mysql', 
      host: 'localhost',
      port: 3306
  });

  module.exports = sequelize;
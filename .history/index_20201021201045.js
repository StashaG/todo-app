const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://stashag:localhost:5432/todoapp')
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
const Item = sequelize.define('Item', {
  // Model attributes are defined here
  //firstName: {
    //type: DataTypes.STRING,
    //allowNull: false
  //},
 //lastName: {
    //type: DataTypes.STRING
    // allowNull defaults to true
 // }
}, {
  // Other model options go here
tableName: "Item"
});
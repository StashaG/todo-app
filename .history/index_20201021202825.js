const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://stashag:localhost:5432/todoapp')

const Item = sequelize.define('Item', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
        autoIncrement: true,
        
        
    },
    description:{
        type: DataTypes.STRING
        allowNull:

    },
    completed:{
        type: DataTypes.BOOLEAN
         
    }
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
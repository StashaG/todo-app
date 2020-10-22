const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://stashag:localhost:5432/todoapp')

const Item = sequelize.define('Item', {
    id:{
        type
    },
    description:{

    },
    completed:{

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
const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://stashag:localhost:5432/todoapp')

const Item = sequelize.define('Item', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
        
        
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false

    },
    completed:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
        
         
    }
  
}, {
tableName: "Item"
});

//ADD TODOS

//EDIT TODOS




//GET TODOS

//GET ALL

//UPDATE TODOS


//DELETE TODOS
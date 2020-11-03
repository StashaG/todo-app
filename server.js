const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');

const app = express()
app.use(bodyParser.json())

let dbPassword = process.env.DB_PASSWORD || null

const sequelize = new Sequelize('stashag', process.env.DB_USER, dbPassword, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

sequelize.authenticate().then( () => {
    console.log('Connection has been established successfully.');
    sequelize.close()
}).catch( (err) => {
    console.error('Unable to connect to the database:', err);
}) 

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

//ADD TODO

app.post("/todos", (req, res) => {
    // try {
        const { description } = req.body;
        Item.create({ description: description }).then(item => {
            console.log(item.id, item.description);
        })
        // const newTodo = await ();
    // }

//     res.json(newTodo.row[0]);
// } catch (err) {
//     console.error(err.message);
// }
    
});


//GET TODO
app.get("/todos/:id", (req, res) =>{
    const {id}  =  req.params;
    //query for id
})


//GET ALL TODO
app.get("/todos", (req, res) => {
//query get all
})


//UPDATE TODO Description
app.put("/todos/:id", (req, res)=> {
    const {id}  =  req.params;
    const {description} = req.body;
})

//update todo completion

//DELETE TODOS
app.delete("/todos/:id", (req, res) =>{
    const {id}  =  req.params;
})

app.listen(3001, () => {
    console.log("Server started") 
})


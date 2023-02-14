const db = require('../utils/database')
const {DataTypes}=require('sequelize');
const Rutine = require('./rutines.model');


const Excercise = db.define('excercise', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    muscle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    repeat: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rutineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'rutine_id',
        references: {
            model: Rutine,
            key: 'id'
        }
    }
});


module.exports = Excercise;
const db = require('../utils/database')
const {DataTypes}=require('sequelize');
const Users = require('./users.model');


const Rutine = db.define('rutine', {
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
    dataRutine: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
            model: Users,
            key: 'id'
        },
    },
});


module.exports = Rutine;
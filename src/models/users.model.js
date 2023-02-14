const db = require('../utils/database')
const {DataTypes}=require('sequelize')
const bcrypt = require('bcrypt')


const Users = db.define('users',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name',
    },
    lastName: {
        type: DataTypes.STRING, 
        allowNull: false,
        field: 'last_name',
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true, 
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false, 
    },
    registerDate: {
        type: DataTypes.DATE,
        field: 'register_date',
        defaultValue: DataTypes.NOW()
    },
    weight: {
        type: DataTypes.INTEGER,
    },
    objetive: {
        type: DataTypes.STRING,
    },
    level: {
        type: DataTypes.STRING,
    },
    injuriesPatologies: {
        type: DataTypes.STRING,
        field: 'injuries_patologies',
    },
    phoneNumber: {
        type: DataTypes.STRING,
        field: 'phone_number'
    },
    address: {
        type: DataTypes.STRING,

    },
    isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active',
        defaultValue: false,
    },
    daysPerWeek: {
        type: DataTypes.INTEGER,
    },
    userImg: {
        type: DataTypes.STRING,
        field: 'user_img',
    },
    rol: {
        type: DataTypes.STRING, 
        defaultValue: "client",
    },
},{
    hooks: {
        beforeCreate: (user, option)=>{
            const {password}=user
            const hash = bcrypt.hashSync(password, 8)
            user.password = hash
        }
    }
});

module.exports = Users;
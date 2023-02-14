const { Users, Rutine, Excercise }=require('./index')

const initModels = ()=>{

    Rutine.belongsTo(Users, {as: 'user', foreignKey: 'user_id'})
    Users.hasOne(Rutine, {as: 'rutine', foreignKey: 'user_id'})

    Excercise.belongsTo(Rutine, {as: 'rutine', foreignKey: 'rutine_id'})
    Rutine.hasMany(Excercise, {as: 'excercise', foreignKey: 'rutine_id'})
    
}

module.exports = initModels;
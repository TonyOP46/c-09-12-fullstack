const { Users, Instructor, Rutine, Excercise } = require("../models")
const db = require("../utils/database")


const users = [
    {firstName: "Tony", lastName: "Ospino", email: "tony@gmail.com", password: "1234", weight: 58, objetive: "bajar de peso", level: "amateur", injuriesPatologies: "ninguna", phoneNumber: "1234567890", address: "calle 1 numero 2, - EEUU", daysPerWeek: 5}
]

const rutines = [
    {name: "Piernas", dataRutine: "10 repeticiones simultaneas", description: "se debe cargar las pesas y bajar y subir 10 veces"}
]

const excercises = [
    {name: "aumentar piernas", muscle: "femorales y pantorrillas", repeat: 10, weight: 58, time: "media hora", rutineId: 1}
]

db.sync({force: true})
    .then(()=>{
        console.log("Starting seeding")
        users.forEach(user=>Users.create(user));
        setTimeout(()=>{
            rutines.forEach(rutine=>Rutine.create(rutine))
        }, 100)
        setTimeout(()=>{
            excercises.forEach(excercise=>Excercise.create(excercise))
        }, 200)
    })
    
const rutineServices = require("../services/rutines.services")

const getRutines = async(req, res, next)=>{
    try {
        const result = await rutineServices.get()
        res.json(result)
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const getRutinesById = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const result = await rutineServices.getById(id)
        res.json(result)
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const putRutines = async(req, res, next)=>{
    try {
        const { id }= req.params;
        const rutine = req.body;
        const result = await rutineServices.put(rutine, id)
        res.json({
            message: "Data Updated"
        })
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const postRutines = async(req, res, next)=>{
    try {
        const newUser = req.body;
        const result = await rutineServices.post(newUser)
        res.json({
            message: "Data Created"
        })
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })  
    }
}

const deleteRutines = async(req, res, next)=>{
    try {
        const {id}= req.params;
        const result = await rutineServices.deletRutine(id)
        res.json({
            message: "Data deleted"
        })
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })  
    }
}

module.exports = {
    getRutines,
    getRutinesById,
    putRutines,
    postRutines,
    deleteRutines
}
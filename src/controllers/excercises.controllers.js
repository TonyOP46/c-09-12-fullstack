const excerciseServices = require("../services/excercises.services")

const getExcercises = async(req, res, next)=>{
    try {
        const result = await excerciseServices.get()
        res.json(result)
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const getById = async(req, res, next)=>{
    try {
        const {id}=req.params;
        const result = await excerciseServices.getId(id)
        res.json(result)
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const putExcercises = async(req, res, next)=>{
    try {
        const {id}=req.params;
        const newExcercise = req.body;
        const result = await excerciseServices.put(newExcercise,id)
        res.json({
            message: "Excercise updated"
        })
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const postExcercises = async(req, res, next)=>{
    try {
        const newExcercises = req.body;
        const result = await excerciseServices.post(newExcercises)
        res.json({
            message: "Excercise added"
        })
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const deleteExcercises = async(req, res, next)=>{
    try {
        const { id }= req.params; 
        const result = await excerciseServices.delete(id)
        res.json({
            message: "Data Deleted"
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
    getExcercises,
    getById,
    putExcercises,
    postExcercises,
    deleteExcercises
}


const userServices = require("../services/users.services")

const getUsers = async(req, res, next)=>{
    try {
        const result = await userServices.get()
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
        const { id }=req.params;
        const result = await userServices.getId(id)
        res.json(result)
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const putUsers = async(req, res, next)=>{
    try {
        const { id }=req.params;
        const user = req.body;
        const result = await userServices.putUser(user, id)
        res.json({
            message: 'Data Changed'
        })        
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const postUsers = async(req, res, next)=>{
    try {
        const newUser = req.body;
        const result = await userServices.postUser(newUser)
        res.json(result)
    } catch (error) {
        next({
            message: "Data Error",
            status: 400,
            errorContent: error
        })
    }
}

const deleteUsers = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const result = await userServices.deleteUser(id)
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

const patchUsers = async(req, res, next)=>{
    try {
        const {id}=req.params;
        const {rol} = req.body;
        const patchUser = {rol}
        const result = await userServices.patch(patchUser, id)
        res.json({
            message: "Rol Updated"
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
    getUsers,
    getById,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers
}
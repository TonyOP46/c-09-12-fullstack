const { Rutine } = require("../models")

class rutineServices{
    static async get(){
        try {
            const result = await Rutine.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt", "user_id", "instructor_id"]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getById(id){
        try {
            const result = await Rutine.findOne({
                where: {id},
                attributes: {
                    exclude: ["createdAt", "updatedAt", "user_id", "instructor_id"]
                }
            })   
            return result         
        } catch (error) {
            throw error
        }
    }
    static async put(rutine, id){
        try {
            const result = await Rutine.update(rutine,{
                where: {id}
            })    
            return result        
        } catch (error) {
            throw error
        }
    }

    static async post(newRutine){
        try {
            const result = await Rutine.create(newRutine)
            return result
        } catch (error) {
            throw error
        }
    }

    static async deletRutine(id){
        try {
            const result = await Rutine.destroy({
                where: {id},
            })
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = rutineServices
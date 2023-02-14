const { Excercise } = require("../models");

class excerciseServices{
    static async get(){
        try {
            const result = await Excercise.findAll({
                attributes: {
                    exclude: ["createdAt","updatedAt","rutine_id"]
                }
            })
            return result
        } catch (error) {
            throw error;
        }

    }
    static async getId(id){
        try {
            const result = await Excercise.findOne({
                where: {id},
                attributes: {
                    exclude: ["createdAt","updatedAt","rutine_id"]
                }
            })
            return result
        } catch (error) {
            throw error;
        }
    }

    static async put(newExcercise, id){
        try {
            const result = await Excercise.update(newExcercise, {
                where: {id},
                attributes: {
                    exclude: ["createdAt","updatedAt","rutine_id"]
                }
            })
            return result
        } catch (error) {
            throw error;
        }
    }

    static async post(newExcercise){
        try {
            const result = await Excercise.create(newExcercise)
            return result
        } catch (error) {
            throw error;
        }
    }

    static async delete(id){
        try {
            const result = await Excercise.destroy({
                where: {id}
            })
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = excerciseServices
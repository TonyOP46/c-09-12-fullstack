const { Users} = require("../models")

class userServices{
    static async get(){
        try {
            const result = await Users.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
    static async getId(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: {
                    exclude: ["createdAt", "updatedAt", "isCoach", "isAdmin"]
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
    static async putUser(user, id){
        try {
            const result = await Users.update(user,{
                where: {id}
            })
            return result
        } catch (error) {
            throw error;
        }
    }

    static async postUser(newUser){
        try {
            const result = await Users.create(newUser)
            return result            
        } catch (error) {
            throw error
        }
    }
    static async deleteUser(id){
        try {
            const result = await Users.destroy({
                where: {id}
            })
            return result            
        } catch (error) {
            throw error
        }
    }
    static async patch(patchUser, id){
        try {
           let result = await Users.update(patchUser, {
            where: {id},
           })
            return result
        } catch (error) {
            throw error;
        }
    }
    static async getClient(){
        try {
            const result = await Users.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = userServices
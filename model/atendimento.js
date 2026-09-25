import database from "../config/database.js";
 
class atendimento {
    constructor () {
        this.model = database.db.define("atendimentos", {
            id : {
                type: database.db.Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement : true,
            },
            dia : {
               type: database.db.Sequelize.STRING,
             
           },
               hora : {
                type: database.db.Sequelize.STRING,
               
            },
            valor : {
                type: database.db.Sequelize.INTEGER,
             
            },
            concluido : {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}
 //id, dia, hora, valor e concluído
export default new atendimento().model
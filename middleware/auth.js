//npm i bcrypt jsonwebtoken

import jwt from "jsonwebtoken"

const segredo = "ipersecreto"

export default async function authMiddleware(req , res , next) {
    
    try {
        
        //verificar se o jwt é valido 
       const token = req.headers["authorization"]
     
       if(!token){
        throw new Error()
       }

       const decoded = jwt.verify(token,segredo)
        req.session =decoded
next()

    } catch (error) {
        res.status(403).send({
            message:"Usuário ou senha inválido"
        })
    }
}


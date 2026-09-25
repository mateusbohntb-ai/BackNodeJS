import express from "express"


import ControllerUsuario from "../controller/usuario.js"
import authMiddleware from "../middleware/auth.js"

const router = express.Router()

router.post("/login" , authMiddleware , ControllerUsuario.Login)

//buscar todos
router.get("/buscar", ControllerUsuario.Buscar)
//buscar um 
router.get("/detalhes/:id", ControllerUsuario.Detalhe)
//Criar
router.post("/criar", ControllerUsuario.Criar)
//alterar
router.put("/alterar/",ControllerUsuario.Alterar)
//deletar
router.delete("/deletar/:id", ControllerUsuario.Deletar)



export default router
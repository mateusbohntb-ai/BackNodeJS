import express from "express"


import ControllerAtendimento from "../controller/atendimentos.js"

const router = express.Router()
//buscar todos
router.get("/buscar", ControllerAtendimento.Buscar)
//buscar um 
router.get("/detalhes/:id", ControllerAtendimento.Detalhe)
//Criar
router.post("/criar", ControllerAtendimento.Criar)
//alterar
router.put("/alterar/:id",ControllerAtendimento.Alterar)
//deletar
router.delete("/deletar/:id", ControllerAtendimento.Deletar)



export default router
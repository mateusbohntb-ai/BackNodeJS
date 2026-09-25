import jwt from "jsonwebtoken"
import RepositoryUsuario from "../repository/usuario.js"

import bcrypt from "bcrypt"

const segredo = "ipersecreto"

class ServiceUsuario {
    async Buscar() {
        return RepositoryUsuario.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        const buscarusuario = await RepositoryUsuario.Detalhes(id)

        if (!buscarusuario) {
            throw new Error(`ID ${id} do usuario não encontrado`)
        }
        return carro
    }
    //FUNÇÃO(PARAMETRO)
    async Criar(nome,email, senha) {

        if (!nome||!email || !senha) {
            throw new Error("Favor informar todos os dados ")

        }

     const senhaCriptografada = await bcrypt.hash(senha,12)


        const novousuario = await RepositoryUsuario.Create(email, senhaCriptografada)
        return { novousuario }
    }

    async Alterar(id,nome, email, senha) {
        if (!id||!nome || !email || !senha) {
            throw new Error("Favor informar os dados");
        }

             const senhaCriptografada =!senha//ternario 
             ?undefined
             : await bcrypt.hash(senha,12)


        const usuarioalterado = await RepositoryUsuario.Update(id, email, senhaCriptografada )

        return usuarioalterado
    }

    async Deletar(id) {

        if (!id) {
            throw new Error("Favor informar todos os dados ")
        }

        const Deletarusuario = await RepositoryUsuario.Delete(id)

        return Deletarusuario
    }

    async Login(nome,email, senha) {

        if(!email ||!nome|| !senha) {
            throw new Error("Email ou senha inválido")
        }

        const usuario = await RepositoryUsuario.FindByEmail(email)

        if(!usuario) {
            throw new Error("Email ou senha inválido")
        }

        if(
           !(await bcrypt.compare(String(senha), usuario.senha)) 
        ) {
            throw new Error("Email ou senha inválido")
        }

        return jwt.sign(
            { id: usuario.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }

    
}

export default new ServiceUsuario
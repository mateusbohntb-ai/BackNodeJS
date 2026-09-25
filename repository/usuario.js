import usuario from "../model/usuario.js"
//INSERT INTO carros(id, marca, ano) VALUES ("Fiat" , 1989)
class RepositoryUsuario {
    async Find() {
        const buscartodos = await usuario.findAll()

        return buscartodos

    }

    async Detalhes(id) {
        const detalhes = await usuario.findByPk(id)

        return detalhes
    }

    async Create(nome,email, senha) {
        const criarusuario = await usuario.create({ nome,email, senha })

        return criarusuario
    }

    async Update(id, nome,email, senha) {

        const update = await usuario.findByPk(id)

        if (!update) {
            throw new Error("Carro não encontrado");
        }
        update.nome = nome
        update.email = email
        update.senha = senha

        await update.save()

        return update
    }

    async Delete(id) {

        const deleteusuario = await usuario.findByPk(id)

        if (!deleteusuario) {
            throw new Error("Usuario não encontrado");
        }
        await deleteusuario.destroy()

        return deleteusuario

    }

   async FindByEmail(email) {
        return  usuario.findOne({ where: { email } })
    }


}

export default new RepositoryUsuario()
import atendimento from "../model/atendimento.js"

//INSERT INTO carros(id, marca, ano) VALUES ("Fiat" , 1989)
class RepositoryAtendimento {
    async Find() {
        const dados = await atendimento.findAll()

        return dados

    }

    async Detalhes(id) {
        const detalhedados = await atendimento.findByPk(id)

        return detalhedados
    }

    async Create(  dia, hora, valor , concluido) {
        const criaratendimento = await atendimento.Create({ dia, hora, valor , concluido})

        return criaratendimento
    }

    async Update(id, dia, hora, valor , concluido) {

        const update = await atendimento.findByPk(id)

        if (!update) {
            throw new Error("Atendimento não encontrado");
        }
        update.dia = dia
        update.hora = hora
        update.valor = valor
        update.concluido = concluido
        await update.save()

        return update
    }

    async Delete(id) {

        const deleteatendimento = await atendimento.findByPk(id)

        if (!deleteatendimento) {
            throw new Error("Atendimento não encontrado");
        }
        await deleteatendimento.destroy()

        return deleteatendimento

    }


}

export default new RepositoryAtendimento()
import ServiceAtendimento from "../service/atendimento.js"

class ControllerAtendimento {
    // Recebimento e a saida
    async Buscar(_, res) {
        try {
            const status = await ServiceAtendimento.Buscar()
            res.status(200).send({ mensagem: status })

        } catch (error) {
            res.status(500).send({
                mensagem: error.menssage
            })
        }
    }

   async Detalhe(req, res) {
        try {

            const id = req.params.id
            const detalhe = await ServiceAtendimento.Detalhe(id)

          await  res.status(200).send({ mensagem: detalhe })

        } catch (error) {
            res.status(500).send({
                mensagem: error.mensage
            })
        }

    }

  async  Criar(req, res) {
        try {

            const { dia,hora,valor,concluido} = req.body

           await ServiceAtendimento.Criar( dia,hora,valor,concluido)

            res.status(201).send({
                mensagem: "Cadastrado com sucesso"
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

 async  Alterar(req, res) {
        try {
             const { dia,hora,valor,concluido} = req.body
            const id = Number(req.params.id)

            await ServiceAtendimento.Alterar(dia,hora,valor,concluido)
            
            res.status(201).send({ mensagem: "Alterado  com sucesso" })

        } catch (error) {
            res.status(500).send({
                mensagem: error.menssage
            })
        }

    }



  async  Deletar(req, res) {
        try {

            const id = req.params.id

         await ServiceAtendimento.Deletar(id)

            res.status(204).send({
                mensagem: "Deletado"
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }

    }


}

export default new ControllerAtendimento()
// cuida pra nao fugir mt da esntrutura que fizemos no carro e usuario, - me refiro a quantidade de arquivos
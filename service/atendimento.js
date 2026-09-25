import RepositoryAtendimento from "../repository/atendimento.js"

class ServiceAtendimentos {
    async Buscar() {
        return RepositoryAtendimento.Find()
    }

    async Detalhe(id ) {
         if (!id) {
             throw new Error("Favor informar o ID")
         }
       
         const detalhes = await RepositoryAtendimento.Detalhes(id)
       
         if (!detalhes) {
             throw new Error(`ID ${id} do atendimento não encontrado`)
         }
       return carro
    }
    //FUNÇÃO(PARAMETRO)
   async Criar( dia, hora, valor , concluido ) {

           if (!dia|| ! hora|| ! valor || ! concluido) {
               throw new Error("Favor informar todos os dados ")
       ''
           }
       
 const atendimento = await RepositoryAtendimento.Create(dia, hora, valor , concluido )
        return { atendimento}
    }

   async Alterar(id,dia, hora, valor , concluido) {
        if (!id||!dia|| ! hora|| ! valor || ! concluido) {
            throw new Error("Favor informar os dados");
        }
      

      const atendimentolterado = await RepositoryAtendimento.Update(id,dia, hora, valor , concluido )
      
      return atendimentolterado
     }

    async Deletar(id) {
       
            if (!id) {
                throw new Error("Favor informar todos os dados ")
            }
       
            const Deletarc = await RepositoryAtendimento.Delete(id)
       
            return Deletarc
    }



}

export default new ServiceAtendimentos
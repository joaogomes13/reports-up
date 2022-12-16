import { Request, Response } from "express";
import { CreateFormService } from "../../services/form/CreateFormService";

class CreateFormController{
    async handle(req: Request, res: Response){
        const { 
            //Stand 
            nameStand, 
            ownerName, 
            number, 
            monitorUp, 
            representative, 
        
            // equipments: [],

            // //Formulário
            mesaCadeirasInternas,
            areaPreparoIsolado,
            balcaoLimpo,
            mesaCadeirasLimpas,
            balcaoForrado,
            justificativaInfraestrutura,
            
            armazenamentoAdequado,
            validade,
            condicaoPreparo,
            balcaoAdequado,
            justificativaAlimento,
           
            toucas,
            alcoolGel,
            mascaras,
            justificativaPreparo,
           
            trajeAdequado,
            duraveis,
            descartaveis,
            justificativaAtendimento,
           
            organicoSecoSeparado,
            oleoSeparado,
            lixeirasTampadas,
            justificativaResiduo,
           
            ambienteInternoLimpo,
            ambienteExternoLimpo,
            cozinhaLimpa,
            justificativaAmbiente,
           
            justificativaEquipamento,
          
            faltouEnergia,
            faltouRecolhimentoLixo,
            faltouAgua,
            justificativaStand,
           
            justificativaRecomendacao

        } = req.body;

        const equipments: {
            equipments: [{
                nameEqui: string,
                potency?: number,
                qtd: number,
            }]
        } = req.body

        const createFormService = new CreateFormService();

        const form = await createFormService.execute({
             //Stand 
             nameStand, 
             ownerName, 
             number, 
             monitorUp, 
             representative, 
         
             //Equipamentos
            equipments,
                

            //  //Formulário
             mesaCadeirasInternas,
             areaPreparoIsolado,
             balcaoLimpo,
             mesaCadeirasLimpas,
             balcaoForrado,
             justificativaInfraestrutura,
             
             armazenamentoAdequado,
             validade,
             condicaoPreparo,
             balcaoAdequado,
             justificativaAlimento,
            
             toucas,
             alcoolGel,
             mascaras,
             justificativaPreparo,
            
             trajeAdequado,
             duraveis,
             descartaveis,
             justificativaAtendimento,
            
             organicoSecoSeparado,
             oleoSeparado,
             lixeirasTampadas,
             justificativaResiduo,
            
             ambienteInternoLimpo,
             ambienteExternoLimpo,
             cozinhaLimpa,
             justificativaAmbiente,
            
             justificativaEquipamento,
           
             faltouEnergia,
             faltouRecolhimentoLixo,
             faltouAgua,
             justificativaStand,
            
             justificativaRecomendacao
        });

        
        return res.json(form)
        
    }
}

export { CreateFormController }
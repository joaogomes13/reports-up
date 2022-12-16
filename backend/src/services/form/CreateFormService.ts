import prismaClient from '../../prisma'

interface EquipmentType {
    equipments:[{
        nameEqui: string,
        potency?: number,
        qtd: number,
    }]
}

interface FormRequest{
     //Stand 
     nameStand: string,
     ownerName: string, 
     number: number, 
     monitorUp: string, 
     representative: string, 
 
     //Equipamentos
     equipments: EquipmentType,
        
    

    //  //Formulário
     mesaCadeirasInternas: false,
     areaPreparoIsolado: false,
     balcaoLimpo: false,
     mesaCadeirasLimpas: false,
     balcaoForrado: false,
     justificativaInfraestrutura?: string,
     
     armazenamentoAdequado: false,
     validade: false,
     condicaoPreparo: false,
     balcaoAdequado: false,
     justificativaAlimento?: string,
    
     toucas: false,
     alcoolGel: false,
     mascaras: false,
     justificativaPreparo?: string,
    
     trajeAdequado: false,
     duraveis: false,
     descartaveis: false,
     justificativaAtendimento?: string,
    
     organicoSecoSeparado: false,
     oleoSeparado: false,
     lixeirasTampadas: false,
     justificativaResiduo?: string,
    
     ambienteInternoLimpo: false,
     ambienteExternoLimpo: false,
     cozinhaLimpa: false,
     justificativaAmbiente: string,
    
     justificativaEquipamento?: string,
   
     faltouEnergia: false,
     faltouRecolhimentoLixo: false,
     faltouAgua: false,
     justificativaStand: string,
    
     justificativaRecomendacao?: string,

    //  stand_id: string,
    // equipment_id: string
    
}

class CreateFormService{
    async execute({
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
        
         justificativaRecomendacao,

        //  stand_id,
        //  equipment_id

    }: FormRequest){

        const stand = await prismaClient.stand.create({
            data:{
                name: nameStand,
                ownerName: ownerName,
                monitorUp: monitorUp,
                number: number,
                representative: representative
            },
            include:{
                forms: true,
                equipment: true
            }
        })


        const form = await prismaClient.form.create({
            data:{
                stand_id: stand.id,

                mesaCadeirasInternas: mesaCadeirasInternas,
                areaPreparoIsolado: areaPreparoIsolado,
                balcaoLimpo: balcaoLimpo,
                mesaCadeirasLimpas: mesaCadeirasLimpas,
                balcaoForrado: balcaoForrado,
                justificativaInfraestrutura: justificativaInfraestrutura,

                armazenamentoAdequado: armazenamentoAdequado,
                validade: validade,
                condicaoPreparo: condicaoPreparo,
                balcaoAdequado: balcaoAdequado,
                justificativaAlimento: justificativaAlimento,

                toucas: toucas,
                alcoolGel: alcoolGel,
                mascaras: mascaras,
                justificativaPreparo: justificativaPreparo,

                trajeAdequado: trajeAdequado,
                duraveis: duraveis,
                descartaveis: descartaveis,
                justificativaAtendimento: justificativaAtendimento,

                organicoSecoSeparado: organicoSecoSeparado,
                oleoSeparado: oleoSeparado,
                lixeirasTampadas: lixeirasTampadas,
                justificativaResiduo: justificativaResiduo,

                ambienteInternoLimpo: ambienteInternoLimpo,
                ambienteExternoLimpo: ambienteExternoLimpo,
                cozinhaLimpa: cozinhaLimpa,
                justificativaAmbiente: justificativaAmbiente,

                justificativaEquipamento: justificativaEquipamento,

                faltouEnergia: faltouEnergia,
                faltouRecolhimentoLixo: faltouRecolhimentoLixo,
                faltouAgua: faltouAgua,
                justificativaStand: justificativaStand,

                justificativaRecomendacao: justificativaRecomendacao

            }
        })

        const equip = await equipments.equipments.forEach(async (equipment) => {
            await prismaClient.equipment.create({
                data:{
                    name: equipment.nameEqui,
                    potency: equipment.potency,
                    qtd: equipment.qtd,
                    stand_id: stand.id
                }
            })
        })

        

        return { stand }
    }
}

export {CreateFormService}
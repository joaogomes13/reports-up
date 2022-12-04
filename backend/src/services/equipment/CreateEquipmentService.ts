import prismaClient from "../../prisma"

interface AddEquipmentRequest {
    equipments: [{
        nameEqui: string,
        potency?: number,
        qtd: number,
        form_id: string
        stand_id: string
    }]
}

class CreateEquipmentService {
    async execute({equipments}: AddEquipmentRequest){
        
        const equip = await equipments.forEach(async (equipment) => {
            await prismaClient.equipment.create({
                data:{
                    name: equipment.nameEqui,
                    potency: equipment.potency,
                    qtd: equipment.qtd,
                    form_id: equipment.form_id,
                    stand_id: equipment.stand_id
                }
            })
        })

        return {equip}
    }
}

export {CreateEquipmentService}
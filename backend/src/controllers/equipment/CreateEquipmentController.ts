import { Request, Response } from "express";
import { CreateEquipmentService } from "../../services/equipment/CreateEquipmentService";

class CreateEquipmentController {
    async handle(req: Request, res: Response) {
        const equipments: {
            equipments: [{
                nameEqui: string,
                potency?: number,
                qtd: number,
                form_id: string
                stand_id: string
            }]
        } = req.body

        const createEquipmentService = new CreateEquipmentService();

        const equipment = await createEquipmentService.execute(equipments)

        return res.json(equipment)
    }
}

export { CreateEquipmentController }
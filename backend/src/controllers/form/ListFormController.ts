import { Request, Response } from "express";
import { ListFormServices } from "../../services/form/ListFormServices";

class ListFormController {
    async handle(req: Request, res: Response){
        const stand_id = req.body

        const listFormServices = new ListFormServices();

        const listForm = await listFormServices.execute(stand_id)

        return res.json(listForm)
    }
}

export { ListFormController }
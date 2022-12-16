import { Request, Response } from "express";
import { ListStandService } from "../../services/stand/ListStandService";

class ListStandController {
    async handle(req: Request, res: Response){

        const listStandService = new ListStandService();

        const listStand = await listStandService.execute();

        return res.json(listStand);
    }
}

export {ListStandController}
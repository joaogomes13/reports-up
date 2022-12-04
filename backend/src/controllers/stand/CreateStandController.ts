import { Request, Response } from "express";

class CreateStandController{
    async handle(req: Request, res: Response){
        const { name, ownerName, number, monitorUp, representative } = req.body
        
    }
}

export { CreateStandController }
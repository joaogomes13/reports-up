import { Request, Response } from "express";
import { DeleteFormService } from "../../services/form/DeleteFormService";

class DeleteFormController{
    async handle(req: Request, res: Response){
        const form_id = req.query.form_id as string

        const deleteFormService = new DeleteFormService();

        const deleteForm = await deleteFormService.execute({form_id})

        return res.json(deleteForm)

    }
}

export { DeleteFormController }
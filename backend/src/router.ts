import { Router ,Request, Response } from "express";


import { CreateFormController } from "./controllers/form/CreateFormController";
import { ListStandController } from "./controllers/stand/ListStandController";

const router = Router();

router.post('/form', new CreateFormController().handle)
router.get('/stand', new ListStandController().handle)

export { router };
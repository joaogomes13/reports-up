import { Router ,Request, Response } from "express";


import { CreateFormController } from "./controllers/form/CreateFormController";
import { ListFormController } from "./controllers/form/ListFormController";
import { ListStandController } from "./controllers/stand/ListStandController";

const router = Router();

router.post('/form', new CreateFormController().handle)
router.get('/listForm', new ListFormController().handle)

router.get('/stand', new ListStandController().handle)

export { router };
import { Router ,Request, Response } from "express";


import { CreateFormController } from "./controllers/form/CreateFormController";
import { DeleteFormController } from "./controllers/form/DeleteFormController";
import { ListFormController } from "./controllers/form/ListFormController";
import { ListStandController } from "./controllers/stand/ListStandController";

const router = Router();

// ROTAS DO FORMULÁRIO
router.post('/form', new CreateFormController().handle)
router.get('/listForm', new ListFormController().handle)
router.delete('/form', new DeleteFormController().handle)

// ROTAS DO STAND
router.get('/stand', new ListStandController().handle)

export { router };
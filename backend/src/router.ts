import { Router ,Request, Response } from "express";
import { CreateEquipmentController } from "./controllers/equipment/CreateEquipmentController";

import { CreateFormController } from "./controllers/form/CreateFormController";

const router = Router();

router.post('/form', new CreateFormController().handle)
router.post('/addEquipment', new CreateEquipmentController().handle)

export { router };
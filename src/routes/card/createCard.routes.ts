import { Router } from 'express';
import { createCard } from '../../controllers/card/createCard.controller';
import path from '../paths';

//Creamos la ruta
const router:Router = Router();

router.route('/v1'+path.createCard)
	.post(createCard);

export default router;
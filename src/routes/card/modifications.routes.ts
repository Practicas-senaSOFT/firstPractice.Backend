import {Router} from 'express';
import { cardDel } from '../../controllers/card/modifications.controller';
import path from '../paths';
//Creamos ruta
const router:Router = Router();

router.route('/v1'+path.modifiedCard)
	.put()
	.delete(cardDel);

export default router;
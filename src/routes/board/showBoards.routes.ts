import { Router } from 'express';
import { showBoards } from '../../controllers/board/showBoards.controller';
import path from '../paths';
//Creacion de ruta
const router:Router = Router();

router.route('/v1'+path.showBoards)
	.get(showBoards);

export default router;
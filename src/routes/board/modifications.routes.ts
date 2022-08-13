import { Router } from 'express';
import path from '../paths';
//Importamos controladores
import { boardPut } from '../../controllers/board/modifications.controller';

//Creacion de la ruta 
const router:Router = Router(); 

router.route('/v1'+path.modifiedBoard)
	.put(boardPut)
	.delete();

//Export router
export default router;
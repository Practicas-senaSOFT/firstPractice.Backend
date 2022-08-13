import { Router } from 'express';
import path from '../paths';
//Importamos controladores
import { boardDel, boardPut } from '../../controllers/board/modifications.controller';

//Creacion de la ruta 
const router:Router = Router(); 

router.route('/v1'+path.modifiedBoard)
	.put(boardPut)
	.delete(boardDel);

//Export router
export default router;
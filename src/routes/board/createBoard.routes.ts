//Crear tablero
import { Router } from 'express';

//Importacion controladores
import { createBoard } from '../../controllers/board/createBoard.controller';

//Obtenemos las rutas 
import path from '../paths/index';

//Creamos la ruta
const routes = Router();

//ruta
routes.route('/v1'+path.createBoard)
	.post(createBoard);

export default routes;
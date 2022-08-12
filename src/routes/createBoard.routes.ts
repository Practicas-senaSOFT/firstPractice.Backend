//Crear tablero
import { Router } from 'express';

//Importacion controladores
import { createBoard } from '../controllers/createBoard.controller';

//Obtenemos las rutas 
import path from './paths/index';

//Creamos la ruta
const routes = Router();

//ruta
routes.route(path.createBoard)
	.post(createBoard);

export default routes;
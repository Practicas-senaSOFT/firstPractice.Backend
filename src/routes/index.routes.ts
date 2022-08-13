import { Application, Router } from 'express';
import routerBoardCreate from './board/createBoard.routes';
import routerBoardModifications from './board/modifications.routes';

const _routes : [Router][] = [
	//
	[routerBoardCreate],
	[routerBoardModifications]
];

//Exportamos cada ruta guardada en _routes
export const routes = (app:Application) => {
	_routes.forEach((route:[Router]) => {
		//Deconstruccion
		const [ url ] = route;
		//Usar url obtenida
		app.use(url);
	});
};
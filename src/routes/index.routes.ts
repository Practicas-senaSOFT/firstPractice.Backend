import { Application, Router } from 'express';
import routerBoard from './createBoard.routes';

const _routes : [Router][] = [
	//
	[routerBoard],
];

//Exportamos cada ruta guardada en _routes
export const routes = (app:Application) => {
	_routes.forEach((route) => {
		//Deconstruccion
		const [ url ] = route;
		//Usar url obtenida
		app.use(url);
	});
};
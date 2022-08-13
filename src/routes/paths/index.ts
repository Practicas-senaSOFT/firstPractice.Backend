//Creamos las rutas
const createBoard = '/createBoard/:name/:description';
const modifiedBoard = '/modifiedBoard';
const paramId = '/:id';
const paramsNameDescrip = /^\/modifiedBoard\/:id\/([a-zA-Z0-9])?$^\/([a-zA-Z0-9])?$/;
// /^\/([a-zA-Z0-9])?$^\/([a-zA-Z0-9])?$;
//*Todas las rutas del server
export default{
	createBoard: createBoard,
	modifiedBoard: modifiedBoard + paramId ,
	modified: paramsNameDescrip
};


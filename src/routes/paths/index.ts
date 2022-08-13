//Creamos las rutas
const create = 'create';
const path = '/';
//Board
const createBoard = `${path}${create}+Board/:name/:description`;
const modifiedBoard = '/modifiedBoard';
const paramId = '/:id';
const paramsNameDescrip = /^\/modifiedBoard\/:id\/([a-zA-Z0-9])?$^\/([a-zA-Z0-9])?$/;
const showBoards = '/showBoards';
//Card
const createCard = `${path}${create}Card/:idBoard`;
// /^\/([a-zA-Z0-9])?$^\/([a-zA-Z0-9])?$;
//*Todas las rutas del server
export default{
	//BOARD
	createBoard: createBoard,
	modifiedBoard: modifiedBoard + paramId ,
	modified: paramsNameDescrip,
	showBoards: showBoards, 
	// CARD
	createCard: createCard,
};


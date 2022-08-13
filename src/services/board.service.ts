import { DataBoard } from '../interfaces/board';
//Importamos crud a DB 
import { createBoard } from '../models/sql/board/create';
import { findBoardId, getBoards } from '../models/sql/board/read';
import { updateBoard } from '../models/sql/board/update';
import { deletedBoard } from '../models/sql/board/delete';
//Importamos entidades
import { Board } from '../models/sql/domain/Board';

//Servicio de crecion de Tablero
export const createBoardService = async (values:DataBoard):Promise<boolean|Board|null> => {
	//Validamos los datos, que no esten vacios
	if(!(values.name)||!(values.description)) return null;//No hay algun dato
	//Creamos el tablero
	const board:Board = new Board(values.name,values.description);
	// console.log('-> ',board.printFormat());
	//Creamos la tabla en DB
	return await createBoard(board);
};
//Actualizacion del tablero
export const boardPutService = async (id:string, values:DataBoard):Promise<boolean|null> => {
	//Parseamos el 'id'
	const idParser:number = parseInt(id);
	//Validamos que el tablero exista
	const foundBoard:Board|null = await findBoardId(idParser);
	//Validamos si existe
	if(!foundBoard)return null; //Tablero no encontrado
	//Se encontro
	console.table(foundBoard);
	//actualizar datos
	return await updateBoard(idParser, values);
};
//Eliminar tablero
export const deleteBoardService = async (id:string):Promise<boolean|null> => {
	//Parseamos el id
	const idParser:number = parseInt(id);
	//Validamos que el tablero exista
	const foundBoard:Board|null = await findBoardId(idParser);
	//Validamos si existe
	if(!foundBoard)return null; //Tablero no encontrado
	//Se encontro
	console.table(foundBoard);
	//Eliminar datos
	return await deletedBoard(idParser);
};

export const showBoardsService = async ():Promise<Board[]|null> => {

	const result:Board[] = await getBoards();
	//Validamos lista
	if(result.length===0)return null;
	return result;
};
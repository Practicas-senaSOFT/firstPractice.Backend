import { DataBoard } from '../interfaces';
import { createBoard } from '../models/sql/create';
import { Board } from '../models/sql/domain/board';


//Servicio de crecion de Tablero
export const createBoardService = async (values:DataBoard):Promise<boolean|null> => {
	
	//Validamos los datos, que no esten vacios
	if(!(values.name)||!(values.description)) return null;//No hay algun dato
	// if(!values.description) return;
	//Creamos el tablero
	const board:Board = new Board(values.name,values.description);
	// console.log('-> ',board.printFormat());
	//Creamos la tabla en DB
	return await createBoard(board);
	

};

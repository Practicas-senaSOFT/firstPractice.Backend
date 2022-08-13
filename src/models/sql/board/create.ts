import { Repository } from 'typeorm';
import { MySQLDataSource as dsource } from '../../../config/connection/mysql/datasource';
//Import dominios
import { Board } from '../domain/Board';


//Create tablero
export const createBoard = async (board:Board): Promise<boolean|Board> => {
	// console.log(board);
	let resultDb:Board;
	//creamos el tablero
	try {		
		const newBoard:Repository<Board> = dsource.getRepository(Board);
		//Guardamos el datos creado
		resultDb = await newBoard.save(board);
		//Se guardo
		console.log(resultDb);
		console.log('Se guardo exitoso!');
	} catch (error) {
		console.log('Erro, create board: ',error);
		return false;
	}
	return resultDb;
};
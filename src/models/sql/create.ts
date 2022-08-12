import { Repository } from 'typeorm';
import { MySQLDataSource as dsource } from '../../config/connection/mysql/datasource';
//Import dominios
import { Board } from './domain/board';


//Create tablero
export const createBoard = async (board:Board): Promise<boolean> => {
	// console.log(board);
	//creamos el tablero
	try {		
		const newBoard:Repository<Board> = dsource.getRepository(Board);
		//Guardamos el datos creado
		const resultDb:Board = await newBoard.save(board);
		//Se guardo
		console.log(resultDb);
		console.log('Se guardo exitoso!');
	} catch (error) {
		console.log('Erro, create board: ',error);
		return false;
	}
	return true;
};
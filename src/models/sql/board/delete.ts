import { MySQLDataSource as dsource } from '../../../config/connection/mysql/datasource';
import { DeleteResult } from 'typeorm';
import { Board } from '../entity/Board';

export const deletedBoard = async (id:number):Promise<boolean> => {
	//Se trata de eliminar el tablero
	try {
		const resultDelete:DeleteResult = await dsource.getRepository(Board).delete(id);
		console.log('RESULT Delete: ',resultDelete);
	} catch (error) {
		console.log('ERROR deleted Board: ', error);
		return false;
	}
	return true;
};
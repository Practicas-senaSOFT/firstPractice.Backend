import { MySQLDataSource as dsource } from '../../../config/connection/mysql/datasource';
import { UpdateResult } from 'typeorm';
import { DataBoard } from '../../../interfaces/board';
import { Board } from '../domain/Board';

export const updateBoard = async (id:number,values:DataBoard) : Promise<boolean> => {
	//Tratamos de realizar la actualizacion
	try {
		const update:UpdateResult = await dsource.getRepository(Board).update( {id} ,{
			name: values.name,
			description: values.description
		});		
		console.log('RESPONSE UPDATE:: ',update);
	} catch (error) {
		console.error('ERROR Update Company:: ',error);
		return false;
	}
	return true;
};
import { MySQLDataSource as dsourde } from '../../../config/connection/mysql/datasource';
import { DataBoard } from '../../../interfaces/board';
import { Board } from '../domain/Board';

export const updateBoard = async (id:number,values:DataBoard) : Promise<boolean> => {
	//Tratamos de realizar la actualizacion
	try {
		const update = await dsourde.getRepository(Board).update( {id} ,{
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
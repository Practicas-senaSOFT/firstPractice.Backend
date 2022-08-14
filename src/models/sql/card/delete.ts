import { DeleteResult } from 'typeorm';
import { MySQLDataSource as dsource } from '../../../config/connection/mysql/datasource';
import { Card } from '../entity/Card';

export const deleteCard = async (id:string):Promise<boolean> => {
	//Se trata de eliminar 
	try {
		const resultDel:DeleteResult = await dsource.getRepository(Card).delete(id);
		console.log('RESULT Delete: ',resultDel);
	} catch (error) {
		console.error('Error:: eliminando Tarjeta: ',error);
		return false;
	}
	return true;
};
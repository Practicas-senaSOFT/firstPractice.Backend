import { MySQLDataSource as dsource } from '../../../config/connection/mysql/datasource';
import { Card } from '../entity/Card';

//Buscar uno por id
export const findCardId = async (id:string) => {
	return await dsource.getRepository(Card).findOne({where: {id}});
};
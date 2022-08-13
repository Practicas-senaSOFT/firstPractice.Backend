import { MySQLDataSource as dsource } from '../../../config/connection/mysql/datasource';
import { Board } from '../domain/Board';

//Buscamos tablero
export const findBoardId = async (id:number) : Promise<Board|null> => {
	return await dsource.getRepository(Board).findOne({where:{id}});
};
//Obtener todas los tableros creados
export const getBoards = async ():Promise<Board[]> => {
	return await dsource.getRepository(Board).find();
};


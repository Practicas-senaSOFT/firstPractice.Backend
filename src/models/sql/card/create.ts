import { MySQLDataSource as dsource } from '../../../config/connection/mysql/datasource';
import { Card } from '../entity/Card';

//Create card
export const createCard = async (card:Card) : Promise<boolean|Card> => {
	let resultCreate:Card;
	//Se trata de crear la tarjeta
	try {
		resultCreate = await dsource.getRepository(Card).save(card);
		//Se guardo
		console.log('Se creo exitosamente la Tarjeta!');
		console.table(resultCreate);
	} catch (error) {
		console.log('ERROR:: Creando tarjeta: ',error);
		return false;
	}
	return resultCreate;
};
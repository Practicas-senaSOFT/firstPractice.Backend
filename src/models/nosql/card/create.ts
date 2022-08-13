//IMPORT MODEL DOCUMENT
import { DataCardNoSql } from '../../../interfaces/card';
import cardModel from '../entity/Card';

//Create card
export const createCard = async (values:DataCardNoSql):Promise<boolean> => {
	try {
		//Creamos el objeto - documento
		const resultCard = new cardModel({
			idCard:values.idCard,
			status:values.status
		});
		//Save card
		await resultCard.save();
	} catch (error) {
		console.log('Error: Creando DocumentCard: ',error);
		return false;
	}
	return true;
};
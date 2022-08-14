import cardModel from '../entity/Card'; 

// Eliminamos Tarjeta por el el campo 'idCard'
export const deleteCard = async (idCard:string):Promise<boolean> => {
	try {
		await cardModel.findOneAndDelete({idCard}); 
	} catch (error) {
		console.error('Error: Eliminando tarjeta en nosql:: ',error);
		return false;
	}	
	return true;
};
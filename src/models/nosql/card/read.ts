import cardModel from '../entity/Card';


//Buscar por idCard
export const findCardId = async (idCard:string) => {
	return await cardModel.findOne({idCard});
}; 
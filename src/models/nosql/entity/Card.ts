import { prop, getModelForClass } from '@typegoose/typegoose';

export class Card{

	@prop({
		type: String,
		required: true
	})
	public idCard:string;

	@prop({
		type: String,
		required: true,
		// lowercase: true
	})
	public status:string;

	constructor(idCard:string, status:string){
		this.idCard = idCard;
		this.status = status;
	}

}

//Ceamos el modelo
const cardModel = getModelForClass(Card);
export default cardModel;
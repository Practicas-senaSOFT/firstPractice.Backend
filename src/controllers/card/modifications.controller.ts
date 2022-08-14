import { Request,Response } from 'express';
import { deleteCardService } from '../../services/card.service';


export const cardDel = async (req:Request,res:Response) => {
	const { id } = req.params;
	
	const response:boolean|null = await deleteCardService(id);
	//Validamos respuesta
	if(response===null){
		console.log('#Card not found!');
		return res.status(404).json({msg:'#Card not found!'});
	}
	if(response===false){
		console.error('Error al eliminar la tarjeta');
		return res.status(500).json({msg:'Error al eliminar la tarjeta'});
	}
	console.log('>>Se elimino correctamente!');
	return res.status(200).json({msg:'Deleted successfully!'});
};
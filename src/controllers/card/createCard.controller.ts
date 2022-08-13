import { Request,Response } from 'express';
import { DataCard } from '../../interfaces/card';
import { Card } from '../../models/sql/entity/Card';
import { createCardService } from '../../services/card.service';
import { typeCard } from '../../types';

export const createCard = async (req:Request,res:Response):Promise<Response> => {
	//Obtenemos el id del tablero
	const { idBoard } = req.params;
	//TODO->SABER SI LA FECHA ES DE INICIO Y FIN, O SOLO DE CREACIÓN
	//datos de la tarjeta
	const { title,description,status,rating } = req.body as DataCard;
	//Validamos id del tablero

	//enviamos datos a guardar
	const response:boolean|typeCard|null|undefined = await createCardService(idBoard,{title,description,status,rating});
	//Validamos 
	if(response===null){
		console.warn('#Board not found'); 
		return res.status(404).json({msg:'Board not found!'});
	}
	if(response===false){
		console.error('Error when creating the card!');
		return res.status(500).json({msq:'Error when creating the card!'});
	}
	
	if(response===undefined){
		//Error guardando el estado
		console.error('Error saving state!');
		return res.status(500).json({msq:'Error when creating the card!'});
	}
	return res.status(200).json({
		msg:'Correctly created',
		Card:response
	}
	);
};
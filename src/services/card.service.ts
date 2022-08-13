import { DataCard } from '../interfaces/card';
//Import crud
import { findBoardId } from '../models/sql/board/read';
import { createCard } from '../models/sql/card/create';

import { createCard as createCardDocument } from '../models/nosql/card/create';
//Import Entities
import { Board } from '../models/sql/entity/Board';
import { Card } from '../models/sql/entity/Card';
//Import services
import { generateId } from './generateRamdom.service';
import { typeCard } from '../types';

//TODO->SE SIGUE CON LA CRACION DE LA TARJETA	
export const createCardService = async (idBoard:string,values:DataCard):Promise<boolean|typeCard|null|undefined> => {
	//parsemos idBoard
	const idBoardParse:number = parseInt(idBoard);
	//Validamos si el tablero existe
	const found:Board|null = await findBoardId(idBoardParse);
	if(!found)return null;//Board not found
	//Obtenemos la fecha
	const dateTime = new Date();
	//Se crea el id de la tarjeta
	const idCard:string = await generateId(6);
	if(!values.status) return;
	//Obtenemos el estado
	const status:string = values.status;
	//creamos la tarjeta
	const newCard:Card = new Card(idCard,idBoardParse,values.title,values.description,dateTime,values.rating);
	//*Se guarda en MySQL
	const resultCreate:boolean|Card = await createCard(newCard);
	if(typeof resultCreate === 'boolean')return false;
	
	//*Guardamos el 'status' dato en MOngoDb
	const result:boolean = await createCardDocument({idCard,status});
	if(!result) return undefined;//Ocurrio un error al guardar
	//ALL Ok
	return buildCard(resultCreate,status);
};

const buildCard = (dataCard:Card,status:string):typeCard => {
	//Construimos la tarjeta
	return {
		id:dataCard.id,
		idBoard:dataCard.idBoard,
		title:dataCard.title,
		description:dataCard.description,
		date:dataCard.date,
		rating:dataCard.rating,
		status:status
	};
};
import { Request,Response } from 'express';

//Import interface
import { DataBoard } from '../interfaces';
//Import services
import {createBoardService} from '../services/create.service';


export const createBoard = async (req:Request,res:Response) => {	
	// Obtenemos los datos
	const { name, description } = req.params as DataBoard;
	//service
	const result = await createBoardService({name,description});

	//Validamos respuesta
	if(result === null)return res.status(500).json('ERROR: Data not found');
	if(result === false) return res.status(500).json('ERROR: In create DB');
	return res.status(200).json({msg:'Se guardo exitoso!'});

};
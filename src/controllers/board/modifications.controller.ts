import { Request,Response } from 'express';
import { rmSync } from 'fs';
import { DataBoard } from '../../interfaces/board';
//Importamos servicios
import { boardPutService, deleteBoardService } from '../../services/board.service';


export const boardPut = async (req:Request, res:Response):Promise<Response> => {
	//Deconstruccion
	const { id } = req.params;
	const { name, description } = req.body as DataBoard;
	//validacion de id
	
	//Pasamos datos
	const response:boolean|null = await boardPutService(id,{name, description});
	//Validamos respuesta
	if(response===null)return res.status(404).json({msg:'Board not found!'});
	if(response===false)return res.status(500).json({msg:'Error: When updating data'});
	return res.status(200).json({msq:'Correct update!'});
};

export const boardDel = async (req:Request, res:Response):Promise<Response> => {
	//Obtenemos id por los parametros
	const { id } = req.params;

	const response:boolean|null = await deleteBoardService(id);
	//Validamos respuesta
	if(response===null)return res.status(404).json({msg:'Board not found!'});
	if(response===false)return res.status(500).json({msg:'Error to remove the board'});
	return res.status(200).json({msg:'Correct elimination!'});
};
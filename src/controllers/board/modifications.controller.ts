import { Request,Response } from 'express';
import { DataBoard } from '../../interfaces/board';
//Importamos servicios
import { boardPutService } from '../../services/board.service';


export const boardPut = async (req:Request, res:Response) => {
	//Deconstruccion
	const { id } = req.params;
	const { name, description } = req.body as DataBoard;
	//validacion de id
	
	//Pasamos datos
	const response:boolean|null = await boardPutService(id,{name, description});
	//Validamos respuesta
	if(response===null)return res.status(404).json({msg:'Tablero no encontrado'});
	if(response===false)return res.status(500).json({msg:'Error: en la actualizacion de los datos'});
	return res.status(200).json({msq:'Se actualizo correctamente!'});
};
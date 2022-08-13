import { Request,Response } from 'express';
import { Board } from '../../models/sql/entity/Board';
import { showBoardsService } from '../../services/board.service';

export const showBoards = async (req:Request,res:Response):Promise<Response> => {
	//Obtenemos los tableros
	const response:Board[]|null = await showBoardsService();
	//Validamos repsuesta
	if(!response) return res.status(404).json({msg:'No boards available!'});

	return res.status(200).json({
		msg:'Boards',
		response
	});
};
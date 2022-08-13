import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Board } from './Board';

@Entity()
export class Card {

	@PrimaryColumn()
	public id:string;
	@ManyToOne(() => Board, (board) => board.cards)
	public idBoard:number;
	@Column()
	public title:string;
	@Column()
	public description:string;
	@Column()
	public date:Date;
	@Column()
	public rating:number;

	constructor(id:string,idBoard:number,title:string,description:string,date:Date,rating:number){
		this.id = id;
		this.idBoard = idBoard;
		this.title = title;
		this.description = description;
		this.date = date;
		this.rating = rating;
	}
}
import { Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, JoinTable } from 'typeorm';
import { Card } from './Card';

@Entity()
export class Board{

	//Id primario
	@PrimaryGeneratedColumn()
	public id:number;
	@Column('text')
	public name:string;
	@Column('text')
	public description:string;
	@OneToMany(() => Card, (card) => card.idBoard)
	@JoinTable()
	public cards:Card[];

	constructor(name:string, description:string){
		this.name = name;
		this.description = description;
	}	
	//Print default
	printFormat():string{
		return`Board = name: ${this.name}, description: ${this.description}`;
	}
}
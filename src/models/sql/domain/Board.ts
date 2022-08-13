import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Board{

	//Id primario
	@PrimaryGeneratedColumn()
	public id:number;
	@Column('text')
	public name:string;
	@Column('text')
	public description:string;

	
	constructor(name:string, description:string){
		this.name = name;
		this.description = description;
	}
	
	//Print default
	printFormat():string{
		return`Board = name: ${this.name}, description: ${this.description}`;
	}
}
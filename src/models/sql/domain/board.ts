import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Board{

	//Id primario
	@PrimaryGeneratedColumn()
	protected id:number;
	@Column('text')
	protected name:string;
	@Column('text')
	protected description:string;

	
	constructor(name:string, description:string){
		this.name = name;
		this.description = description;
	}

	//Name
	get _name() {
		return this.name;
	}
	set _name(newName:string){
		this.name=newName;
	}

	//Description
	get _description(){
		return this.description;
	}	
	set _description(newDescription:string){
		this.description = newDescription;
	}

	//Print default
	printFormat():string{
		return`Board = name: ${this._name}, description: ${this._description}`;
	}
}
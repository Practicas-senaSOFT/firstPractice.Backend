import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Board{

	//Id primario
	@PrimaryGeneratedColumn()
		id:number;
	@Column('text')
		name:string;
	@Column('text')
		description:string;

	
	constructor(name:string, description:string){
		this.name = name;
		this.description = description;
	}

	// //id
	// get _id() {
	// 	return this.id;
	// }
	// set _id(newValue:number){
	// 	this.id=newValue;
	// }

	// //Name
	// get name() {
	// 	return this._name;
	// }
	// set name(newName:string){
	// 	this._name=newName;
	// }

	// //Description
	// get description(){
	// 	return this._description;
	// }	
	// set description(newDescription:string){
	// 	this._description = newDescription;
	// }

	//Print default
	printFormat():string{
		return`Board = name: ${this.name}, description: ${this.description}`;
	}
}
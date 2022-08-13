import { connect, disconnect } from 'mongoose';

//OPTIONS
const DC = 'todoList';
const PORT = 27017;
const HOST = 'localhost';
const username = '';
const password = '';

//Connection
export const connectDB = async () => {
	//nos conectamos
	const db = await connect(`mongodb://${HOST}:${PORT}/${DC}`);
	//mostramos coneccion
	console.log('Mongo:DataBase is connected to :: ', db.connection.db.databaseName);
};
//Disconnection
export async function disconnection() {
	//
	disconnect();
	console.log('Disconnection DataBase');
}
import app from './app';

//Importamos coneccipn a la DB mysql
import 'reflect-metadata';
import { MySQLDataSource } from './config/connection/mysql/datasource';
////////////////////////////////////////////////////////////////

const start = async (port:number) => {
	try {
		app.listen(port, () => {
			console.log(`
		###################################
		Server listening on port: ${port}
		###################################
			`);
		});
	} catch (error) {
		console.log(error);
		//Salir del proceso
		process.exit();
	}
};

//Crear coneccion
Promise.all(
	//Se espera a que inicialice
	[MySQLDataSource.initialize()]
).then(()=>{
	//Anizilar el proyecto
	start(3000);
}).catch((err)=>{
	console.error('ERROR: Initilizing -> ', err);
});
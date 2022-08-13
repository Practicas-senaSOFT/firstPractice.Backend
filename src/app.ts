import express, {Application} from 'express';

//importamos rutas
import { routes } from './routes/index.routes';
//MORGAN
import morgan from 'morgan';
////////////////////////////////////////////
//IMPORT CONNECTION MONGODB
import { connectDB } from './config/connection/mongoDB/connection';
//NOs conectamos
connectDB();

//Inicia app
const app:Application = express();

//----->Middlewares<------
//Use morgan 
app.use(morgan('dev'));
//Para que express acepte json
app.use(express.json());

// ------->Routes<-------
routes(app);

///////////////////////////
// Exporta
export default app;
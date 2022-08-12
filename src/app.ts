import express, {Application} from 'express';

//importamos rutas
import { routes } from './routes/index.routes';

import morgan from 'morgan';

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
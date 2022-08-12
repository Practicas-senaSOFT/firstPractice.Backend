import { DataSource } from 'typeorm';
import mysqlOptions from './options';

//Crear coneccion MySQL
const MySQLDataSource = new DataSource(mysqlOptions);
//Exportamos
export { MySQLDataSource };
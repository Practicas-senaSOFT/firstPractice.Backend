import { DataSourceOptions } from 'typeorm';

import { getSqlEntities } from './getEntities';

//Opciones para el driver mysql
export default{
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '0606',
	database: 'todoList',
	logging: 'true',
	synchronize: 'true',
	entities: getSqlEntities().split(',')
} as unknown as DataSourceOptions;
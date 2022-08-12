//Obtenemos las entidades creadas
export const getSqlEntities = (): string => {

	const entities: { js: string, ts: string } = {
		ts: 'src/models/sql/**/*.ts',
		js: 'build/src/models/sql/**/*.js',
	};
	
	const entitiesPath = entities.ts ? entities.js : null;
	console.log('Entities: ',entitiesPath);

	if(!entitiesPath) console.warn('WARN: No entities path had been loaded.');
	return entitiesPath ?? '';
};
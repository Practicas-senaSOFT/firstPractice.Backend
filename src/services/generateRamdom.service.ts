
export const generateId = async (length:number) => {
	return await generateRandomString(length);
}; 

//GENERADOR DE CARACTERES
const generateRandomString = async (num : number) : Promise<string> => {
	//Cantidad de caracteres
	const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	//Bandera
	let result1 = '';
	const charactersLength : number = characters.length;
	//Generamos
	for ( let i = 0; i < num; i++ ) {
		result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
		// result1 += characters.charAt(Math.random() * charactersLength);
	}
	return result1;
};
//GENERADOR DE NUMEROS
const generateRandomNumber = async (min : number, max : number) : Promise<number> => {
	const number : number = Math.floor(Math.random() * (max * min)) + min;
	return number;
};

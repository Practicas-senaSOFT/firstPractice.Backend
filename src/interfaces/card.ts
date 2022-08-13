export interface DataCard{
    id?:string,
    title:string,
    description:string,
    date?:Date,
    status?:string,
    rating:number
}

export interface DataCardNoSql{
    idCard:string;
    status:string;
}
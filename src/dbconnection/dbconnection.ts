import { Db, MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

class connect{
private client;
private db!:Db;


    constructor(){
        this.client=new MongoClient(process.env.DB_URL as string)
       
    }

async dbconnect(){
    try{
 await this.client.connect();
this.db=this.client.db(process.env.DB as string)
console.log("database connected")

}catch(err){
    throw new Error("db connection failed")
}
}

getdb():Db{
if(!this.db){
    throw new Error("connect database first")
}
return this.db

}

}

export default new connect();
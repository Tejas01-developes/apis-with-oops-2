import { Db } from 'mongodb';
import connect from '../dbconnection/dbconnection.js';

type controllerrecivetype1={
    userid:string
    name:string,
    age:number,
    profession:string,
    experience:number
}






export class insertservice{
private insertdb

constructor(){
this.insertdb=connect.getdb().collection<controllerrecivetype1>(process.env.DB as string)
}
async insertservice(data:controllerrecivetype1):Promise<string>{
    try{
   await this.insertdb.insertOne({userid:data.userid,name:data.name,age:data.age,profession:data.profession,experience:data.experience})
    return "insert done"
}catch(err){
    throw new Error("insertion failed")
}
}
}

type recivedetails={
    name:string,
    age:number,
    profession:string,
}
type findtype={
    name:string
}

export class getuserservice{
    private database:Db
    private collection:string

    constructor(){
        this.collection=process.env.DB as string
        this.database=connect.getdb()
        
    }
   async getusers(data:findtype):Promise<recivedetails | null>{
    try{
const res=await this.database.collection<recivedetails>(this.collection).findOne({name:data.name})
return res
    }catch(err){
        throw new Error("cant get the details")
    }
}
}







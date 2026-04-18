import { Request, Response } from "express"
import { getuserservice, insertservice } from "../service/userservice";


type bodytype1={
    name:string,
    age:number,
    profession:string,
    experience:number
}



export class insertuser{

    constructor(){

    }
async insertuser(req:Request<{},{},bodytype1>,resp:Response):Promise<void>{
const{name,age,profession,experience}=req.body;
if(!name || !age || !profession || !experience){
    resp.status(400).json({success:false,message:"body not recived"})
    return
}
const userid:string=crypto.randomUUID();
const insertuser=new insertservice();
try{
await insertuser.insertservice({userid,name,age,profession,experience});
 resp.status(200).json({success:true,message:"insertion succesfully done"})
 return
}catch(err){
    resp.status(400).json({success:false,message:"insertion failed"})
    return
}
}
}

type bodytype2={
    name:string
}

export class details{


    async getusersdetails(req:Request<{},{},bodytype2>,resp:Response):Promise<void>{
        const {name}=req.body;
        if(!name){
resp.status(400).json({message:"cant get body"})
        }
        const getdetails=new getuserservice()
        try{
        const res=await getdetails.getusers({name:name})
       resp.status(200).json({res})
    }catch(err){
         resp.status(400).json({message:"get detail failed"})
         return
    }
}
}
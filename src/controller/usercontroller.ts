import { Request, Response } from "express"
import {  getdetials, getdetials2, insertservice, insertservice2, insertservice3, insertservice4, loginservice } from "../service/userservice";
import bcrypt from 'bcrypt';

type bodytype1={
   
    name:string,
    email:string,
    password:string,
    age:number,
    salary:number,
    experience:number
}

export class userinsertcontroller{


    constructor(){

    }
async insertuser(req:Request<{},{},bodytype1>,resp:Response):Promise<void>{
    const{name,email,password,age,salary,experience}=req.body;
if(!name||!email||!password||!age||!salary||!experience){
    resp.status(400).json({message:"no body recived"})
    return
}
const hash=await bcrypt.hash(password,10);
const insertusers=new insertservice();
const userid:string=crypto.randomUUID();
try{
    await insertusers.insertusers({userid,name,email,password:hash,age,salary,experience})
resp.status(200).json({message:"user inserted"})
return
}catch(err){
    resp.status(400).json({message:"insertion failed"})
    return
}
}


}

type bodytype2={
   
    name:string,
    collage:string,
    marks:number,
    passout:number,
    profession:string

}


export class userinsertcontroller2{


    constructor(){

    }
async insertuser(req:Request<{},{},bodytype2>,resp:Response):Promise<void>{
    const{name,collage,passout,marks,profession}=req.body;
if(!name||!collage||!passout||!marks || !profession){
    resp.status(400).json({message:"no body recived"})
    return
}

const insertusers=new insertservice2();
const userid:string=crypto.randomUUID();
try{
    await insertusers.insertusers({userid,name,collage,passout,marks,profession})
resp.status(200).json({message:"user inserted"})
return
}catch(err){
    resp.status(400).json({message:"insertion failed"})
    return
}
}
}

type bodytype3={
    name:string
}

export class getdetails{

    constructor(){

    }

    async getdetailsofuser(req:Request<{},{},bodytype3>,resp:Response){
const{name}=req.body;
if(!name){
    return resp.status(400).json({message:"no body"})
}
const getdetailsofusers=new getdetials();
try{
const res=await getdetailsofusers.getuserdetails({name})
resp.status(200).json({res})
return 
    }catch(err){
        return resp.status(400).json({message:"get details failed"})
    }
}
}




// export class fieldadd{

//     async addfields(req:Request,resp:Response){
//         const fields=new addfield();
// await fields.addingfield()
// resp.status(200)
// return
//     }
// }

type bodytype4={
   
    name:string,
    marks:number,


}


export class userinsertcontroller3{


    constructor(){

    }
async insertuser(req:Request<{},{},bodytype4>,resp:Response):Promise<void>{
    const{name,marks}=req.body;
if(!name||!marks){
    resp.status(400).json({message:"no body recived"})
    return
}

const insertusers=new insertservice3();
const userid:string=crypto.randomUUID();
try{
    await insertusers.insertusers({userid,name,marks})
resp.status(200).json({message:"user inserted"})
return
}catch(err){
    resp.status(400).json({message:"insertion failed"})
    return
}
}
}




type bodytype5={
    name:string
}

export class getdetail2{

    constructor(){

    }

    async getdetailsofuser(req:Request<{},{},bodytype5>,resp:Response){
const{name}=req.body;
if(!name){
    return resp.status(400).json({message:"no body"})
}
const getdetailsofusers2=new getdetials2();
try{
const res=await getdetailsofusers2.getuserdetails({name})
resp.status(200).json({res})
return 
    }catch(err){
        return resp.status(400).json({message:"get details failed"})
    }
}
}




type bodytype6={
   
    name:string,
    marks:number[],


}


export class userinsertcontroller4{


    constructor(){

    }
async insertuser(req:Request<{},{},bodytype6>,resp:Response):Promise<void>{
    const{name,marks}=req.body;
if(!name||!marks){
    resp.status(400).json({message:"no body recived"})
    return
}

const insertusers=new insertservice4();
const userid:string=crypto.randomUUID();
try{
    await insertusers.insertusers({userid,name,marks})
resp.status(200).json({message:"user inserted"})
return
}catch(err){
    resp.status(400).json({message:"insertion failed"})
    return
}
}
}

type bodytype7={
email:string,
password:string
}

export class loginuser{

    async login(req:Request<{},{},bodytype7>,resp:Response):Promise<void>{
const{email,password}=req.body;
if(!email || !password){
    resp.status(400).json({message:"body not recived"})
    return 
}
const loginapi=new loginservice();
try{
const res=await loginapi.loginservices({email});
if(!res){
    resp.status(400).json({message:"result not recived from the service"})
    return
}
const compare=await bcrypt.compare(password,res.password);
if(!compare){
    resp.status(400).json({message:"password is incorrect"})
    return
}
resp.status(200).json({message:"login success"})
return
}catch(err){
    resp.status(400).json({message:"login failed"})
    return
}
    }
}
import express, { Router } from 'express';
import { details, insertuser } from '../controller/usercontroller';


export class route{

private router:Router;

    constructor(){
this.router=express.Router();
    }

    methods(){
        const insertapi=new insertuser();
        this.router.post("/",(req,resp)=>{
            insertapi.insertuser(req,resp)
        })


        const getapi=new details();
this.router.get("/get",(req,resp)=>{
    getapi.getusersdetails(req,resp)
})




        return this.router
    }
}
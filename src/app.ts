import { Application } from "express";
import express from 'express';
import connect from './dbconnection/dbconnection.js'
import { route } from "./routes/routes.js";


class server{
    private app:Application
    private port:number

    constructor(port:number){
        this.app=express();
        this.port=port

        this.middleware();
        this.inetializeserver();
    }

    private middleware():void{
this.app.use(express.urlencoded({extended:true}))
this.app.use(express.json())
connect.dbconnect();
const router=new route()
this.app.use("/apis",router.methods())
    }

    private inetializeserver(){
        this.app.listen(this.port,()=>{
            console.log(`server started on the port ${this.port}`)
        })
    }


}


new server(3000);
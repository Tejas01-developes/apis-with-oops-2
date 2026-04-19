import express, { Router } from 'express';
import {  getdetail2, getdetails, userinsertcontroller, userinsertcontroller2, userinsertcontroller3 } from '../controller/usercontroller';

export class route{
private router:Router;


    constructor(){
this.router=express.Router();
    }

routes(){
    const insertapi=new userinsertcontroller();
  this.router.post("/",(req,resp)=>{
    insertapi.insertuser(req,resp)
  })  

  const insertapi2=new userinsertcontroller2();
  this.router.post("/2",(req,resp)=>{
    insertapi2.insertuser(req,resp)
  })  


  const insertapi3=new userinsertcontroller3();
  this.router.post("/3",(req,resp)=>{
    insertapi3.insertuser(req,resp)
  })  

  const getapi1=new getdetails();
  this.router.get("/get",(req,resp)=>{
    getapi1.getdetailsofuser(req,resp)
  })

  const getapi2=new getdetail2();
  this.router.get("/get2",(req,resp)=>{
    getapi2.getdetailsofuser(req,resp)
  })
//   const fieldapi=new fieldadd();
//   this.router.post("/add",(req,resp)=>{
//     fieldapi.addfields(req,resp)
//   })



  return this.router
}

}
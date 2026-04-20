import { Collection } from "mongodb";
import connect from '../dbconnection/dbconnection.js'
import dotenv from 'dotenv';
dotenv.config();


type controllertype1={
    userid:string,
    name:string,
    email:string,
    password:string,
    age:number,
    salary:number,
    experience:number
}

export class insertservice{
private collection:Collection
    constructor(){
        this.collection=connect.getdb().collection(process.env.USER_COLLECTION as string)
    }

   async insertusers(data:controllertype1):Promise<string>{
    try{
       await this.collection.insertOne({userid:data.userid,name:data.name,email:data.email,password:data.password,age:data.age,salary:data.salary,experience:data.experience})

        return "user inserted"
    }catch(err){
        throw new Error("user insertion failed")
    }
}
}




type controllertype2={
    userid:string,
    name:string,
   collage:string
   passout:number
    marks:number
    profession:string
}

export class insertservice2{
private collection:Collection
    constructor(){
        this.collection=connect.getdb().collection(process.env.USER_COLLECTION2 as string)
    }

   async insertusers(data:controllertype2):Promise<string>{
    try{
       await this.collection.insertOne({userid:data.userid,name:data.name,collage:data.collage,passout:data.passout,marks:data.marks,profession:data.profession})

        return "user inserted"
    }catch(err){
        throw new Error("user insertion failed")
    }
}
}

// type getdetailstype={
//     userid:string,
//     name:string,
//     email:string,
//     password:string,
//     age:number,
//     salary:number,
//     experience:number
//     collage:string
//     passout:number
//      marks:number
//      profession:string
// }

type controllertype3={
    name:string
}

export class getdetials{
private dbcollection:Collection
    constructor(){
this.dbcollection=connect.getdb().collection(process.env.USER_COLLECTION as string)
    }

    async getuserdetails(data:controllertype3){
const res=await this.dbcollection.aggregate([{$match:{name:data.name}},{$lookup:{from :process.env.USER_COLLECTION2,
    localField:"name",
    foreignField:"name",
    as:"lookupexample"
}}]).toArray();

return res

    }
}


// export class addfield{
// private collection:Collection
//     constructor(){
// this.collection=connect.getdb().collection(process.env.USER_COLLECTION2 as string)
//     }
//     addingfield(){
//         this.collection.aggregate([{$addfield:{state:"Gujarat"}}])
//     }
// }





type controllertype4={
    userid:string,
    name:string,
   marks:number
}

export class insertservice3{
    private collection:Collection
        constructor(){
            this.collection=connect.getdb().collection(process.env.USER_COLLECTION3 as string)
        }
    
       async insertusers(data:controllertype4):Promise<string>{
        try{
           await this.collection.insertOne({userid:data.userid,name:data.name,marks:data.marks})
    
            return "user inserted"
        }catch(err){
            throw new Error("user insertion failed")
        }
    }
    }



    type controllertype5={
    name:string
}

export class getdetials2{
private dbcollection:Collection
    constructor(){
this.dbcollection=connect.getdb().collection(process.env.USER_COLLECTION3 as string)
    }

    async getuserdetails(data:controllertype5){
const res=await this.dbcollection.aggregate([
    {$match:{name:data.name}},
   
    {$lookup:{from :process.env.USER_COLLECTION4,
    localField:"name",
    foreignField:"name",
    as:"lookupexample2"
}},



// {$set:{cast:"darji"}},
// {$unwind:"$lookupexample2"},
// {$unwind:"$lookupexample2.marks"},
// {$facet:
//     {dta:[
//         {$project:{
//             name:1,
//             mark:"$lookupexample2.marks",
//             _id:0
//         }}
//     ],
// total:[
//     {$count:"count"}
// ]
// }
// }

// {$addFields:{totalmarks:{$sum:{$map:{input:"$lookupexample2",as:"item",in:{$toInt:["$$item.marks"]}}}}}},


]).toArray();

return res

    }
}
// {$addField:{totalmarks:{$add:[{$toInt:"$marks"},{$sum:{$map:{input:"$lookupexample2",as:"item",in:{$toInt:"$$item.marks"}}}}]}}}





type controllertype6={
    userid:string,
    name:string,
   marks:number[]
}

export class insertservice4{
    private collection:Collection
        constructor(){
            this.collection=connect.getdb().collection(process.env.USER_COLLECTION4 as string)
        }
    
       async insertusers(data:controllertype6):Promise<string>{
        try{
           await this.collection.insertOne({userid:data.userid,name:data.name,marks:data.marks})
    
            return "user inserted"
        }catch(err){
            throw new Error("user insertion failed")
        }
    }
    }
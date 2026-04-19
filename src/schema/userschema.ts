import mongoose, { Model, Schema } from "mongoose"

type user=Document&{
    userid:number,
    name:string,
    email:string,
    password:string,
    age:number,
    salary:number,
    experience:number
}


 class usermodel{
    private schema:Schema
    public model:Model<user>

constructor(){
    this.schema=new mongoose.Schema({
        userid:{
            type:Number,
            required:true,
            unique:true
        },

        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            unique:true,
            required:true
        },
        password:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        salary:{
            type:Number,
            required:true,
        },
        experience:{
            type:Number,
            required:true,
        },

    },{timestamps:true})

this.createindex();
// this.addmethod();
this.model=mongoose.model<user>("users",this.schema)
}
private createindex():void{
    this.schema.index({email:1},{unique:true})
}




}


export const model1=new usermodel().model
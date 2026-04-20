import jwt from 'jsonwebtoken' 
import dotenv from "dotenv";
dotenv.config();

type tokendatatype={
    id:string
}
 class generatetoken{
private accesskey:string
private refreshkey:string

    constructor(){
this.accesskey=process.env.ACCESS_KEY as string
this.refreshkey=process.env.REFRESH_KEY as string
    }
    accesstoken(id:tokendatatype):string{
return jwt.sign(
    {id:id.id},
    this.accesskey,
    {expiresIn:"15m"}

)
    }

    refreshtoken(id:tokendatatype):string{
return jwt.sign(
    {id:id.id},
    this.refreshkey,
    {expiresIn:"7d"}
)
    }

    
}

export default new generatetoken();
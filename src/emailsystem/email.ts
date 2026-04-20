import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();

export class emailsendingservice{
private email:string
private emailpass:string
private createtransport

    constructor(){
        this.email=process.env.EMAIL as string,
        this.emailpass=process.env.EMAIL_PASS as string
        
        this.createtransport=
        nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:this.email,
                pass:this.emailpass
                
            }
        })
        this.sendemails();
    }
public sendemails(to:string,sub:string,text:string){
this.createtransport.sendMail({
    from:this.email,
    to,
    subject:sub,
    text
})
}


}
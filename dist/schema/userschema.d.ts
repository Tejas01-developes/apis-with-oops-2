import mongoose from "mongoose";
type user = Document & {
    userid: number;
    name: string;
    email: string;
    password: string;
    age: number;
    salary: number;
    experience: number;
};
export declare const model1: mongoose.Model<user, {}, {}, {}, mongoose.Document<unknown, {}, user, {}, mongoose.DefaultSchemaOptions> & Document & {
    userid: number;
    name: string;
    email: string;
    password: string;
    age: number;
    salary: number;
    experience: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, user>;
export {};
//# sourceMappingURL=userschema.d.ts.map
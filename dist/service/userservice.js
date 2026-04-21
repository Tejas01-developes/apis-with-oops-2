"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginservice = exports.insertservice4 = exports.getdetials2 = exports.insertservice3 = exports.getdetials = exports.insertservice2 = exports.insertservice = void 0;
const dbconnection_js_1 = __importDefault(require("../dbconnection/dbconnection.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class insertservice {
    collection;
    constructor() {
        this.collection = dbconnection_js_1.default.getdb().collection(process.env.USER_COLLECTION);
    }
    async insertusers(data) {
        try {
            await this.collection.insertOne({ userid: data.userid, name: data.name, email: data.email, password: data.password, age: data.age, salary: data.salary, experience: data.experience });
            return "user inserted";
        }
        catch (err) {
            throw new Error("user insertion failed");
        }
    }
}
exports.insertservice = insertservice;
class insertservice2 {
    collection;
    constructor() {
        this.collection = dbconnection_js_1.default.getdb().collection(process.env.USER_COLLECTION2);
    }
    async insertusers(data) {
        try {
            await this.collection.insertOne({ userid: data.userid, name: data.name, collage: data.collage, passout: data.passout, marks: data.marks, profession: data.profession });
            return "user inserted";
        }
        catch (err) {
            throw new Error("user insertion failed");
        }
    }
}
exports.insertservice2 = insertservice2;
class getdetials {
    dbcollection;
    constructor() {
        this.dbcollection = dbconnection_js_1.default.getdb().collection(process.env.USER_COLLECTION);
    }
    async getuserdetails(data) {
        const res = await this.dbcollection.aggregate([{ $match: { name: data.name } },
            { $lookup: { from: process.env.USER_COLLECTION2,
                    localField: "name",
                    foreignField: "name",
                    as: "lookupexample"
                }
            },
            { $set: { age: "$age" } }
        ]).toArray();
        return res;
    }
}
exports.getdetials = getdetials;
class insertservice3 {
    collection;
    constructor() {
        this.collection = dbconnection_js_1.default.getdb().collection(process.env.USER_COLLECTION3);
    }
    async insertusers(data) {
        try {
            await this.collection.insertOne({ userid: data.userid, name: data.name, marks: data.marks });
            return "user inserted";
        }
        catch (err) {
            throw new Error("user insertion failed");
        }
    }
}
exports.insertservice3 = insertservice3;
class getdetials2 {
    dbcollection;
    constructor() {
        this.dbcollection = dbconnection_js_1.default.getdb().collection(process.env.USER_COLLECTION4);
    }
    async getuserdetails(data) {
        const res = await this.dbcollection.aggregate([
            { $match: { name: data.name } },
            // {$addfield:{marks:{$toInt:"$marks"}}},
            // {$set:}
            // {$match:{marks:{$gt:"70"}}},
            // {$merge:"mergeexample"}
            //     {$lookup:{from :process.env.USER_COLLECTION4,
            //     localField:"name",
            //     foreignField:"name",
            //     as:"lookupexample2"
            // }},
            // {$set:{cast:"darji"}},
            { $unwind: "$marks" },
            // {$count:"result no"},
            { $facet: { dta: [
                        { $project: { _id: 0 } },
                        { $limit: 1 },
                        { $skip: 1 }
                    ],
                    resultt: [
                        { $count: "result output" }
                    ]
                } }
            // {$facet:
            //     {dta:[
            //         {$project:{
            //             name:1,
            //             mark:"$marks",
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
        return res;
    }
}
exports.getdetials2 = getdetials2;
class insertservice4 {
    collection;
    constructor() {
        this.collection = dbconnection_js_1.default.getdb().collection(process.env.USER_COLLECTION4);
    }
    async insertusers(data) {
        try {
            await this.collection.insertOne({ userid: data.userid, name: data.name, marks: data.marks });
            return "user inserted";
        }
        catch (err) {
            throw new Error("user insertion failed");
        }
    }
}
exports.insertservice4 = insertservice4;
class loginservice {
    collection;
    constructor() {
        this.collection = process.env.USER_COLLECTION;
    }
    async loginservices(data) {
        try {
            const res = await dbconnection_js_1.default.getdb().collection(this.collection).findOne({ email: data.email });
            return res;
        }
        catch (err) {
            throw new Error("getting details failed");
        }
    }
}
exports.loginservice = loginservice;
//# sourceMappingURL=userservice.js.map
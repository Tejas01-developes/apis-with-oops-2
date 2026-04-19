"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addfield = exports.getdetials = exports.insertservice2 = exports.insertservice = void 0;
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
        const res = await this.dbcollection.aggregate([{ $match: { name: data.name } }, { $lookup: { from: process.env.USER_COLLECTION2,
                    localField: "name",
                    foreignField: "name",
                    as: "lookupexample"
                } }]).toArray();
        return res;
    }
}
exports.getdetials = getdetials;
class addfield {
    collection;
    constructor() {
        this.collection = dbconnection_js_1.default.getdb().collection(process.env.USER_COLLECTION2);
    }
    addingfield() {
        this.collection.aggregate([{ $addfield: { state: "Gujarat" } }]);
    }
}
exports.addfield = addfield;
//# sourceMappingURL=userservice.js.map
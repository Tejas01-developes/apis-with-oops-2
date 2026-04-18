"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getuserservice = exports.insertservice = void 0;
const dbconnection_js_1 = __importDefault(require("../dbconnection/dbconnection.js"));
class insertservice {
    insertdb;
    constructor() {
        this.insertdb = dbconnection_js_1.default.getdb().collection(process.env.DB);
    }
    async insertservice(data) {
        try {
            await this.insertdb.insertOne({ userid: data.userid, name: data.name, age: data.age, profession: data.profession, experience: data.experience });
            return "insert done";
        }
        catch (err) {
            throw new Error("insertion failed");
        }
    }
}
exports.insertservice = insertservice;
class getuserservice {
    database;
    collection;
    constructor() {
        this.collection = process.env.DB;
        this.database = dbconnection_js_1.default.getdb();
    }
    async getusers(data) {
        try {
            const res = await this.database.collection(this.collection).findOne({ name: data.name });
            return res;
        }
        catch (err) {
            throw new Error("cant get the details");
        }
    }
}
exports.getuserservice = getuserservice;
//# sourceMappingURL=userservice.js.map
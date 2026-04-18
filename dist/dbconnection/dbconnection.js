"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class connect {
    client;
    db;
    constructor() {
        this.client = new mongodb_1.MongoClient(process.env.DB_URL);
    }
    async dbconnect() {
        try {
            await this.client.connect();
            this.db = this.client.db(process.env.DB);
            console.log("database connected");
        }
        catch (err) {
            throw new Error("db connection failed");
        }
    }
    getdb() {
        if (!this.db) {
            throw new Error("connect database first");
        }
        return this.db;
    }
}
exports.default = new connect();
//# sourceMappingURL=dbconnection.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldadd = exports.getdetails = exports.userinsertcontroller2 = exports.userinsertcontroller = void 0;
const userservice_1 = require("../service/userservice");
const bcrypt_1 = __importDefault(require("bcrypt"));
class userinsertcontroller {
    constructor() {
    }
    async insertuser(req, resp) {
        const { name, email, password, age, salary, experience } = req.body;
        if (!name || !email || !password || !age || !salary || !experience) {
            resp.status(400).json({ message: "no body recived" });
            return;
        }
        const hash = await bcrypt_1.default.hash(password, 10);
        const insertusers = new userservice_1.insertservice();
        const userid = crypto.randomUUID();
        try {
            await insertusers.insertusers({ userid, name, email, password: hash, age, salary, experience });
            resp.status(200).json({ message: "user inserted" });
            return;
        }
        catch (err) {
            resp.status(400).json({ message: "insertion failed" });
            return;
        }
    }
}
exports.userinsertcontroller = userinsertcontroller;
class userinsertcontroller2 {
    constructor() {
    }
    async insertuser(req, resp) {
        const { name, collage, passout, marks, profession } = req.body;
        if (!name || !collage || !passout || !marks || !profession) {
            resp.status(400).json({ message: "no body recived" });
            return;
        }
        const insertusers = new userservice_1.insertservice2();
        const userid = crypto.randomUUID();
        try {
            await insertusers.insertusers({ userid, name, collage, passout, marks, profession });
            resp.status(200).json({ message: "user inserted" });
            return;
        }
        catch (err) {
            resp.status(400).json({ message: "insertion failed" });
            return;
        }
    }
}
exports.userinsertcontroller2 = userinsertcontroller2;
class getdetails {
    constructor() {
    }
    async getdetailsofuser(req, resp) {
        const { name } = req.body;
        if (!name) {
            return resp.status(400).json({ message: "no body" });
        }
        const getdetailsofusers = new userservice_1.getdetials();
        try {
            const res = await getdetailsofusers.getuserdetails({ name });
            resp.status(200).json({ res });
            return;
        }
        catch (err) {
            return resp.status(400).json({ message: "get details failed" });
        }
    }
}
exports.getdetails = getdetails;
class fieldadd {
    async addfields(req, resp) {
        const fields = new userservice_1.addfield();
        await fields.addingfield();
        resp.status(200);
        return;
    }
}
exports.fieldadd = fieldadd;
//# sourceMappingURL=usercontroller.js.map
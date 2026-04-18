"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.details = exports.insertuser = void 0;
const userservice_1 = require("../service/userservice");
class insertuser {
    constructor() {
    }
    async insertuser(req, resp) {
        const { name, age, profession, experience } = req.body;
        if (!name || !age || !profession || !experience) {
            resp.status(400).json({ success: false, message: "body not recived" });
            return;
        }
        const userid = crypto.randomUUID();
        const insertuser = new userservice_1.insertservice();
        try {
            await insertuser.insertservice({ userid, name, age, profession, experience });
            resp.status(200).json({ success: true, message: "insertion succesfully done" });
            return;
        }
        catch (err) {
            resp.status(400).json({ success: false, message: "insertion failed" });
            return;
        }
    }
}
exports.insertuser = insertuser;
class details {
    async getusersdetails(req, resp) {
        const { name } = req.body;
        if (!name) {
            resp.status(400).json({ message: "cant get body" });
        }
        const getdetails = new userservice_1.getuserservice();
        try {
            const res = await getdetails.getusers({ name: name });
            resp.status(200).json({ res });
        }
        catch (err) {
            resp.status(400).json({ message: "get detail failed" });
            return;
        }
    }
}
exports.details = details;
//# sourceMappingURL=usercontroller.js.map
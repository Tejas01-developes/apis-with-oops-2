"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const usercontroller_1 = require("../controller/usercontroller");
class route {
    router;
    constructor() {
        this.router = express_1.default.Router();
    }
    methods() {
        const insertapi = new usercontroller_1.insertuser();
        this.router.post("/", (req, resp) => {
            insertapi.insertuser(req, resp);
        });
        const getapi = new usercontroller_1.details();
        this.router.get("/get", (req, resp) => {
            getapi.getusersdetails(req, resp);
        });
        return this.router;
    }
}
exports.route = route;
//# sourceMappingURL=routes.js.map
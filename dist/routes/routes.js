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
    routes() {
        const insertapi = new usercontroller_1.userinsertcontroller();
        this.router.post("/", (req, resp) => {
            insertapi.insertuser(req, resp);
        });
        const insertapi2 = new usercontroller_1.userinsertcontroller2();
        this.router.post("/2", (req, resp) => {
            insertapi2.insertuser(req, resp);
        });
        const insertapi3 = new usercontroller_1.userinsertcontroller3();
        this.router.post("/3", (req, resp) => {
            insertapi3.insertuser(req, resp);
        });
        const insertapi4 = new usercontroller_1.userinsertcontroller4();
        this.router.post("/4", (req, resp) => {
            insertapi4.insertuser(req, resp);
        });
        const getapi1 = new usercontroller_1.getdetails();
        this.router.get("/get", (req, resp) => {
            getapi1.getdetailsofuser(req, resp);
        });
        const getapi2 = new usercontroller_1.getdetail2();
        this.router.get("/get2", (req, resp) => {
            getapi2.getdetailsofuser(req, resp);
        });
        //   const fieldapi=new fieldadd();
        //   this.router.post("/add",(req,resp)=>{
        //     fieldapi.addfields(req,resp)
        //   })
        return this.router;
    }
}
exports.route = route;
//# sourceMappingURL=routes.js.map
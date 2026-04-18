"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconnection_js_1 = __importDefault(require("./dbconnection/dbconnection.js"));
const routes_js_1 = require("./routes/routes.js");
class server {
    app;
    port;
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.middleware();
        this.inetializeserver();
    }
    middleware() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        dbconnection_js_1.default.dbconnect();
        const router = new routes_js_1.route();
        this.app.use("/apis", router.methods());
    }
    inetializeserver() {
        this.app.listen(this.port, () => {
            console.log(`server started on the port ${this.port}`);
        });
    }
}
new server(3000);
//# sourceMappingURL=app.js.map
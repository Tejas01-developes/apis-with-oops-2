"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class generatetoken {
    accesskey;
    refreshkey;
    constructor() {
        this.accesskey = process.env.ACCESS_KEY;
        this.refreshkey = process.env.REFRESH_KEY;
    }
    accesstoken(id) {
        return jsonwebtoken_1.default.sign({ id: id.id }, this.accesskey, { expiresIn: "15m" });
    }
    refreshtoken(id) {
        return jsonwebtoken_1.default.sign({ id: id.id }, this.refreshkey, { expiresIn: "7d" });
    }
}
exports.default = new generatetoken();
//# sourceMappingURL=tokens.js.map
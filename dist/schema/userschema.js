"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.model1 = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class usermodel {
    schema;
    model;
    constructor() {
        this.schema = new mongoose_1.default.Schema({
            userid: {
                type: Number,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                unique: true,
                required: true
            },
            password: {
                type: String,
                required: true,
            },
            age: {
                type: Number,
                required: true,
            },
            salary: {
                type: Number,
                required: true,
            },
            experience: {
                type: Number,
                required: true,
            },
        }, { timestamps: true });
        this.createindex();
        // this.addmethod();
        this.model = mongoose_1.default.model("users", this.schema);
    }
    createindex() {
        this.schema.index({ email: 1 }, { unique: true });
    }
}
exports.model1 = new usermodel().model;
//# sourceMappingURL=userschema.js.map
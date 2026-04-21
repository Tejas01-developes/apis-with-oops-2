"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailsendingservice = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class emailsendingservice {
    email;
    emailpass;
    createtransport;
    constructor() {
        this.email = process.env.EMAIL,
            this.emailpass = process.env.EMAIL_PASS;
        this.createtransport =
            nodemailer_1.default.createTransport({
                service: "gmail",
                auth: {
                    user: this.email,
                    pass: this.emailpass
                }
            });
        this.sendemails();
    }
    sendemails(to, sub, text) {
        this.createtransport.sendMail({
            from: this.email,
            to,
            subject: sub,
            text
        });
    }
}
exports.emailsendingservice = emailsendingservice;
//# sourceMappingURL=email.js.map
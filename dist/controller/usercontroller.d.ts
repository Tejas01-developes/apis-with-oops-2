import { Request, Response } from "express";
type bodytype1 = {
    name: string;
    age: number;
    profession: string;
    experience: number;
};
export declare class insertuser {
    constructor();
    insertuser(req: Request<{}, {}, bodytype1>, resp: Response): Promise<void>;
}
type bodytype2 = {
    name: string;
};
export declare class details {
    getusersdetails(req: Request<{}, {}, bodytype2>, resp: Response): Promise<void>;
}
export {};
//# sourceMappingURL=usercontroller.d.ts.map
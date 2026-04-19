import { Request, Response } from "express";
type bodytype1 = {
    name: string;
    email: string;
    password: string;
    age: number;
    salary: number;
    experience: number;
};
export declare class userinsertcontroller {
    constructor();
    insertuser(req: Request<{}, {}, bodytype1>, resp: Response): Promise<void>;
}
type bodytype2 = {
    name: string;
    collage: string;
    marks: number;
    passout: number;
    profession: string;
};
export declare class userinsertcontroller2 {
    constructor();
    insertuser(req: Request<{}, {}, bodytype2>, resp: Response): Promise<void>;
}
type bodytype3 = {
    name: string;
};
export declare class getdetails {
    constructor();
    getdetailsofuser(req: Request<{}, {}, bodytype3>, resp: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare class fieldadd {
    addfields(req: Request, resp: Response): Promise<void>;
}
export {};
//# sourceMappingURL=usercontroller.d.ts.map
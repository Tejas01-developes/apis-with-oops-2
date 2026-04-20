type controllertype1 = {
    userid: string;
    name: string;
    email: string;
    password: string;
    age: number;
    salary: number;
    experience: number;
};
export declare class insertservice {
    private collection;
    constructor();
    insertusers(data: controllertype1): Promise<string>;
}
type controllertype2 = {
    userid: string;
    name: string;
    collage: string;
    passout: number;
    marks: number;
    profession: string;
};
export declare class insertservice2 {
    private collection;
    constructor();
    insertusers(data: controllertype2): Promise<string>;
}
type controllertype3 = {
    name: string;
};
export declare class getdetials {
    private dbcollection;
    constructor();
    getuserdetails(data: controllertype3): Promise<import("bson").Document[]>;
}
type controllertype4 = {
    userid: string;
    name: string;
    marks: number;
};
export declare class insertservice3 {
    private collection;
    constructor();
    insertusers(data: controllertype4): Promise<string>;
}
type controllertype5 = {
    name: string;
};
export declare class getdetials2 {
    private dbcollection;
    constructor();
    getuserdetails(data: controllertype5): Promise<import("bson").Document[]>;
}
type controllertype6 = {
    userid: string;
    name: string;
    marks: number[];
};
export declare class insertservice4 {
    private collection;
    constructor();
    insertusers(data: controllertype6): Promise<string>;
}
type controllertype7 = {
    email: string;
};
type returntype = {
    userid: string;
    _id: string;
    password: string;
    name: string;
};
export declare class loginservice {
    private collection;
    constructor();
    loginservices(data: controllertype7): Promise<returntype | null>;
}
export {};
//# sourceMappingURL=userservice.d.ts.map
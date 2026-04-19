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
export declare class addfield {
    private collection;
    constructor();
    addingfield(): void;
}
export {};
//# sourceMappingURL=userservice.d.ts.map
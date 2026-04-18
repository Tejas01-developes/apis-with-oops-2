type controllerrecivetype1 = {
    userid: string;
    name: string;
    age: number;
    profession: string;
    experience: number;
};
export declare class insertservice {
    private insertdb;
    constructor();
    insertservice(data: controllerrecivetype1): Promise<string>;
}
type recivedetails = {
    name: string;
    age: number;
    profession: string;
};
type findtype = {
    name: string;
};
export declare class getuserservice {
    private database;
    private collection;
    constructor();
    getusers(data: findtype): Promise<recivedetails | null>;
}
export {};
//# sourceMappingURL=userservice.d.ts.map
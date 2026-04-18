import { Db } from 'mongodb';
declare class connect {
    private client;
    private db;
    constructor();
    dbconnect(): Promise<void>;
    getdb(): Db;
}
declare const _default: connect;
export default _default;
//# sourceMappingURL=dbconnection.d.ts.map
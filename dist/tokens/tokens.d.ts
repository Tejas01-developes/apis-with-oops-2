type tokendatatype = {
    id: string;
};
declare class generatetoken {
    private accesskey;
    private refreshkey;
    constructor();
    accesstoken(id: tokendatatype): string;
    refreshtoken(id: tokendatatype): string;
}
declare const _default: generatetoken;
export default _default;
//# sourceMappingURL=tokens.d.ts.map
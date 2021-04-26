import { Strategy } from 'passport-jwt';
declare const PassportJwtService_base: new (...args: any[]) => Strategy;
export declare class PassportJwtService extends PassportJwtService_base {
    constructor();
    validate(payload: any): Promise<{
        name: any;
        id: any;
    }>;
}
export {};

import { Strategy } from 'passport-local';
import { ClientService } from '../client/client.service';
declare const PassportLocalService_base: new (...args: any[]) => Strategy;
export declare class PassportLocalService extends PassportLocalService_base {
    private readonly clientService;
    constructor(clientService: ClientService);
    validate(username: string, password: string): Promise<{
        name: string;
        id: number;
    }>;
}
export {};

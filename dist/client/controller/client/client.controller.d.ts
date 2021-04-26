import { AuthService } from 'src/client/service/auth/auth.service';
export declare class ClientController {
    private authService;
    constructor(authService: AuthService);
    verifyPassword(req: any, res: any): Promise<void>;
}

import { AuthService } from './auth.service';
import { RefreshDto } from './dto/Refresh.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: any): Promise<{
        user: any;
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(refreshDto: RefreshDto): Promise<{
        user: import("../user/entities/user.entity").User;
        accessToken: string;
        refreshToken: string;
    }>;
}

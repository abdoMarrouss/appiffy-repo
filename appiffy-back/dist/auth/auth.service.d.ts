import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';
import { RefreshSession } from './entities/refreshSession.entity';
import { User } from '../user/entities/user.entity';
export declare class AuthService {
    private sessionRepository;
    private userService;
    private jwtService;
    private configService;
    constructor(sessionRepository: Repository<RefreshSession>, userService: UserService, jwtService: JwtService, configService: ConfigService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        user: any;
        accessToken: string;
        refreshToken: string;
    }>;
    createRefreshSession(userId: any, token: string): Promise<RefreshSession>;
    generateAccessToken(payload: {
        id: number;
        username: string;
        email: string;
        role: string;
    }): Promise<string>;
    generateRefreshToken(payload: {
        id: number;
    }): Promise<string>;
    refreshToken(token: string): Promise<{
        user: User;
        accessToken: string;
        refreshToken: string;
    }>;
}

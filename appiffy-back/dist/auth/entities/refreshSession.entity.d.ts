import { User } from '../../user/entities/user.entity';
export declare class RefreshSession {
    id: number;
    user: User;
    refreshToken: string;
    expiresIn: number;
    createdAt: number;
}

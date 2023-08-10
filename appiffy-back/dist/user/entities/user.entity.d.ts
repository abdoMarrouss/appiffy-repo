import { RefreshSession } from '../../auth/entities/refreshSession.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    sessions: RefreshSession[];
}

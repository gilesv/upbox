import { Collection, User } from '@prisma/client';
import { AuthService } from './auth/auth.service';
import { DbService } from './db/db.service';
export declare class AppController {
    private readonly db;
    private authService;
    constructor(db: DbService, authService: AuthService);
    getUser(id: number): Promise<User>;
    createUser(userData: {
        name: string;
        email: string;
    }): Promise<User>;
    createCollection(title: string): Promise<Collection>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}

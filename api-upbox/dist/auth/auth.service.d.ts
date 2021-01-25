import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { DbService } from '../db/db.service';
export declare class AuthService {
    private db;
    private jwtService;
    constructor(db: DbService, jwtService: JwtService);
    validateUser(name: string, password: string): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}

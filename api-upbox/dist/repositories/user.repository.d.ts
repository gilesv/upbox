import { DbService } from '../db.service';
import { User, Prisma } from '@prisma/client';
export declare class UserRepository {
    private db;
    constructor(db: DbService);
    user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>;
    users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByInput;
    }): Promise<User[]>;
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
}

import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: {
        user_id: number;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role_id: number;
        create_at: Date;
        update_at: Date;
    }>;
}
export {};

import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ArticlesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__articleClient<{
        id: number;
        body: string;
        publish: boolean;
        create_at: Date;
        update_at: Date;
        author_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        body: string;
        publish: boolean;
        create_at: Date;
        update_at: Date;
        author_id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__articleClient<{
        id: number;
        body: string;
        publish: boolean;
        create_at: Date;
        update_at: Date;
        author_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__articleClient<{
        id: number;
        body: string;
        publish: boolean;
        create_at: Date;
        update_at: Date;
        author_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__articleClient<{
        id: number;
        body: string;
        publish: boolean;
        create_at: Date;
        update_at: Date;
        author_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}

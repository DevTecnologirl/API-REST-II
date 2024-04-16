import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__articleClient<{
        id: number;
        body: string;
        publish: boolean;
        create_at: Date;
        update_at: Date;
        author_id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__articleClient<{
        id: number;
        body: string;
        publish: boolean;
        create_at: Date;
        update_at: Date;
        author_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__articleClient<{
        id: number;
        body: string;
        publish: boolean;
        create_at: Date;
        update_at: Date;
        author_id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}

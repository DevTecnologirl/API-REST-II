import { ApiProperty } from "@nestjs/swagger"

export class CreateArticleDto {
    @ApiProperty()
    body: string
    @ApiProperty()
    publish: boolean
    @ApiProperty()
    author_id: number
}

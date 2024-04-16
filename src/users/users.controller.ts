import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/authorization/roles.guard';
import { Permissions } from 'src/authorization/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard,RolesGuard)
@ApiBearerAuth()
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Permissions('create-users')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Permissions('get-all-users')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('articles/:user_id')
  @Permissions('consult-users')
  articles(@Param('user_id') user_id: string) {
    return this.usersService.findMyArticles(+user_id)
  }

  @Get('me')
  me(@Request() req) {
    return req.user;
  }

  @Get(':id')
  @Permissions('get-one-users')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @Permissions('update-users')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Permissions('remove-users')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
 
}

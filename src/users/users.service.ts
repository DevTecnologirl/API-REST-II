import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

const roundsOfHash = 10;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {} 

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, roundsOfHash)
    createUserDto.password = await hashedPassword
    return this.prisma.user.create({
      data: createUserDto
    });
  }

  findMyArticles(user_id) {
    return this.prisma.user.findUnique({
      where: {
        id: user_id
      },
      select: {
        name: true,
        article: true
      }
    })
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        name:true,
        email:true,
        role: true, 
      }
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id
      },
      select: {
        email:true,
        name:true,
      }
    
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hashedPassword = await bcrypt.hash(updateUserDto?.password || '', roundsOfHash)
    updateUserDto.password = await hashedPassword || ''
    return this.prisma.user.update({
      where: {
        id
      },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id }
    });
  }
}

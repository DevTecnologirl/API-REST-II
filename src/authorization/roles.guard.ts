import {  PrismaClient } from '@prisma/client';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permissions = this.reflector.get<string[]>('permissions', context.getHandler());

    if (!permissions) {
        return true;
    }

    const request = context.switchToHttp().getRequest();

    const userId = request.user.id;

    const userPermissions = await this.getUserPermissions(userId);

    return permissions.every((permission)=> userPermissions.includes(permission))
  }

  async getUserPermissions(userId: number): Promise<string[]>{

    const user = await this.prisma.user.findUnique({
        where: {id: userId},
        include: {
            role:{
                include:{
                    role_permission:{
                        include:{
                            permission: true
                        }
                    }
                }
            }
        }
    })

    const permission = user.role?.role_permission.map((rp) => rp.permission.slug) || []
    return permission;
  }


}


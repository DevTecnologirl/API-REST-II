import { SetMetadata } from "@nestjs/common";
import { Role } from '../enums/role.enum';
export const PERMISSIONS_KEY = 'permissions';
export const Permissions = (...permissions: String[]) => SetMetadata('permissions', permissions)
import { SetMetadata } from '@nestjs/common';

export const AuthorizeRoles = (...roles: string[]) => SetMetadata('allowedRoles', roles);
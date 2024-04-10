import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('role', context.getHandler());
    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // No roles required, so access is granted
    }
    const { user } = context.switchToHttp().getRequest();
    if (!user || !user.role) {
      return false; // User not authenticated or role not provided
    }
    console.log(`[User :  [${user.username}][${user.userId}] Has Role : [${user.role}]]`);
    return requiredRoles.some(role => user.role === role); // Check if the user's role matches any of the required roles
  }
}
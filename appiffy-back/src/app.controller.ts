import { Controller, Get, UseGuards, Logger  } from '@nestjs/common'
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard'
import { Public } from './auth/common/public-auth.guard'
import { User } from './auth/common/user.decorator'

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  
  @Public()
  @Get('/public')
  publicRoute(): string {
    return 'Public route'
  }

  @UseGuards(JwtAuthGuard)
  @Get('/private')
  privateRoute(@User() user): string {
    return `Private route: Hello ${user.username}`
  }

  @Get()
  getHello(): string {
    this.logger.log('This is a log message');
    this.logger.warn('This is a warning message');
    this.logger.error('This is an error message');
    return 'Hello World!';
  }
}

import { Controller, Post, UseGuards, Body, Get, Request, Delete, HttpCode, HttpStatus  } from '@nestjs/common'
import { AuthService } from './auth.service'
import { User } from './common/user.decorator'
import { RefreshDto } from './dto/Refresh.dto'
import { LocalAuthGuard } from './local/local-auth.guard'
import { JwtAuthGuard } from './jwt/jwt-auth.guard'
import { GetCurrentUserId } from './decorator/get-current-userId-decorator'
// import { HasRoles } from './decorator/rote.decorator'
// import { RolesGuard } from './jwt/role.guard'

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@User() user) {
    return await this.authService.login(user)
  }

  @Post('refresh')
  async refresh(@Body() refreshDto: RefreshDto) {
    return await this.authService.refreshToken(refreshDto.refreshToken)
  }


  // @HasRoles(['client', 'admin']) 
  @UseGuards(JwtAuthGuard)
  @Get('dashboard')
  async getDashboard(@Request() req) {
    return req.user;
  }


   @UseGuards(JwtAuthGuard)
   @Delete('logout')
   async logout(@Request() req) {
     await this.authService.revokeRefreshToken(req.user.id);
     return { message: 'Logged out successfully' };
   }


  
}
import { Controller, Post, UseGuards, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { User } from './common/user.decorator'
import { RefreshDto } from './dto/Refresh.dto'
import { LocalAuthGuard } from './local/local-auth.guard'

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

}
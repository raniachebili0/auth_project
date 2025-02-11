import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { SignupDto } from './dtos/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {  }


  @Post('login')
  async login(@Body() credentials: LoginDto) {
    return this.authService.signIn(credentials.numberPhone,credentials.pass);
  }

  @Post('signup')
  async signUp(@Body() signupData: SignupDto) {
    return this.authService.signup(signupData);
  }
}

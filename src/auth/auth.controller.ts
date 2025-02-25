import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { SignupDto } from './dtos/signup.dto';
import { VerifyOtpDto } from './dtos/verify_otp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {  }


  // Step 1: Send OTP to user's email
  @Post('sendOtp')
  async sendOtp(
    @Body('email') email: string,
  ) {
    const result = await this.authService.sendOtp( email);
    return { message: 'OTP sent successfully', otp: result.otp };
  }

  // Step 2: Verify OTP and continue signup
  @Post('verify-otp')
  async verifyOtp(@Body() body: VerifyOtpDto & { email: string }): Promise<string> {
    const isValid = await this.authService.verifyOtp(body.email, body.otp);
    if (!isValid) {
      throw new Error('Invalid OTP');  // You can throw custom exception
    }
    return 'OTP Verified';
  }

  @Post('signup')
  async signUp(@Body() signupData: SignupDto) {
    try {
      const result = await this.authService.signupUser(signupData);
      console.log('Signup successful:', result);
      return result;
    } catch (error) {
      console.error('Signup error:', error);
      throw new BadRequestException(error.message);
    }
    
  }

  @Post('login')
  async login(@Body() credentials: LoginDto) {
    return await this.authService.login(credentials);
  }


}

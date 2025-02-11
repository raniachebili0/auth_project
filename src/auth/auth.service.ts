import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dtos/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RefreshToken } from './schemas/refresh-token.schema';
import { ResetToken } from './schemas/reset-token.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dtos/signup.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(RefreshToken.name)
        private RefreshTokenModel: Model<RefreshToken>,
        @InjectModel(ResetToken.name)
        private ResetTokenModel: Model<ResetToken>,
        private usersService: UsersService,
        private jwtService: JwtService) {}

    async signIn(email: string,pass :string) {
        const user = await this.usersService.findOnebyPhoneNb(email);
        if (!user) {
            throw new NotFoundException(`User with phone number ${email} does not exist`);
          }
        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch){
            throw new UnauthorizedException();
        }
      /* const userObject = user.toObject();
       // const { email, ...result } = userObject;
        
        const tokens = await this.generateUserTokens(user._id);
        return {
          ...tokens,
          userId: user._id,
        };
      */
    }

    async signup(signupData: SignupDto) {
        const { numberPhone, password, name } = signupData;
    
        const numberPhoneInUse = await this.usersService.findOnebyPhoneNb(
            numberPhone,
        );
        if (numberPhoneInUse) {
          throw new BadRequestException('Email already in use');
        }
        //Hash password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
    
        // Create user document and save in mongodb
        return await this.usersService.create({
          name,
          numberPhone,
          password: hashedPassword,
        });
      }









    async generateUserTokens(userId) {
        const accessToken = this.jwtService.sign({ userId }, { expiresIn: '10h' });
        const refreshToken = uuidv4();
    
        await this.storeRefreshToken(refreshToken, userId);
        return {
          accessToken,
          refreshToken,
        };
      }

    async storeRefreshToken(token: string, userId: string) {
    // Calculate expiry date 3 days from now
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 3);

    await this.RefreshTokenModel.updateOne(
      { userId },
      { $set: { expiryDate, token } },
      {
        upsert: true,
      },
    );
  }



}

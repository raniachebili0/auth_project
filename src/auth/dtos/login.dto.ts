import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  numberPhone: string;

  @IsString()
  pass: string;
}

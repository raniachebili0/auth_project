import { IsEmail, IsEnum, IsObject, IsOptional, IsString, Matches, MinLength } from 'class-validator';
import { Resource } from 'src/roles/enums/resource.enum';
import { Roles } from 'src/roles/enums/roles.enum';
import { PatientInfo } from 'src/users/schemas/PatientInfo.schema';
import { PractitionerInfo } from 'src/users/schemas/PractitionerInfo.schema';


enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class SignupDto {
  @IsString()
  email: string;
  
  @IsEnum(Gender, {
    message: 'Gender must be one of the following values: male or female',
  })
  gender: string;
  @IsString()
  name: string;
  @IsString()
  birthDate :string;
  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[0-9])/, { message: 'Password must contain at least one number' })
  password: string;
  @IsString()
  telecom: string;

  /*@IsString()
  photo : string;*/


 // @IsEnum(Roles) 
  @IsOptional()
  role: string;

  @IsObject() 
  @IsOptional()
  patientInfo: PatientInfo;
  @IsOptional()
  @IsObject()
  practitionerInfo: PractitionerInfo;
    
 
}

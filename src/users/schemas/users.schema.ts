import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, SchemaTypes, Types } from "mongoose";  // Ensure Document is imported
import { PatientInfo } from "./PatientInfo.schema";
import { PractitionerInfo } from "./PractitionerInfo.schema";
import { IsEnum } from "class-validator";
import { Gender } from '../enums/gender.enum';

// Define the type of UserDocument, which is a Mongoose Document of the User class
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User   {  // Extend Document to inherit Mongoose methods

  @Prop({ required: true})
  resourceType: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  
  @IsEnum(Gender)
  gender: string;

  @Prop()
  birthDate: string;

  @Prop()
  address: string;

  @Prop()
  telecom: string;  

  @Prop()
  photo : string;

  @Prop({ default: false })
  active: boolean; 

  @Prop({ required: false, type: SchemaTypes.ObjectId ,ref : 'Role'})
  roleId: Types.ObjectId;
  
  @Prop({ type: SchemaTypes.ObjectId , ref: 'PatientInfo' })
  patientInfo: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId , ref: 'PractitionerInfo' })
  practitionerInfo: PractitionerInfo;
}

export const UserSchema = SchemaFactory.createForClass(User);



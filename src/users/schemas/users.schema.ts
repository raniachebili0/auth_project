import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, SchemaTypes, Types } from "mongoose";  // Ensure Document is imported

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

  @Prop({ required: true, enum: ['male', 'female', 'other', 'unknown'] })
  gender: string;

  @Prop()
  birthDate: Date;

  @Prop()
  address: string;

  @Prop()
  telecom: string;  

  @Prop()
  photo : string;

  @Prop({ default: false })
  active: boolean; 

  @Prop({ required: false, type: SchemaTypes.ObjectId })
  roleId: Types.ObjectId;

  
}



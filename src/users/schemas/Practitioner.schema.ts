import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './users.schema';

@Schema()
export class Practitioner extends User {
  @Prop({ required: true, unique: true })
  licenseNumber: string;  // Maps to FHIR `identifier`

  @Prop({ required: true })
  specialization: string;  // Maps to FHIR `qualification.code`

}

export type PractitionerDocument = Practitioner & Document;
export const PractitionerSchema = SchemaFactory.createForClass(Practitioner);

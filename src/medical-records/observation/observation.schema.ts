import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Patient } from 'src/users/schemas/patient.schema';  // Reference to Patient

@Schema()
export class Observation extends Document {
  @Prop({ required: true })
  code: string;  // Code for the observation (e.g., lab result, physical exam)

  @Prop({ required: true })
  value: string;  // The observed value (e.g., test result)

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop()
  effectiveDate: Date;  // Date when the observation was made
}

export const ObservationSchema = SchemaFactory.createForClass(Observation);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Patient } from 'src/users/schemas/patient.schema';  // Reference to Patient

@Schema()
export class MedicationRequest extends Document {
  @Prop({ required: true })
  medicationCode: string;  // Medication code (e.g., drug name or code)

  @Prop({ required: true })
  dosage: string;  // Dosage of the medication

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop()
  startDate: Date;  // Start date for the medication
}

export const MedicationRequestSchema = SchemaFactory.createForClass(MedicationRequest);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Patient } from 'src/users/schemas/patient.schema';  // Reference to Patient

@Schema()
export class Immunization extends Document {
  @Prop({ required: true })
  vaccineCode: string;  // Vaccine code (e.g., influenza, MMR)

  @Prop({ required: true })
  description: string;  // Description of the immunization

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop()
  immunizationDate: Date;  // Date of immunization
}

export const ImmunizationSchema = SchemaFactory.createForClass(Immunization);

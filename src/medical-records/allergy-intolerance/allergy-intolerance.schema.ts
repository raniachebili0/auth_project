import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Patient } from 'src/users/schemas/patient.schema';  // Reference to Patient

@Schema()
export class AllergyIntolerance extends Document {
  @Prop({ required: true })
  substanceCode: string;  // Allergy substance code (e.g., peanut, pollen)

  @Prop({ required: true })
  severity: string;  // Severity of the allergy (e.g., mild, severe)

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop()
  onsetDate: Date;  // Date when the allergy was first identified
}

export const AllergyIntoleranceSchema = SchemaFactory.createForClass(AllergyIntolerance);

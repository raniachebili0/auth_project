import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';


@Schema()
export class Condition extends Document {
  @Prop({ required: true })
  code: string;  // Condition code (e.g., ICD-10)

  @Prop({ required: true })
  description: string;  // Description of the condition

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop()
  onsetDate: Date;  // Onset date of the condition

  @Prop({ required: true })
  severity: string;  // Severity of the condition
}

export const ConditionSchema = SchemaFactory.createForClass(Condition);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';


@Schema()
export class Encounter extends Document {
  @Prop({ required: true })
  encounterType: string;  // Type of encounter (e.g., inpatient, outpatient)

  @Prop({ required: true })
  status: string;  // Status of the encounter (e.g., active, completed)

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Practitioner' })
  practitioners: Types.ObjectId[];  // References to Practitioners involved

  @Prop()
  periodStart: Date;  // Start date of the encounter

  @Prop()
  periodEnd: Date;  // End date of the encounter

  @Prop()
  reason: string;  // Reason for the encounter
}

export const EncounterSchema = SchemaFactory.createForClass(Encounter);

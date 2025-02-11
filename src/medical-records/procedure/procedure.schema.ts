import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Patient } from 'src/users/schemas/patient.schema';  // Reference to Patient

@Schema()
export class Procedure extends Document {
  @Prop({ required: true })
  procedureCode: string;  // Procedure code (e.g., surgery code)

  @Prop({ required: true })
  description: string;  // Description of the procedure

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop()
  procedureDate: Date;  // Date the procedure was performed
}

export const ProcedureSchema = SchemaFactory.createForClass(Procedure);

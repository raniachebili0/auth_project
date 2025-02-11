import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Patient } from 'src/users/schemas/patient.schema';  // Reference to Patient

@Schema()
export class DiagnosticReport extends Document {
  @Prop({ required: true })
  reportType: string;  // Type of diagnostic report (e.g., X-ray, Blood Test)

  @Prop({ required: true })
  status: string;  // Status of the report (e.g., completed, pending)

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop()
  issuedDate: Date;  // Date the report was issued
}

export const DiagnosticReportSchema = SchemaFactory.createForClass(DiagnosticReport);

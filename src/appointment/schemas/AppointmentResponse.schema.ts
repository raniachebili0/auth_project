import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Appointment } from './appointment.schema';

@Schema()
export class AppointmentResponse extends Document {
  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Appointment' })
  appointment: Types.ObjectId;  // Reference to the Appointment resource

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to the Patient

  @Prop({ required: true })
  status: string;  // e.g., 'accepted', 'rejected', 'tentative'

  @Prop()
  comment: string;  // Optional comment from the patient or doctor regarding the appointment response
}

export const AppointmentResponseSchema = SchemaFactory.createForClass(AppointmentResponse);

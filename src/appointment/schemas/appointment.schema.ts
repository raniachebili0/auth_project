import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';


@Schema()
export class Appointment extends Document {
  @Prop({ required: true })
  status: string;  // e.g., 'scheduled', 'cancelled', 'completed'

  @Prop({ required: true })
  type: string;  // Type of appointment (e.g., 'online consultation')

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to the Patient resource

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Practitioner' })
  practitioner: Types.ObjectId;  // Reference to the Practitioner (Doctor)

  @Prop({ required: true })
  startDateTime: Date;  // Appointment start date and time

  @Prop({ required: true })
  endDateTime: Date;  // Appointment end date and time

  @Prop({ required: false })
  reason: string;  // Reason for the appointment
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

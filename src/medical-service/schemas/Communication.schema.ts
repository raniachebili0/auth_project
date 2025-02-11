import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema()
export class Communication extends Document {
  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to the Patient resource

  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Practitioner' })
  practitioner: Types.ObjectId;  // Reference to the Practitioner resource

  @Prop({ required: true })
  content: string;  // The content of the communication (message)

  @Prop({ required: true })
  type: string;  // Type of communication (e.g., 'consultation message', 'appointment reminder')

  @Prop({ required: true })
  dateTime: Date;  // The date and time the message was sent or received
}

export const CommunicationSchema = SchemaFactory.createForClass(Communication);

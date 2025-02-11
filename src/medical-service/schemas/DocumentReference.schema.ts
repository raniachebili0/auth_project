import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';


@Schema()
export class DocumentReference extends Document {
  @Prop({ required: true, type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to the Patient resource

  @Prop({ required: true })
  documentType: string;  // Type of document (e.g., 'prescription', 'test result')

  @Prop({ required: true })
  title: string;  // Document title

  @Prop({ required: true })
  date: Date;  // Date when the document was created

  @Prop({ required: true })
  content: string;  // The actual content or reference to the document (e.g., URL, base64)

  @Prop({ required: false })
  description: string;  // Optional description for the document
}

export const DocumentReferenceSchema = SchemaFactory.createForClass(DocumentReference);

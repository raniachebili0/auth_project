import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Patient } from 'src/users/schemas/patient.schema';  // Reference to Patient

@Schema()
export class ImagingStudy extends Document {
  @Prop({ required: true })
  modality: string;  // Modality type (e.g., MRI, CT scan)

  @Prop({ required: true })
  description: string;  // Description of the imaging study

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Patient' })
  patient: Types.ObjectId;  // Reference to Patient

  @Prop()
  studyDate: Date;  // Date of the imaging study
}

export const ImagingStudySchema = SchemaFactory.createForClass(ImagingStudy);

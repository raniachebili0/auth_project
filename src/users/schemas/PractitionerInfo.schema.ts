import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PractitionerInfoDocument = HydratedDocument<PractitionerInfo>;

@Schema()
export class PractitionerInfo {
  @Prop({ required: true })
  specialization: string;

  @Prop({ required: true })
  licenseNumber: string; // Maps to FHIR `identifier`
 
}

export const PractitionerInfoSchema = SchemaFactory.createForClass(PractitionerInfo);

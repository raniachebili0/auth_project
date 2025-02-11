import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { User } from './users.schema';

// Define the type of PatientDocument, which is a Mongoose Document of the Patient class
export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient extends User {  // Extend Document to inherit Mongoose methods
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'Encounter' })
    encounterId: Types.ObjectId[];  // Reference to Encounter
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'Condition' })
    conditions: Types.ObjectId[];  // Reference to multiple Condition resources
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'Observation' })
    observations: Types.ObjectId[];  // Reference to multiple Observation resources
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'DiagnosticReport' })
    diagnosticReports: Types.ObjectId[];  // Reference to multiple DiagnosticReport resources
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'MedicationRequest' })
    medicationRequests: Types.ObjectId[];  // Reference to multiple MedicationRequest resources
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'Procedure' })
    procedures: Types.ObjectId[];  // Reference to multiple Procedure jj
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'ImagingStudy' })
    imagingStudies: Types.ObjectId[];  // Reference to multiple ImagingStudy resources
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'Immunization' })
    immunizations: Types.ObjectId[];  // Reference to multiple Immunization resources
  
    @Prop({  type: [SchemaTypes.ObjectId], ref: 'AllergyIntolerance' })
    allergyIntolerances: Types.ObjectId[];  // Reference to multiple AllergyIntolerance resources

  
}

// Create the Mongoose schema for the Patient model
export const PatientSchema = SchemaFactory.createForClass(Patient);
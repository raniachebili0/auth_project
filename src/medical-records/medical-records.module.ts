import { Module } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';

@Module({
  providers: [MedicalRecordsService]
})
export class MedicalRecordsModule {}

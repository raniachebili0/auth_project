import { Module } from '@nestjs/common';
import { MedicationRequestService } from './medication-request.service';
import { MedicationRequestController } from './medication-request.controller';

@Module({
  controllers: [MedicationRequestController],
  providers: [MedicationRequestService],
})
export class MedicationRequestModule {}

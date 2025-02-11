import { Module } from '@nestjs/common';
import { MedicalServiceService } from './medical-service.service';
import { MedicalServiceController } from './medical-service.controller';

@Module({
  controllers: [MedicalServiceController],
  providers: [MedicalServiceService],
})
export class MedicalServiceModule {}

import { Module } from '@nestjs/common';
import { ImmunizationService } from './immunization.service';
import { ImmunizationController } from './immunization.controller';

@Module({
  controllers: [ImmunizationController],
  providers: [ImmunizationService],
})
export class ImmunizationModule {}

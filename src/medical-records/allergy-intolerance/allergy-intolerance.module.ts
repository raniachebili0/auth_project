import { Module } from '@nestjs/common';
import { AllergyIntoleranceService } from './allergy-intolerance.service';
import { AllergyIntoleranceController } from './allergy-intolerance.controller';

@Module({
  controllers: [AllergyIntoleranceController],
  providers: [AllergyIntoleranceService],
})
export class AllergyIntoleranceModule {}

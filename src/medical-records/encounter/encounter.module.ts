import { Module } from '@nestjs/common';
import { EncounterService } from './encounter.service';
import { EncounterController } from './encounter.controller';

@Module({
  controllers: [EncounterController],
  providers: [EncounterService],
})
export class EncounterModule {}

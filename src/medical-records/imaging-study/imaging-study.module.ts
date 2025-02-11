import { Module } from '@nestjs/common';
import { ImagingStudyService } from './imaging-study.service';
import { ImagingStudyController } from './imaging-study.controller';

@Module({
  controllers: [ImagingStudyController],
  providers: [ImagingStudyService],
})
export class ImagingStudyModule {}

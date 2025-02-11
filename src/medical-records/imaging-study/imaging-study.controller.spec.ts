import { Test, TestingModule } from '@nestjs/testing';
import { ImagingStudyController } from './imaging-study.controller';
import { ImagingStudyService } from './imaging-study.service';

describe('ImagingStudyController', () => {
  let controller: ImagingStudyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagingStudyController],
      providers: [ImagingStudyService],
    }).compile();

    controller = module.get<ImagingStudyController>(ImagingStudyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

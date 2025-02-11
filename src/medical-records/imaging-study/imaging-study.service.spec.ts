import { Test, TestingModule } from '@nestjs/testing';
import { ImagingStudyService } from './imaging-study.service';

describe('ImagingStudyService', () => {
  let service: ImagingStudyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagingStudyService],
    }).compile();

    service = module.get<ImagingStudyService>(ImagingStudyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

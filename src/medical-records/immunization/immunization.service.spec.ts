import { Test, TestingModule } from '@nestjs/testing';
import { ImmunizationService } from './immunization.service';

describe('ImmunizationService', () => {
  let service: ImmunizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImmunizationService],
    }).compile();

    service = module.get<ImmunizationService>(ImmunizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ImmunizationController } from './immunization.controller';
import { ImmunizationService } from './immunization.service';

describe('ImmunizationController', () => {
  let controller: ImmunizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImmunizationController],
      providers: [ImmunizationService],
    }).compile();

    controller = module.get<ImmunizationController>(ImmunizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

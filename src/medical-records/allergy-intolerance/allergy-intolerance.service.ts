import { Injectable } from '@nestjs/common';
import { CreateAllergyIntoleranceDto } from './dto/create-allergy-intolerance.dto';
import { UpdateAllergyIntoleranceDto } from './dto/update-allergy-intolerance.dto';

@Injectable()
export class AllergyIntoleranceService {
  create(createAllergyIntoleranceDto: CreateAllergyIntoleranceDto) {
    return 'This action adds a new allergyIntolerance';
  }

  findAll() {
    return `This action returns all allergyIntolerance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} allergyIntolerance`;
  }

  update(id: number, updateAllergyIntoleranceDto: UpdateAllergyIntoleranceDto) {
    return `This action updates a #${id} allergyIntolerance`;
  }

  remove(id: number) {
    return `This action removes a #${id} allergyIntolerance`;
  }
}

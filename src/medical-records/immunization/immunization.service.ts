import { Injectable } from '@nestjs/common';
import { CreateImmunizationDto } from './dto/create-immunization.dto';
import { UpdateImmunizationDto } from './dto/update-immunization.dto';

@Injectable()
export class ImmunizationService {
  create(createImmunizationDto: CreateImmunizationDto) {
    return 'This action adds a new immunization';
  }

  findAll() {
    return `This action returns all immunization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} immunization`;
  }

  update(id: number, updateImmunizationDto: UpdateImmunizationDto) {
    return `This action updates a #${id} immunization`;
  }

  remove(id: number) {
    return `This action removes a #${id} immunization`;
  }
}

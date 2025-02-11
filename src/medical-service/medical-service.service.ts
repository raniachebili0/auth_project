import { Injectable } from '@nestjs/common';
import { CreateMedicalServiceDto } from './dto/create-medical-service.dto';
import { UpdateMedicalServiceDto } from './dto/update-medical-service.dto';

@Injectable()
export class MedicalServiceService {
  create(createMedicalServiceDto: CreateMedicalServiceDto) {
    return 'This action adds a new medicalService';
  }

  findAll() {
    return `This action returns all medicalService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalService`;
  }

  update(id: number, updateMedicalServiceDto: UpdateMedicalServiceDto) {
    return `This action updates a #${id} medicalService`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalService`;
  }
}

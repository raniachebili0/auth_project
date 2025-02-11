import { Injectable } from '@nestjs/common';
import { CreateMedicationRequestDto } from './dto/create-medication-request.dto';
import { UpdateMedicationRequestDto } from './dto/update-medication-request.dto';

@Injectable()
export class MedicationRequestService {
  create(createMedicationRequestDto: CreateMedicationRequestDto) {
    return 'This action adds a new medicationRequest';
  }

  findAll() {
    return `This action returns all medicationRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicationRequest`;
  }

  update(id: number, updateMedicationRequestDto: UpdateMedicationRequestDto) {
    return `This action updates a #${id} medicationRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicationRequest`;
  }
}

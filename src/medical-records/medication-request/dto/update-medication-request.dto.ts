import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicationRequestDto } from './create-medication-request.dto';

export class UpdateMedicationRequestDto extends PartialType(CreateMedicationRequestDto) {}

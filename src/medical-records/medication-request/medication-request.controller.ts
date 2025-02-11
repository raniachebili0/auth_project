import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicationRequestService } from './medication-request.service';
import { CreateMedicationRequestDto } from './dto/create-medication-request.dto';
import { UpdateMedicationRequestDto } from './dto/update-medication-request.dto';

@Controller('medication-request')
export class MedicationRequestController {
  constructor(private readonly medicationRequestService: MedicationRequestService) {}

  @Post()
  create(@Body() createMedicationRequestDto: CreateMedicationRequestDto) {
    return this.medicationRequestService.create(createMedicationRequestDto);
  }

  @Get()
  findAll() {
    return this.medicationRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicationRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicationRequestDto: UpdateMedicationRequestDto) {
    return this.medicationRequestService.update(+id, updateMedicationRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicationRequestService.remove(+id);
  }
}

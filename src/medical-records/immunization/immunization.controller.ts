import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImmunizationService } from './immunization.service';
import { CreateImmunizationDto } from './dto/create-immunization.dto';
import { UpdateImmunizationDto } from './dto/update-immunization.dto';

@Controller('immunization')
export class ImmunizationController {
  constructor(private readonly immunizationService: ImmunizationService) {}

  @Post()
  create(@Body() createImmunizationDto: CreateImmunizationDto) {
    return this.immunizationService.create(createImmunizationDto);
  }

  @Get()
  findAll() {
    return this.immunizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.immunizationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImmunizationDto: UpdateImmunizationDto) {
    return this.immunizationService.update(+id, updateImmunizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.immunizationService.remove(+id);
  }
}

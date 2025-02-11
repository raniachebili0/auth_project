import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncounterService } from './encounter.service';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';

@Controller('encounter')
export class EncounterController {
  constructor(private readonly encounterService: EncounterService) {}

  @Post()
  create(@Body() createEncounterDto: CreateEncounterDto) {
    return this.encounterService.create(createEncounterDto);
  }

  @Get()
  findAll() {
    return this.encounterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encounterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncounterDto: UpdateEncounterDto) {
    return this.encounterService.update(+id, updateEncounterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encounterService.remove(+id);
  }
}

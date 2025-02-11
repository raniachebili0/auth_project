import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllergyIntoleranceService } from './allergy-intolerance.service';
import { CreateAllergyIntoleranceDto } from './dto/create-allergy-intolerance.dto';
import { UpdateAllergyIntoleranceDto } from './dto/update-allergy-intolerance.dto';

@Controller('allergy-intolerance')
export class AllergyIntoleranceController {
  constructor(private readonly allergyIntoleranceService: AllergyIntoleranceService) {}

  @Post()
  create(@Body() createAllergyIntoleranceDto: CreateAllergyIntoleranceDto) {
    return this.allergyIntoleranceService.create(createAllergyIntoleranceDto);
  }

  @Get()
  findAll() {
    return this.allergyIntoleranceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allergyIntoleranceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllergyIntoleranceDto: UpdateAllergyIntoleranceDto) {
    return this.allergyIntoleranceService.update(+id, updateAllergyIntoleranceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allergyIntoleranceService.remove(+id);
  }
}

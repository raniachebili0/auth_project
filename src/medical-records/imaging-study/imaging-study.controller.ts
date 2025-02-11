import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagingStudyService } from './imaging-study.service';
import { CreateImagingStudyDto } from './dto/create-imaging-study.dto';
import { UpdateImagingStudyDto } from './dto/update-imaging-study.dto';

@Controller('imaging-study')
export class ImagingStudyController {
  constructor(private readonly imagingStudyService: ImagingStudyService) {}

  @Post()
  create(@Body() createImagingStudyDto: CreateImagingStudyDto) {
    return this.imagingStudyService.create(createImagingStudyDto);
  }

  @Get()
  findAll() {
    return this.imagingStudyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagingStudyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImagingStudyDto: UpdateImagingStudyDto) {
    return this.imagingStudyService.update(+id, updateImagingStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagingStudyService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateImagingStudyDto } from './dto/create-imaging-study.dto';
import { UpdateImagingStudyDto } from './dto/update-imaging-study.dto';

@Injectable()
export class ImagingStudyService {
  create(createImagingStudyDto: CreateImagingStudyDto) {
    return 'This action adds a new imagingStudy';
  }

  findAll() {
    return `This action returns all imagingStudy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagingStudy`;
  }

  update(id: number, updateImagingStudyDto: UpdateImagingStudyDto) {
    return `This action updates a #${id} imagingStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagingStudy`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateDiagnosticReportDto } from './dto/create-diagnostic-report.dto';
import { UpdateDiagnosticReportDto } from './dto/update-diagnostic-report.dto';

@Injectable()
export class DiagnosticReportService {
  create(createDiagnosticReportDto: CreateDiagnosticReportDto) {
    return 'This action adds a new diagnosticReport';
  }

  findAll() {
    return `This action returns all diagnosticReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diagnosticReport`;
  }

  update(id: number, updateDiagnosticReportDto: UpdateDiagnosticReportDto) {
    return `This action updates a #${id} diagnosticReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagnosticReport`;
  }
}

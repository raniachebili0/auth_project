import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiagnosticReportService } from './diagnostic-report.service';
import { CreateDiagnosticReportDto } from './dto/create-diagnostic-report.dto';
import { UpdateDiagnosticReportDto } from './dto/update-diagnostic-report.dto';

@Controller('diagnostic-report')
export class DiagnosticReportController {
  constructor(private readonly diagnosticReportService: DiagnosticReportService) {}

  @Post()
  create(@Body() createDiagnosticReportDto: CreateDiagnosticReportDto) {
    return this.diagnosticReportService.create(createDiagnosticReportDto);
  }

  @Get()
  findAll() {
    return this.diagnosticReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosticReportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiagnosticReportDto: UpdateDiagnosticReportDto) {
    return this.diagnosticReportService.update(+id, updateDiagnosticReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosticReportService.remove(+id);
  }
}

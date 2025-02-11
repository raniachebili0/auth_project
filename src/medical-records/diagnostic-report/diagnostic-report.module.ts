import { Module } from '@nestjs/common';
import { DiagnosticReportService } from './diagnostic-report.service';
import { DiagnosticReportController } from './diagnostic-report.controller';

@Module({
  controllers: [DiagnosticReportController],
  providers: [DiagnosticReportService],
})
export class DiagnosticReportModule {}

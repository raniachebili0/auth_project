import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagnosticReportDto } from './create-diagnostic-report.dto';

export class UpdateDiagnosticReportDto extends PartialType(CreateDiagnosticReportDto) {}

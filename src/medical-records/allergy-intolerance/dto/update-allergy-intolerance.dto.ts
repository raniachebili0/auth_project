import { PartialType } from '@nestjs/mapped-types';
import { CreateAllergyIntoleranceDto } from './create-allergy-intolerance.dto';

export class UpdateAllergyIntoleranceDto extends PartialType(CreateAllergyIntoleranceDto) {}

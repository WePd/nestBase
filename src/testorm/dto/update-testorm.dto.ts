import { PartialType } from '@nestjs/swagger';
import { CreateTestormDto } from './create-testorm.dto';

export class UpdateTestormDto extends PartialType(CreateTestormDto) {}

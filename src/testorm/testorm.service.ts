import { Injectable } from '@nestjs/common';
import { CreateTestormDto } from './dto/create-testorm.dto';
import { UpdateTestormDto } from './dto/update-testorm.dto';

@Injectable()
export class TestormService {
  create(createTestormDto: CreateTestormDto) {
    return 'This action adds a new testorm';
  }

  findAll() {
    return `This action returns all testorm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testorm`;
  }

  update(id: number, updateTestormDto: UpdateTestormDto) {
    return `This action updates a #${id} testorm`;
  }

  remove(id: number) {
    return `This action removes a #${id} testorm`;
  }
}

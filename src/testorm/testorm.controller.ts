import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestormService } from './testorm.service';
import { CreateTestormDto } from './dto/create-testorm.dto';
import { UpdateTestormDto } from './dto/update-testorm.dto';

@Controller('testorm')
export class TestormController {
  constructor(private readonly testormService: TestormService) {}

  @Post()
  create(@Body() createTestormDto: CreateTestormDto) {
    return this.testormService.create(createTestormDto);
  }

  @Get()
  findAll() {
    return this.testormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestormDto: UpdateTestormDto) {
    return this.testormService.update(+id, updateTestormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testormService.remove(+id);
  }
}

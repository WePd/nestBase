import { Module } from '@nestjs/common';
import { TestormService } from './testorm.service';
import { TestormController } from './testorm.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testorm } from './entities/testorm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testorm])],
  controllers: [TestormController],
  providers: [TestormService],
})
export class TestormModule {}

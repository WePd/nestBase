import { Test, TestingModule } from '@nestjs/testing';
import { TestormService } from './testorm.service';

describe('TestormService', () => {
  let service: TestormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestormService],
    }).compile();

    service = module.get<TestormService>(TestormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

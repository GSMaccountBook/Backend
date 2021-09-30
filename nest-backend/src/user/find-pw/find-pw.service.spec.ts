import { Test, TestingModule } from '@nestjs/testing';
import { FindPwService } from './find-pw.service';

describe('FindPwService', () => {
  let service: FindPwService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindPwService],
    }).compile();

    service = module.get<FindPwService>(FindPwService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

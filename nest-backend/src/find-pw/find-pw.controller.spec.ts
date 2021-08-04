import { Test, TestingModule } from '@nestjs/testing';
import { FindPwController } from './find-pw.controller';

describe('FindPwController', () => {
  let controller: FindPwController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindPwController],
    }).compile();

    controller = module.get<FindPwController>(FindPwController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

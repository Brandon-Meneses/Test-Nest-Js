import { Test, TestingModule } from '@nestjs/testing';
import { ShapeCalculatorService } from './shape-calculator.service';

describe('ShapeCalculatorService', () => {
  let service: ShapeCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShapeCalculatorService],
    }).compile();

    service = module.get<ShapeCalculatorService>(ShapeCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

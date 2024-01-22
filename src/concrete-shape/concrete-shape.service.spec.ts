import { Test, TestingModule } from '@nestjs/testing';
import { ConcreteShapeService } from './concrete-shape.service';

describe('ConcreteShapeService', () => {
  let service: ConcreteShapeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConcreteShapeService],
    }).compile();

    service = module.get<ConcreteShapeService>(ConcreteShapeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

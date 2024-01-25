import { Injectable } from '@nestjs/common';
import { ShapeService } from '../shape/shape.service';

@Injectable()
export class ConcreteShapeService extends ShapeService {
  calculateArea(): number {
    return 0;
  }
}

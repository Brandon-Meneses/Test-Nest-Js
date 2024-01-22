import { Injectable } from '@nestjs/common';
import { ShapeService } from '../shape/shape.service';

@Injectable()
export class ShapeCalculatorService {
  totalArea(shapes: ShapeService[]): number {
    let total = 0;

    for (const shape of shapes) {
      const area = shape.calculateArea();
      total += area;
    }
    return total;
  }
}

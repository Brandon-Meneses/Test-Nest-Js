import { Injectable } from '@nestjs/common';
import { ShapeService } from '../shape/shape.service';

@Injectable()
export class CircleService extends ShapeService {
  calculateArea(): number {
    const radius = 5;
    return Math.PI * radius * radius;
  }
}

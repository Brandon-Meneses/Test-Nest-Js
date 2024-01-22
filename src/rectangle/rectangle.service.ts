import { Injectable } from '@nestjs/common';
import { ShapeService } from '../shape/shape.service';

@Injectable()
export class RectangleService extends ShapeService {
  private readonly base: number = 3;
  private readonly height: number = 4;

  calculateArea(): number {
    return this.base * this.height;
  }
}

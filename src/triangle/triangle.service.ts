import { Injectable } from '@nestjs/common';
import { ShapeService } from '../shape/shape.service';

@Injectable()
export class TriangleService extends ShapeService {
  private readonly base: number = 5;
  private readonly height: number = 6;

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}

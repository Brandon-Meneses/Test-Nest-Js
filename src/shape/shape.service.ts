import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class ShapeService {
  abstract calculateArea(): number;
}

import { Module } from '@nestjs/common';
import { ShapeService } from './shape.service';
import { ConcreteShapeService } from '../concrete-shape/concrete-shape.service';

@Module({
  providers: [{ provide: ShapeService, useClass: ConcreteShapeService }],
  exports: [ShapeService],
})
export class ShapeModule {}

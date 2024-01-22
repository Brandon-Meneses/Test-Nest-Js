import { Module } from '@nestjs/common';
import { ShapeCalculatorService } from './shape-calculator.service';

@Module({
  providers: [ShapeCalculatorService],
  exports: [ShapeCalculatorService],
})
export class ShapeCalculatorModule {}

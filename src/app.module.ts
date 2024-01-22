import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShapeModule } from './shape/shape.module';
import { CircleModule } from './circle/circle.module';
import { ShapeCalculatorService } from './shape-calculator/shape-calculator.service';
import { TriangleModule } from './triangle/triangle.module';
import { RectangleModule } from './rectangle/rectangle.module';
import { ShapeCalculatorModule } from './shape-calculator/shape-calculator.module';
import { ConcreteShapeService } from './concrete-shape/concrete-shape.service';

@Module({
  imports: [
    ShapeModule,
    CircleModule,
    TriangleModule,
    RectangleModule,
    ShapeCalculatorModule,
  ],
  controllers: [AppController],
  providers: [AppService, ShapeCalculatorService, ConcreteShapeService],
})
export class AppModule {}

import { Get, Controller } from '@nestjs/common';
import { ShapeCalculatorService } from './shape-calculator/shape-calculator.service';
import { CircleService } from './circle/circle.service';
import { RectangleService } from './rectangle/rectangle.service';
import { TriangleService } from './triangle/triangle.service';

@Controller()
export class AppController {
  constructor(
    private readonly shapeCalculatorService: ShapeCalculatorService,
    private readonly circleService: CircleService,
    private readonly rectangleService: RectangleService,
    private readonly triangleService: TriangleService,
  ) {}

  @Get()
  getHello(): string {
    const circleArea = this.circleService.calculateArea();
    const rectangleArea = this.rectangleService.calculateArea();
    const triangleArea = this.triangleService.calculateArea();
    const totalArea = this.shapeCalculatorService.totalArea([
      this.circleService,
      this.rectangleService,
      this.triangleService,
    ]);

    return `
      Circle Area: ${circleArea}<br>
      Rectangle Area: ${rectangleArea}<br>
      Triangle Area: ${triangleArea}<br>
      Total Area: ${totalArea}
    `;
  }
}

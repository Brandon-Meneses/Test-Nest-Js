import { Module } from '@nestjs/common';
import { CircleService } from './circle.service';
import { ShapeModule } from '../shape/shape.module';

@Module({
  providers: [CircleService],
  exports: [CircleService],
  imports: [ShapeModule],
})
export class CircleModule {}

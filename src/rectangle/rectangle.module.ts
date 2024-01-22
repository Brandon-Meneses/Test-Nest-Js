import { Module } from '@nestjs/common';
import { RectangleService } from './rectangle.service';

@Module({
  providers: [RectangleService],
  exports: [RectangleService],
})
export class RectangleModule {}

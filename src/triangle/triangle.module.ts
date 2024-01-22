import { Module } from '@nestjs/common';
import { TriangleService } from './triangle.service';

@Module({
  providers: [TriangleService],
  exports: [TriangleService],
})
export class TriangleModule {}

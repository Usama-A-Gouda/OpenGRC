import { Module } from '@nestjs/common';
import { FrameworksService } from './frameworks.service.js';
import { FrameworksController } from './frameworks.controller.js';

@Module({
  providers: [FrameworksService],
  controllers: [FrameworksController],
})
export class FrameworksModule {}

import { Module } from '@nestjs/common';
import { FrameworksModule } from './frameworks/frameworks.module.js';

@Module({
  imports: [FrameworksModule],
})
export class AppModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { FrameworksService, Framework } from './frameworks.service.js';
import { CreateFrameworkDto } from './dto/create-framework.dto.js';
import { UpdateFrameworkDto } from './dto/update-framework.dto.js';

@Controller('frameworks')
export class FrameworksController {
  constructor(private readonly frameworksService: FrameworksService) {}

  @Get()
  getFrameworks(): Framework[] {
    return this.frameworksService.findAll();
  }

  @Get(':id')
  getFramework(@Param('id', ParseIntPipe) id: number): Framework {
    return this.frameworksService.findOne(id);
  }

  @Post()
  createFramework(@Body() payload: CreateFrameworkDto): Framework {
    return this.frameworksService.create(payload);
  }

  @Put(':id')
  updateFramework(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateFrameworkDto,
  ): Framework {
    return this.frameworksService.update(id, payload);
  }

  @Delete(':id')
  deleteFramework(@Param('id', ParseIntPipe) id: number): void {
    this.frameworksService.remove(id);
  }
}

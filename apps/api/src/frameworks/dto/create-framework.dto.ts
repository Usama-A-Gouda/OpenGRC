import { IsArray, IsIn, IsOptional, IsString, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class FrameworkControlDto {
  @IsString()
  @MinLength(1)
  title!: string;

  @IsIn(['draft', 'in-progress', 'complete'])
  status!: 'draft' | 'in-progress' | 'complete';
}

export class CreateFrameworkDto {
  @IsString()
  @MinLength(1)
  name!: string;

  @IsString()
  @MinLength(10)
  description!: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FrameworkControlDto)
  @IsOptional()
  controls?: FrameworkControlDto[];
}

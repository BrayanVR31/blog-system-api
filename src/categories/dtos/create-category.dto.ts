import { IsString, MaxLength, IsOptional, MinLength } from "class-validator";

export default class CreateCategoryDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name: string;
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  slug?: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsString()
  @MinLength(2)
  @MaxLength(7)
  color: string;
}
import { IsString, MinLength, MaxLength, IsOptional } from "class-validator";

export default class CreateTagDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  slug: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsString()
  @MinLength(2)
  @MaxLength(7)
  color: string;
}
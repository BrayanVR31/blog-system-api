import { IsUUID } from "class-validator";

export default class GetParamsCategoryDto {
  @IsUUID()
  id: string;
}
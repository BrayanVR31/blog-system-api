import { IsUUID } from "class-validator";

export default class GetParamsUserDto {
  @IsUUID()
  id: string;
}